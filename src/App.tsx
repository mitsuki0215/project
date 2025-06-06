import React, { useState } from 'react';
import { CheckCircle2, BarChart } from 'lucide-react';
import AppIcon from './assets/BioFit4Q_icon.png';
import { questions, results } from './data';
import { Occupation, Result, PersonalityStats } from './types';

/*───────────────────────────────────────────
  職業リスト
───────────────────────────────────────────*/
const occupations: Occupation[] = [
  { id: 'scientist',    name: '科学者' },
  { id: 'entrepreneur', name: '起業家' },
  { id: 'designer',     name: 'デザイナー' },
  { id: 'teacher',      name: '教師' },
  { id: 'doctor',       name: '医者' },
  { id: 'engineer',     name: 'エンジニア' },
  { id: 'artist',       name: 'アーティスト' },
  { id: 'journalist',   name: 'ジャーナリスト' },
  { id: 'lawyer',       name: '弁護士' },
  { id: 'investor',     name: '投資家' },
  { id: 'professor',    name: '教授' },
  { id: 'consultant',   name: 'コンサルタント' },
  { id: 'researcher',   name: '研究者' },
  { id: 'architect',    name: '建築家' },
  { id: 'copywriter',   name: 'コピーライター' },
  { id: 'director',     name: '映画監督' }
];

/* Q ↔ MBTI ペア */
const pairOrder = [
  { pair: ['E', 'I'] },
  { pair: ['S', 'N'] },
  { pair: ['T', 'F'] },
  { pair: ['J', 'P'] }
];

/*───────────────────────────────────────────
  補助関数
───────────────────────────────────────────*/
const mbtiDistance = (a: string, b: string) =>
  [...a].reduce((acc, ch, i) => acc + (ch !== b[i] ? 1 : 0), 0);

const makeMbti = (s: PersonalityStats) =>
  [s.E >= s.I ? 'E' : 'I', s.S >= s.N ? 'S' : 'N',
   s.T >= s.F ? 'T' : 'F', s.J >= s.P ? 'J' : 'P'].join('');

/*───────────────────────────────────────────
  App
───────────────────────────────────────────*/
type Step = 'intro' | 'occupation' | 'questions' | 'loading' | 'result';

