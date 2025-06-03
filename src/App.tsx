// src/App.tsx
import React, { useState } from 'react';
import { Brain, CheckCircle2, BarChart } from 'lucide-react';
import { questions, results } from './data';
import { Occupation, Result, PersonalityStats } from './types';

/*───────────────────────────────────────────
  1. 職業リスト
───────────────────────────────────────────*/
const occupations: Occupation[] = [
  { id: 'scientist',    name: 'scientist' },
  { id: 'entrepreneur', name: 'entrepreneur' },
  { id: 'designer',     name: 'designer' },
  { id: 'teacher',      name: 'teacher' },
  { id: 'doctor',       name: 'doctor' },
  { id: 'engineer',     name: 'engineer' },
  { id: 'artist',       name: 'artist' },
  { id: 'journalist',   name: 'journalist' },
  { id: 'lawyer',       name: 'lawyer' },
  { id: 'investor',     name: 'investor' },
  { id: 'professor',    name: 'professor' },
  { id: 'consultant',   name: 'consultant' },
  { id: 'researcher',   name: 'researcher' },
  { id: 'architect',    name: 'architect' },
  { id: 'copywriter',   name: 'copywriter' },
  { id: 'director',     name: 'film director' }
];

/* Q 番号 ↔ MBTI ペア対応表  */
const pairOrder = [
  { pair: ['E', 'I'] }, // Q1
  { pair: ['S', 'N'] }, // Q2
  { pair: ['T', 'F'] }, // Q3
  { pair: ['J', 'P'] }  // Q4
];

function App() {
  /*───────── state ─────────*/
  const [step, setStep] =
    useState<'occupation' | 'questions' | 'result'>('occupation');

  const [selectedOccupation, setSelectedOccupation] =
    useState<string | null>(null);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  // stats は 0 or 1 で表現
  const [stats, setStats] = useState<PersonalityStats>({
    E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0
  });

  const [result,   setResult]   = useState<Result | null>(null);

  /*───────── handlers ─────────*/
  const handleOccupationSelect = (id: string) => {
    setSelectedOccupation(id === selectedOccupation ? null : id);
  };

  const currentQuestions =
    selectedOccupation ? questions[selectedOccupation] ?? [] : [];

  const handleAnswer = (letter: string) => {
    /* 1. stats を即時更新（片側=1 & 反対側=0） */
    const opposing =
      pairOrder[currentQuestion].pair.find((l) => l !== letter) as keyof PersonalityStats;

    setStats((prev) => ({
      ...prev,
      [letter]: 1,
      [opposing]: 0
    }));

    /* 2. 次の Q へ or 結果計算 */
    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      /* ── MBTI 文字列生成 ── */
      const mbtiString = [
        stats.E >= stats.I ? 'E' : 'I',
        stats.S >= stats.N ? 'S' : 'N',
        stats.T >= stats.F ? 'T' : 'F',
        stats.J >= stats.P ? 'J' : 'P'
      ].join('');

      /* ── マッチング ── */
      const sameOcc = results.filter(
        (r) => r.occupation === selectedOccupation
      );
      const perfect = sameOcc.find((r) => r.mbti === mbtiString);
      const pick =
        perfect ?? sameOcc[Math.floor(Math.random() * sameOcc.length)];

      setResult(pick);
      setStep('result');
    }
  };

  const resetQuiz = () => {
    setStep('occupation');
    setSelectedOccupation(null);
    setCurrentQuestion(0);
    setStats({
      E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0
    });
    setResult(null);
  };

  /*───────── UI helpers ─────────*/
  const renderPersonalityStats = () => {
    const pairs = [
      { left: 'E', right: 'I' },
      { left: 'S', right: 'N' },
      { left: 'T', right: 'F' },
      { left: 'J', right: 'P' }
    ];

    return (
      <div className="mt-8 space-y-4">
        <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
          <BarChart className="w-5 h-5" />
          Personality Type Breakdown
        </h3>
        {pairs.map(({ left, right }) => {
          const total = stats[left as keyof PersonalityStats] +
                        stats[right as keyof PersonalityStats] || 1; // まだ未回答でも0除算回避
          const leftPct  = (stats[left  as keyof PersonalityStats] / total) * 100;
          const rightPct = (stats[right as keyof PersonalityStats] / total) * 100;
          return (
            <div key={left} className="flex items-center gap-2">
              <span className="w-8 text-right font-medium">{left}</span>
              <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-600 rounded-full"
                  style={{ width: `${leftPct}%` }}
                />
              </div>
              <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-600 rounded-full"
                  style={{ width: `${rightPct}%` }}
                />
              </div>
              <span className="w-8 font-medium">{right}</span>
            </div>
          );
        })}
      </div>
    );
  };

  /*───────── render ─────────*/
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <Brain className="mx-auto h-12 w-12 text-indigo-600" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Personality Type Analyzer
          </h2>
        </div>

        {/* Step 1 ─ Occupation */}
        {step === 'occupation' && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Select <b>one</b> occupation:
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {occupations.map((o) => (
                <button
                  key={o.id}
                  onClick={() => handleOccupationSelect(o.id)}
                  className={`p-3 rounded-lg text-sm font-medium ${
                    selectedOccupation === o.id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300'
                  }`}
                >
                  {o.name}
                </button>
              ))}
            </div>
            {selectedOccupation && (
              <button
                onClick={() => setStep('questions')}
                className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
              >
                Continue
              </button>
            )}
          </div>
        )}

        {/* Step 2 ─ Questions */}
        {step === 'questions' && currentQuestions.length > 0 && (
          <div>
            <div className="mb-4">
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-indigo-600 rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentQuestion + 1) /
                      currentQuestions.length) *
                      100}%`
                  }}
                />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {currentQuestions[currentQuestion].text}
              </h3>
              <div className="space-y-3">
                {currentQuestions[currentQuestion].choices.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => handleAnswer(c.type)}
                    className="w-full text-left p-3 rounded-lg border border-gray-300 hover:border-indigo-500 hover:bg-indigo-50"
                  >
                    {c.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 3 ─ Result */}
        {step === 'result' && result && (
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />
              <a
                href={result.wikiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-xl font-bold text-gray-900 hover:text-indigo-600"
              >
                {result.name}
              </a>
              <p className="text-sm text-gray-500">{result.mbti}</p>
              <img
                src={result.imageUrl}
                alt={result.name}
                className="mt-6 w-full h-48 object-cover rounded-lg"
              />
              <p className="mt-4 text-gray-600">{result.description}</p>

              {renderPersonalityStats()}

              <button
                onClick={resetQuiz}
                className="mt-8 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
              >
                Start Over
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
