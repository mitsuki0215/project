// src/App.tsx
import React, { useState } from 'react';
import { Brain, CheckCircle2, BarChart } from 'lucide-react';
import { questions, results } from './data';
import { Occupation, Result, PersonalityStats } from './types';

/* ────────────────────────────────────────────────────────────
   1. 16 職業リスト（表示ラベルは任意に調整できます）
   ──────────────────────────────────────────────────────────── */
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

function App() {
  /* ──────────────── state ──────────────── */
  const [step, setStep] =
    useState<'occupation' | 'questions' | 'result'>('occupation');

  // ★ 単一選択へ変更
  const [selectedOccupation, setSelectedOccupation] = useState<string | null>(
    null
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<Result | null>(null);
  const [stats, setStats] = useState<PersonalityStats>({
    E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0
  });

  /* ──────────────── handlers ──────────────── */
  const handleOccupationSelect = (id: string) => {
    // すでに選択しているなら解除、それ以外はその職業に切り替え
    setSelectedOccupation(id === selectedOccupation ? null : id);
  };

  const getCurrentQuestions = () => {
    if (!selectedOccupation) return [];
    return questions[selectedOccupation] || [];
  };

  const handleAnswer = (type: string) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);

    const currentQuestions = getCurrentQuestions();
    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      /* ─── MBTI 集計 ─── */
      const newStats = newAnswers.reduce(
        (acc, t) => {
          acc[t as keyof PersonalityStats]++;
          return acc;
        },
        { E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0 }
      );
      setStats(newStats);

      /* ─── マッチング：①職業で絞り込み → ②集計から MBTI 文字列生成 → ③最も合致する偉人を選出 ─── */
      const mbtiString = [
        newStats.E >= newStats.I ? 'E' : 'I',
        newStats.S >= newStats.N ? 'S' : 'N',
        newStats.T >= newStats.F ? 'T' : 'F',
        newStats.J >= newStats.P ? 'J' : 'P'
      ].join(''); // 例: ENFP

      const sameOccupation = results.filter(
        (r) => r.occupation === selectedOccupation
      );

      // 完全一致があればそれを、なければ職業一致の中からランダム
      const perfect = sameOccupation.find((r) => r.mbti === mbtiString);
      const finalPick =
        perfect ??
        sameOccupation[Math.floor(Math.random() * sameOccupation.length)];

      setResult(finalPick);
      setStep('result');
    }
  };

  const resetQuiz = () => {
    setStep('occupation');
    setSelectedOccupation(null);
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setStats({ E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0 });
  };

  /* ──────────────── helpers ──────────────── */
  const renderPersonalityStats = () => {
    const maxValue = Math.max(...Object.values(stats));
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
        <div className="space-y-3">
          {pairs.map(({ left, right }) => (
            <div key={`${left}-${right}`} className="flex items-center gap-2">
              <span className="w-8 text-right font-medium">{left}</span>
              <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-600 rounded-full"
                  style={{
                    width: `${(stats[left as keyof PersonalityStats] /
                      maxValue) *
                      100}%`
                  }}
                />
              </div>
              <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-600 rounded-full"
                  style={{
                    width: `${(stats[right as keyof PersonalityStats] /
                      maxValue) *
                      100}%`
                  }}
                />
              </div>
              <span className="w-8 font-medium">{right}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  /* ──────────────── render ──────────────── */
  const currentQuestions = getCurrentQuestions();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <Brain className="mx-auto h-12 w-12 text-indigo-600" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Personality Type Analyzer
          </h2>
        </div>

        {/* ──── Step 1: Occupation select ──── */}
        {step === 'occupation' && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Select <span className="font-bold">one</span> occupation that
              interests you:
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {occupations.map((occupation) => (
                <button
                  key={occupation.id}
                  onClick={() => handleOccupationSelect(occupation.id)}
                  className={`p-3 rounded-lg text-sm font-medium ${
                    selectedOccupation === occupation.id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300'
                  }`}
                >
                  {occupation.name}
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

        {/* ──── Step 2: Questions ──── */}
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
                {currentQuestions[currentQuestion].choices.map((choice) => (
                  <button
                    key={choice.id}
                    onClick={() => handleAnswer(choice.type)}
                    className="w-full text-left p-3 rounded-lg border border-gray-300 hover:border-indigo-500 hover:bg-indigo-50"
                  >
                    {choice.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ──── Step 3: Result ──── */}
        {step === 'result' && result && (
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />
              <a
                href={result.wikiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors"
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