function App() {
  /*───────── state ─────────*/
  const [step, setStep]           = useState<Step>('intro');
  const [selectedOcc, setSelectedOcc] = useState<string | null>(null);
  const [currentQ, setCurrentQ]   = useState(0);
  const [answered, setAnswered]   = useState(0);
  const [stats, setStats]         = useState<PersonalityStats>({
    E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0
  });
  const [result, setResult]       = useState<Result | null>(null);

  /*───────── navigation ─────────*/
  const startFromIntro = () => setStep('occupation');

  const startQuestions = (occId: string) => {
    setSelectedOcc(occId);
    setStats({ E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0 });
    setCurrentQ(0);
    setAnswered(0);
    setStep('questions');
  };

  const resetApp = () => {
    setStep('intro');
    setSelectedOcc(null);
    setCurrentQ(0);
    setAnswered(0);
    setStats({ E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0 });
    setResult(null);
  };

  /*───────── derived data ─────────*/
  const currentQs = selectedOcc ? questions[selectedOcc] ?? [] : [];
  const progressPct =
    selectedOcc && currentQs.length ? (answered / currentQs.length) * 100 : 0;

  /*───────── answer handler ─────────*/
  const handleAnswer = (l: keyof PersonalityStats) => {
    if (!selectedOcc) return;
    const opp = pairOrder[currentQ].pair.find(x=>x!==l)! as keyof PersonalityStats;
    const newStats = { ...stats, [l]:1, [opp]:0 } as PersonalityStats;
    setAnswered(a=>a+1);

    if (currentQ < currentQs.length-1){
      setStats(newStats);
      setCurrentQ(q=>q+1);
      return;
    }

    /*―― 最終回答 ――*/
    const mbti = makeMbti(newStats);
    const sameOcc = results.filter(r=>r.occupation===selectedOcc);
    let best =
      sameOcc.find(r=>r.mbti===mbti) ??
      sameOcc.reduce<Result|null>((b,c)=>
        !b||mbtiDistance(c.mbti,mbti)<mbtiDistance(b.mbti,mbti)?c:b,null) ??
      results.reduce<Result|null>((b,c)=>
        !b||mbtiDistance(c.mbti,mbti)<mbtiDistance(b.mbti,mbti)?c:b,null);

    setStats(newStats);
    setStep('loading');
    setTimeout(()=>{setResult(best);setStep('result');},600);
  };

  /*───────── components ─────────*/
  const PersonalityBars = () => {
    const pairs = [['E','I'],['S','N'],['T','F'],['J','P']] as const;
    return (
      <div className="mt-8 space-y-4">
        <h3 className="flex items-center gap-2 text-indigo-600 font-semibold">
          <BarChart className="w-5 h-5"/> あなたの 4Q プロファイル
        </h3>
        {pairs.map(([l,r])=>{
          const total = stats[l]+stats[r]||1;
          return (
            <div key={l} className="flex items-center gap-2">
              <span className="w-8 text-right font-medium">{l}</span>
              <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600" style={{width:`${(stats[l]/total)*100}%`}}/>
              </div>
              <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600" style={{width:`${(stats[r]/total)*100}%`}}/>
              </div>
              <span className="w-8 font-medium">{r}</span>
            </div>
          );
        })}
      </div>
    );
  };

  /*─────────────────────────────────────────── render */
  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center px-4 py-10">
      <div className="w-full max-w-md">

        {/*──────── Intro Page ─────────*/}
        {step==='intro' && (
          <div className="space-y-10">
            <header className="text-center space-y-4">
              <img src={AppIcon} alt="BioFit 4Q アイコン" className="mx-auto h-[60px] w-[150px]" />
              <h1 className="text-4xl font-extrabold text-gray-900">BioFit&nbsp;4Q</h1>
              <p className="text-1xl sm:text-2xl font-extrabold text-indigo-600">
                MBTIで読み解く<br />
                『職業×レジェンド＝未来のキミ』
              </p>
            </header>

            <section className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-6 space-y-6">
              <p className="text-gray-700 leading-relaxed">
                BioFit&nbsp;4Q は、<b className="text-indigo-600">4 つの質問</b>で
                あなたの思考スタイルを MBTI ライクな 4 文字へマッピング。
                さらに歴史上の <b className="text-indigo-600">“似ている偉人”</b>
                を提示する、スマホ特化のセルフコーチングツールです。
              </p>
              {['診断を始めるボタンをタップ',
                '興味のある職業を 1 つ選択',
                '4 問に直感で回答',
                '偉人タイプ & 強み / 弱み / 行動提案 を受け取る'
              ].map((t,i)=>(
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 flex-none rounded-full bg-indigo-600
                                  text-white flex items-center justify-center font-bold">
                    {i+1}
                  </div>
                  <p className="flex-1 text-gray-800">{t}</p>
                </div>
              ))}
            </section>

            <button
              onClick={startFromIntro}
              className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700
                         text-white text-lg font-semibold shadow-md">
              診断を始める
            </button>
          </div>
        )}

        {/*──────── Occupation Page ─────────*/}
        {step==='occupation' && (
          <div>
            <div className="text-center mb-6 space-y-2">
              <img src={AppIcon} alt="BioFit 4Q アイコン" className="mx-auto h-[60px] w-[150px]" />
              <h2 className="text-3xl font-bold text-gray-900">BioFit 4Q</h2>
            </div>

            <h3 className="text-lg font-medium text-gray-900 mb-4">
              興味のある職業を<b>1つ</b>選択してください
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {occupations.map(o=>(
                <button key={o.id}
                  onClick={()=>startQuestions(o.id)}
                  className="p-3 rounded-lg bg-white border border-gray-300
                             text-sm font-medium text-gray-800 hover:bg-indigo-50">
                  {o.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/*──────── Questions Page ─────────*/}
        {step==='questions' && currentQs.length>0 && (
          <div>
            {/* app header */}
            <div className="text-center mb-6 space-y-2">
              <img src={AppIcon} alt="BioFit 4Q アイコン" className="mx-auto h-[60px] w-[150px]" />
              <h2 className="text-3xl font-bold text-gray-900">BioFit 4Q</h2>
            </div>

            {/* progress */}
            <div className="mb-4">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 transition-all duration-300"
                     style={{width:`${progressPct}%`}}/>
              </div>
              <p className="mt-1 text-right text-sm text-gray-600">
                {currentQ+1} / {currentQs.length} 問
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {currentQs[currentQ].text}
              </h3>
              {currentQs[currentQ].choices.map(c=>(
                <button key={c.id}
                  onClick={()=>handleAnswer(c.type as keyof PersonalityStats)}
                  className="w-full py-3 px-4 text-left rounded-lg border border-gray-300
                             bg-gray-50 hover:border-indigo-500 hover:bg-indigo-50">
                  {c.text}
                </button>
              ))}
            </div>
          </div>
        )}

        {/*──────── Loading Page ─────────*/}
        {step==='loading' && (
          <div>
            <div className="text-center mb-6 space-y-2">
              <img src={AppIcon} alt="BioFit 4Q アイコン" className="mx-auto h-[60px] w-[150px]" />
              <h2 className="text-3xl font-bold text-gray-900">BioFit 4Q</h2>
            </div>

            <div className="mb-4">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 transition-all duration-500 w-full"/>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <p className="text-lg text-gray-700">診断結果を計算中…</p>
            </div>
          </div>
        )}

        {/*──────── Result Page ─────────*/}
        {step === 'result' && result && (
          <div className="space-y-6">
            {/* app header */}
            <div className="text-center mb-2 space-y-2">
              <img src={AppIcon} alt="BioFit 4Q アイコン" className="mx-auto h-[60px] w-[150px]" />
              <h2 className="text-3xl font-bold text-gray-900">BioFit 4Q</h2>
            </div>

            <div className="bg-white p-6 rounded-lg shadow space-y-6">
              <div className="text-center space-y-2">
                <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />

                <p className="text-lg font-semibold text-gray-800">
                  あなたに似た偉人タイプは&nbsp;
                  <br />
                  <a
                    href={result.wikiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-indigo-600"
                  >
                    {result.name}
                  </a>
                  &nbsp;でした
                </p>

                <span className="text-sm text-gray-500">{result.mbti}</span>
              </div>

              {/* 画像 */}
              <img
                src={result.imageUrl}
                alt={result.name}
                className="w-full aspect-square object-cover rounded-lg"
              />

              {/* 画像ソース URL を小さく表示 */}
              <a
                href={result.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-xs text-gray-500 underline break-all"
              >
                {result.imageUrl}
              </a>

              <p className="text-gray-700 leading-relaxed">{result.description}</p>

              {result.strengths   && (
                <Section title="このタイプの強み" items={result.strengths} />
              )}
              {result.weaknesses  && (
                <Section title="気をつけたいポイント" items={result.weaknesses} />
              )}
              {result.actionSteps && (
                <Section title="次の一歩へのアドバイス" items={result.actionSteps} />
              )}

              <PersonalityBars />

              <button
                onClick={resetApp}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg"
              >
                もう一度診断する
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

/*───────────────────────────────────────────
  汎用リスト表示
───────────────────────────────────────────*/
function Section({title,items}:{title:string;items:string[]}) {
  return (
    <section className="space-y-2">
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {items.map((t,i)=><li key={i}>{t}</li>)}
      </ul>
    </section>
  );
}

export default App;