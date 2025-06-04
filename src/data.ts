import { Question, Result } from './types';

export const questions: { [key: string]: Question[] } = {
  scientist: [
  /* Q1 : E / I */
  {
    id: 1,
    text: "When you get a breakthrough idea, what’s your first instinct?",
    choices: [
      { id: "s1a", text: "Share it right away with lab mates to spark discussion.", type: "E" },
      { id: "s1b", text: "Talk it through aloud to refine the concept.",          type: "E" },
      { id: "s1c", text: "Retreat to a quiet spot and map it out by myself.",      type: "I" },
      { id: "s1d", text: "Think it over privately before involving others.",       type: "I" }
    ]
  },
  /* Q2 : S / N */
  {
    id: 2,
    text: "Which evidence-gathering style fits you best?",
    choices: [
      { id: "s2a", text: "Precise measurements from controlled experiments.", type: "S" },
      { id: "s2b", text: "Detailed observation of tangible phenomena.",       type: "S" },
      { id: "s2c", text: "Exploring theoretical models and possibilities.",    type: "N" },
      { id: "s2d", text: "Looking for hidden patterns beyond the data.",       type: "N" }
    ]
  },
  /* Q3 : T / F */
  {
    id: 3,
    text: "When choosing between two hypotheses, what weighs more?",
    choices: [
      { id: "s3a", text: "Logical consistency and rigorous proof.",  type: "T" },
      { id: "s3b", text: "Replicable metrics and hard data.",        type: "T" },
      { id: "s3c", text: "Potential benefit to people or the planet.", type: "F" },
      { id: "s3d", text: "Ethical impact on living beings.",           type: "F" }
    ]
  },
  /* Q4 : J / P */
  {
    id: 4,
    text: "Your project schedule shifts suddenly. How do you respond?",
    choices: [
      { id: "s4a", text: "Re-plan immediately and stick to the new timeline.", type: "J" },
      { id: "s4b", text: "Set clear milestones to regain control.",            type: "J" },
      { id: "s4c", text: "Stay flexible and adjust as new info emerges.",      type: "P" },
      { id: "s4d", text: "Keep options open and improvise step by step.",      type: "P" }
    ]
  }
],
  entrepreneur: [
  /* Q1 : E / I */
  {
    id: 1,
    text: "A new business idea pops into your head. What’s your immediate move?",
    choices: [
      { id: "e1a", text: "Call a potential co-founder to brainstorm possibilities.",      type: "E" },
      { id: "e1b", text: "Post it in a founders’ Slack channel for instant feedback.",    type: "E" },
      { id: "e1c", text: "Open a private doc and flesh out the concept solo first.",      type: "I" },
      { id: "e1d", text: "Sleep on it and refine the idea quietly before sharing.",       type: "I" }
    ]
  },
  /* Q2 : S / N */
  {
    id: 2,
    text: "Which research approach guides your market validation?",
    choices: [
      { id: "e2a", text: "Customer interviews and hard usage metrics.",         type: "S" },
      { id: "e2b", text: "Competitive benchmarking and current best practices.",type: "S" },
      { id: "e2c", text: "Imagining future trends that haven’t surfaced yet.",   type: "N" },
      { id: "e2d", text: "Connecting disparate insights to spot hidden niches.", type: "N" }
    ]
  },
  /* Q3 : T / F */
  {
    id: 3,
    text: "When choosing between two product features, what tips the scale?",
    choices: [
      { id: "e3a", text: "Projected ROI and scalability.",           type: "T" },
      { id: "e3b", text: "Data-driven A/B test results.",            type: "T" },
      { id: "e3c", text: "Positive impact on users’ lives.",         type: "F" },
      { id: "e3d", text: "Alignment with the company’s mission and values.", type: "F" }
    ]
  },
  /* Q4 : J / P */
  {
    id: 4,
    text: "Your go-to style for steering a growing startup is…",
    choices: [
      { id: "e4a", text: "Set quarterly OKRs and follow a strict roadmap.",     type: "J" },
      { id: "e4b", text: "Create clear roles, processes, and review cycles.",   type: "J" },
      { id: "e4c", text: "Keep plans light and pivot whenever new data arrives.",type: "P" },
      { id: "e4d", text: "Experiment rapidly and iterate based on learnings.",  type: "P" }
    ]
  }
],
  designer: [
  /* Q1 : E / I */
  {
    id: 1,
    text: "When starting a new design project, what’s your first move?",
    choices: [
      { id: "d1a", text: "Fire up a live Figma session to brainstorm with the team.",           type: "E" },
      { id: "d1b", text: "Run a quick workshop with stakeholders to spark ideas.",              type: "E" },
      { id: "d1c", text: "Sketch rough concepts alone to clarify your own vision first.",       type: "I" },
      { id: "d1d", text: "Research quietly and prepare mood boards before sharing anything.",   type: "I" }
    ]
  },
  /* Q2 : S / N */
  {
    id: 2,
    text: "Which source fuels your creative inspiration the most?",
    choices: [
      { id: "d2a", text: "Usability test findings and real user feedback.",        type: "S" },
      { id: "d2b", text: "Current UI pattern libraries and design benchmarks.",    type: "S" },
      { id: "d2c", text: "Abstract art movements and cross-disciplinary concepts.",type: "N" },
      { id: "d2d", text: "Speculative future tech and ‘what-if’ scenarios.",       type: "N" }
    ]
  },
  /* Q3 : T / F */
  {
    id: 3,
    text: "Choosing between two color palettes, what tips the scale for you?",
    choices: [
      { id: "d3a", text: "Contrast ratios, accessibility scores, brand guidelines.", type: "T" },
      { id: "d3b", text: "A/B test data showing higher conversion.",                 type: "T" },
      { id: "d3c", text: "The emotional tone and story the colors evoke.",           type: "F" },
      { id: "d3d", text: "How the palette makes users feel at first glance.",        type: "F" }
    ]
  },
  /* Q4 : J / P */
  {
    id: 4,
    text: "Your workflow style when deadlines get closer?",
    choices: [
      { id: "d4a", text: "Lock layouts early and follow a strict checklist.",      type: "J" },
      { id: "d4b", text: "Adhere to the design system to avoid last-minute chaos.",type: "J" },
      { id: "d4c", text: "Keep experimenting and refine until the final hand-off.",type: "P" },
      { id: "d4d", text: "Embrace last-minute tweaks and spontaneous ideas.",      type: "P" }
    ]
  }
],
  teacher: [
    {
      id: 1,
      text: "What teaching approach do you prefer?",
      choices: [
        { id: "t1a", text: "Structured lesson plans", type: "J" },
        { id: "t1b", text: "Flexible, adaptive teaching", type: "P" },
        { id: "t1c", text: "Interactive group activities", type: "E" },
        { id: "t1d", text: "Individual student guidance", type: "I" }
      ]
    },
    {
      id: 2,
      text: "How do you assess student progress?",
      choices: [
        { id: "t2a", text: "Objective performance metrics", type: "T" },
        { id: "t2b", text: "Overall growth and effort", type: "F" },
        { id: "t2c", text: "Practical skill demonstration", type: "S" },
        { id: "t2d", text: "Creative problem-solving", type: "N" }
      ]
    },
    {
      id: 3,
      text: "What motivates you as a teacher?",
      choices: [
        { id: "t3a", text: "Student academic achievement", type: "T" },
        { id: "t3b", text: "Personal growth of students", type: "F" },
        { id: "t3c", text: "Maintaining classroom order", type: "J" },
        { id: "t3d", text: "Fostering creativity", type: "P" }
      ]
    },
    {
      id: 4,
      text: "How do you handle challenging students?",
      choices: [
        { id: "t4a", text: "Follow disciplinary procedures", type: "J" },
        { id: "t4b", text: "Adapt to individual needs", type: "P" },
        { id: "t4c", text: "Seek peer/parent collaboration", type: "E" },
        { id: "t4d", text: "One-on-one mentoring", type: "I" }
      ]
    }
  ],
  doctor: [
    {
      id: 1,
      text: "How do you approach patient diagnosis?",
      choices: [
        { id: "m1a", text: "Systematic symptom analysis", type: "T" },
        { id: "m1b", text: "Intuitive pattern recognition", type: "N" },
        { id: "m1c", text: "Evidence-based protocols", type: "S" },
        { id: "m1d", text: "Patient narrative understanding", type: "F" }
      ]
    },
    {
      id: 2,
      text: "What's your preferred treatment approach?",
      choices: [
        { id: "m2a", text: "Standard treatment protocols", type: "J" },
        { id: "m2b", text: "Personalized treatment plans", type: "P" },
        { id: "m2c", text: "Team-based care coordination", type: "E" },
        { id: "m2d", text: "Independent decision-making", type: "I" }
      ]
    },
    {
      id: 3,
      text: "How do you handle medical uncertainties?",
      choices: [
        { id: "m3a", text: "Consult research literature", type: "T" },
        { id: "m3b", text: "Consider multiple possibilities", type: "N" },
        { id: "m3c", text: "Follow established guidelines", type: "S" },
        { id: "m3d", text: "Focus on patient comfort", type: "F" }
      ]
    },
    {
      id: 4,
      text: "What aspect of patient care is most important to you?",
      choices: [
        { id: "m4a", text: "Clinical outcomes", type: "T" },
        { id: "m4b", text: "Patient satisfaction", type: "F" },
        { id: "m4c", text: "Procedural accuracy", type: "J" },
        { id: "m4d", text: "Adaptive care", type: "P" }
      ]
    }
  ],
  engineer: [
    {
      id: 1,
      text: "How do you approach technical problems?",
      choices: [
        { id: "en1a", text: "Systematic troubleshooting", type: "T" },
        { id: "en1b", text: "Innovative solutions", type: "N" },
        { id: "en1c", text: "Proven methodologies", type: "S" },
        { id: "en1d", text: "User-centered design", type: "F" }
      ]
    },
    {
      id: 2,
      text: "What drives your engineering decisions?",
      choices: [
        { id: "en2a", text: "Technical specifications", type: "T" },
        { id: "en2b", text: "Future scalability", type: "N" },
        { id: "en2c", text: "Team consensus", type: "F" },
        { id: "en2d", text: "Practical constraints", type: "S" }
      ]
    },
    {
      id: 3,
      text: "How do you prefer to work on projects?",
      choices: [
        { id: "en3a", text: "Structured project management", type: "J" },
        { id: "en3b", text: "Agile development", type: "P" },
        { id: "en3c", text: "Collaborative teams", type: "E" },
        { id: "en3d", text: "Independent work", type: "I" }
      ]
    },
    {
      id: 4,
      text: "What interests you most in engineering?",
      choices: [
        { id: "en4a", text: "Optimizing performance", type: "T" },
        { id: "en4b", text: "Solving complex problems", type: "N" },
        { id: "en4c", text: "Building reliable systems", type: "J" },
        { id: "en4d", text: "Exploring new technologies", type: "P" }
      ]
    }
  ],
  artist: [
    {
      id: 1,
      text: "What inspires your creative process?",
      choices: [
        { id: "a1a", text: "Technical mastery", type: "S" },
        { id: "a1b", text: "Abstract concepts", type: "N" },
        { id: "a1c", text: "Emotional expression", type: "F" },
        { id: "a1d", text: "Logical composition", type: "T" }
      ]
    },
    {
      id: 2,
      text: "How do you approach your artwork?",
      choices: [
        { id: "a2a", text: "Planned and structured", type: "J" },
        { id: "a2b", text: "Spontaneous and intuitive", type: "P" },
        { id: "a2c", text: "Collaborative projects", type: "E" },
        { id: "a2d", text: "Solo creative work", type: "I" }
      ]
    },
    {
      id: 3,
      text: "What drives your artistic decisions?",
      choices: [
        { id: "a3a", text: "Visual harmony", type: "S" },
        { id: "a3b", text: "Conceptual meaning", type: "N" },
        { id: "a3c", text: "Audience impact", type: "E" },
        { id: "a3d", text: "Personal vision", type: "I" }
      ]
    },
    {
      id: 4,
      text: "How do you develop your artistic style?",
      choices: [
        { id: "a4a", text: "Study traditional techniques", type: "S" },
        { id: "a4b", text: "Experimental approaches", type: "N" },
        { id: "a4c", text: "Feedback from others", type: "E" },
        { id: "a4d", text: "Inner exploration", type: "I" }
      ]
    }
  ],
  journalist: [
    {
      id: 1,
      text: "How do you prefer to gather information?",
      choices: [
        { id: "j1a", text: "Direct interviews", type: "E" },
        { id: "j1b", text: "Research and analysis", type: "I" },
        { id: "j1c", text: "Factual documentation", type: "S" },
        { id: "j1d", text: "Investigative deep-dives", type: "N" }
      ]
    },
    {
      id: 2,
      text: "What's your reporting style?",
      choices: [
        { id: "j2a", text: "Objective fact-based", type: "T" },
        { id: "j2b", text: "Human interest stories", type: "F" },
        { id: "j2c", text: "Structured narratives", type: "J" },
        { id: "j2d", text: "Exploratory features", type: "P" }
      ]
    },
    {
      id: 3,
      text: "How do you handle deadlines?",
      choices: [
        { id: "j3a", text: "Structured planning", type: "J" },
        { id: "j3b", text: "Last-minute intensity", type: "P" },
        { id: "j3c", text: "Collaborative teamwork", type: "E" },
        { id: "j3d", text: "Independent focus", type: "I" }
      ]
    },
    {
      id: 4,
      text: "What aspect of journalism interests you most?",
      choices: [
        { id: "j4a", text: "Uncovering facts", type: "T" },
        { id: "j4b", text: "Telling compelling stories", type: "F" },
        { id: "j4c", text: "Following leads", type: "N" },
        { id: "j4d", text: "Documenting events", type: "S" }
      ]
    }
  ],
  lawyer: [
    {
      id: 1,
      text: "How do you approach legal cases?",
      choices: [
        { id: "l1a", text: "Systematic analysis", type: "T" },
        { id: "l1b", text: "Creative interpretation", type: "N" },
        { id: "l1c", text: "Precedent-based", type: "S" },
        { id: "l1d", text: "Client-focused", type: "F" }
      ]
    },
    {
      id: 2,
      text: "What's your preferred legal strategy?",
      choices: [
        { id: "l2a", text: "Detailed preparation", type: "J" },
        { id: "l2b", text: "Adaptive argumentation", type: "P" },
        { id: "l2c", text: "Negotiation and mediation", type: "E" },
        { id: "l2d", text: "Research and writing", type: "I" }
      ]
    },
    {
      id: 3,
      text: "How do you handle client relations?",
      choices: [
        { id: "l3a", text: "Professional objectivity", type: "T" },
        { id: "l3b", text: "Empathetic support", type: "F" },
        { id: "l3c", text: "Structured communication", type: "J" },
        { id: "l3d", text: "Flexible availability", type: "P" }
      ]
    },
    {
      id: 4,
      text: "What interests you most in law?",
      choices: [
        { id: "l4a", text: "Legal precedents", type: "S" },
        { id: "l4b", text: "Novel interpretations", type: "N" },
        { id: "l4c", text: "Courtroom advocacy", type: "E" },
        { id: "l4d", text: "Legal scholarship", type: "I" }
      ]
    }
  ],
  investor: [
    {
      id: 1,
      text: "How do you evaluate investment opportunities?",
      choices: [
        { id: "i1a", text: "Technical analysis", type: "T" },
        { id: "i1b", text: "Market intuition", type: "F" },
        { id: "i1c", text: "Historical patterns", type: "S" },
        { id: "i1d", text: "Future potential", type: "N" }
      ]
    },
    {
      id: 2,
      text: "What's your investment strategy?",
      choices: [
        { id: "i2a", text: "Systematic portfolio management", type: "J" },
        { id: "i2b", text: "Opportunistic trading", type: "P" },
        { id: "i2c", text: "Network-based decisions", type: "E" },
        { id: "i2d", text: "Independent research", type: "I" }
      ]
    },
    {
      id: 3,
      text: "How do you handle market volatility?",
      choices: [
        { id: "i3a", text: "Stick to the plan", type: "J" },
        { id: "i3b", text: "Adapt to conditions", type: "P" },
        { id: "i3c", text: "Consult experts", type: "E" },
        { id: "i3d", text: "Trust your analysis", type: "I" }
      ]
    },
    {
      id: 4,
      text: "What drives your investment decisions?",
      choices: [
        { id: "i4a", text: "Financial metrics", type: "T" },
        { id: "i4b", text: "Social impact", type: "F" },
        { id: "i4c", text: "Risk management", type: "S" },
        { id: "i4d", text: "Growth potential", type: "N" }
      ]
    }
  ],
  professor: [
    {
      id: 1,
      text: "What aspect of academia interests you most?",
      choices: [
        { id: "p1a", text: "Research methodology", type: "T" },
        { id: "p1b", text: "Theoretical exploration", type: "N" },
        { id: "p1c", text: "Student mentoring", type: "F" },
        { id: "p1d", text: "Data analysis", type: "S" }
      ]
    },
    {
      id: 2,
      text: "How do you approach teaching?",
      choices: [
        { id: "p2a", text: "Structured lectures", type: "J" },
        { id: "p2b", text: "Interactive discussions", type: "P" },
        { id: "p2c", text: "Collaborative projects", type: "E" },
        { id: "p2d", text: "Individual guidance", type: "I" }
      ]
    },
    {
      id: 3,
      text: "What's your research style?",
      choices: [
        { id: "p3a", text: "Empirical studies", type: "S" },
        { id: "p3b", text: "Theoretical frameworks", type: "N" },
        { id: "p3c", text: "Collaborative studies", type: "E" },
        { id: "p3d", text: "Independent research", type: "I" }
      ]
    },
    {
      id: 4,
      text: "How do you contribute to your field?",
      choices: [
        { id: "p4a", text: "Publishing research", type: "T" },
        { id: "p4b", text: "Mentoring scholars", type: "F" },
        { id: "p4c", text: "Conference presentations", type: "E" },
        { id: "p4d", text: "Writing theoretical works", type: "I" }
      ]
    }
  ],
  consultant: [
    {
      id: 1,
      text: "コンサルタントになったらあなたは顧客の抱える問題にどのようにアプローチしますか？",
      choices: [
        { id: "c1a", text: "データを軸にした意思決定サイクル", type: "T" },
        { id: "c1b", text: "戦略的イノベーションを取る", type: "N" },
        { id: "c1c", text: "過去の実例・経験からアプローチ", type: "S" },
        { id: "c1d", text: "ステークホルダー調整をとり顧客との話し合いを重ねる", type: "F" }
      ]
    },
    {
      id: 2,
      text: "あなたのコンサルティングスタイルはどのようなものになると思いますか？",
      choices: [
        { id: "c2a", text: "王道かつ基本のフレームワーク", type: "J" },
        { id: "c2b", text: "状況対応型のアプローチ", type: "P" },
        { id: "c2c", text: "チームで課題解決するファシリテーション", type: "E" },
        { id: "c2d", text: "専門分野に特化したスタイル", type: "I" }
      ]
    },
    {
      id: 3,
      text: "顧客との関係をどのように築いていきますか？",
      choices: [
        { id: "c3a", text: "専門家としてかつ客観的に", type: "T" },
        { id: "c3b", text: "パートナーシップのように", type: "F" },
        { id: "c3c", text: "定期的にコミュニケーションをとるように", type: "J" },
        { id: "c3d", text: "柔軟な対応をみせるように", type: "P" }
      ]
    },
    {
      id: 4,
      text: "あなたのコンサルタントとしての強みは何になると思いますか？",
      choices: [
        { id: "c4a", text: "ROI（投資収益率）を高める力", type: "T" },
        { id: "c4b", text: "チーム・組織への貢献力", type: "F" },
        { id: "c4c", text: "深い専門知識", type: "S" },
        { id: "c4d", text: "新しい価値を生む発想力", type: "N" }
      ]
    }
  ],
  researcher: [
    {
      id: 1,
      text: "どの研究アプローチがお好みですか？",
      choices: [
        { id: "r1a", text: "定量的データ分析", type: "T" },
        { id: "r1b", text: "質的データの研究", type: "F" },
        { id: "r1c", text: "質的・量的データを組み合わせた混合法", type: "N" },
        { id: "r1d", text: "様々な文献を参考にする系統的レビュー", type: "S" }
      ]
    },
    {
      id: 2,
      text: "研究プロジェクトにはどのように取り組みますか？",
      choices: [
        { id: "r2a", text: "綿密なタイムラインを立てて進める", type: "J" },
        { id: "r2b", text: "状況に応じて柔軟に探究を進める", type: "P" },
        { id: "r2c", text: "テームで協力しながら進める", type: "E" },
        { id: "r2d", text: "独立して集中して進める", type: "I" }
      ]
    },
    {
      id: 3,
      text: "あなたの研究を突き動かす原動力はなんですか？",
      choices: [
        { id: "r3a", text: "新しい科学的発見への好奇心", type: "T" },
        { id: "r3b", text: "社会へ影響・インパクトを生み出すこと", type: "F" },
        { id: "r3c", text: "方法論的な厳密さの追求", type: "S" },
        { id: "r3d", text: "理論の高度化・発展", type: "N" }
      ]
    },
    {
      id: 4,
      text: "研究成果をどのように発信しますか？",
      choices: [
        { id: "r4a", text: "学術論文として発表する", type: "T" },
        { id: "r4b", text: "社会向けアウトリーチ（世の中へ広くシェア）", type: "F" },
        { id: "r4c", text: "学会でプレゼンテーションをする", type: "E" },
        { id: "r4d", text: "技術レポートを作成", type: "I" }
      ]
    }
  ],
  architect: [
    {
      id: 1,
      text: "あなたの建築デザインに影響を与えるもの何になると思いますか？",
      choices: [
        { id: "ar1a", text: "技術的な要件", type: "T" },
        { id: "ar1b", text: "美しさへのこだわり", type: "F" },
        { id: "ar1c", text: "使いやすさへの要件", type: "S" },
        { id: "ar1d", text: "革命的なアイデア", type: "N" }
      ]
    },
    {
      id: 2,
      text: "プロジェクトを進める時、どのように進めますか？",
      choices: [
        { id: "ar2a", text: "まず詳細に図面を描き上げる", type: "J" },
        { id: "ar2b", text: "試行錯誤しながら進める", type: "P" },
        { id: "ar2c", text: "クライアントと一緒に考える", type: "E" },
        { id: "ar2d", text: "まず一人で構想を練る", type: "I" }
      ]
    },
    {
      id: 3,
      text: "あなたの設計ポリシーはどれに近いですか？",
      choices: [
        { id: "ar3a", text: "『形は機能に従う』", type: "T" },
        { id: "ar3b", text: "心に響くデザイン", type: "F" },
        { id: "ar3c", text: "環境にやさしい手法", type: "S" },
        { id: "ar3d", text: "独創的な表現", type: "N" }
      ]
    },
    {
      id: 4,
      text: "プロジェクトで困難に直面した時、どのように対処しますか？",
      choices: [
        { id: "ar4a", text: "培ってきた技術で解決を図る", type: "T" },
        { id: "ar4b", text: "自由な発想で乗り切る", type: "N" },
        { id: "ar4c", text: "チームで相談する", type: "E" },
        { id: "ar4d", text: "一度立ち止まって考える", type: "I" }
      ]
    }
  ],
  copywriter: [
    {
      id: 1,
      text: "あなたのライティングスタイルに近いのはどれですか？",
      choices: [
        { id: "cw1a", text: "データを元に追求する", type: "T" },
        { id: "cw1b", text: "感情に響くストーリーで伝える", type: "F" },
        { id: "cw1c", text: "わかりやすさを最優先にする", type: "S" },
        { id: "cw1d", text: "ユニークな切り口で魅せる", type: "N" }
      ]
    },
    {
      id: 2,
      text: "執筆プロジェクトはどのように進めますか？",
      choices: [
        { id: "cw2a", text: "最初に詳細なアウトラインを作る", type: "J" },
        { id: "cw2b", text: "書きながら柔軟に調整する", type: "P" },
        { id: "cw2c", text: "クライアントと密にやりとりする", type: "E" },
        { id: "cw2d", text: "一人で集中して進める", type: "I" }
      ]
    },
    {
      id: 3,
      text: "コンテンツの方向性を決める際に最も重要視するのは？",
      choices: [
        { id: "cw3a", text: "コンバージョン（売上など）具体的な成果の数字", type: "T" },
        { id: "cw3b", text: "読者の共感やコメント・シェア数", type: "F" },
        { id: "cw3c", text: "ブランドのガイドライン", type: "S" },
        { id: "cw3d", text: "斬新な切り口やアイデア", type: "N" }
      ]
    },
    {
      id: 4,
      text: "コピー（広告文）のアイデアを生み出す時の方法は？",
      choices: [
        { id: "cw4a", text: "市場調査・リサーチを行う", type: "T" },
        { id: "cw4b", text: "ひらめきや直感を大切にする", type: "N" },
        { id: "cw4c", text: "チームでブレインストーミングをする", type: "E" },
        { id: "cw4d", text: "静かに思考を深めてひらめきを得る", type: "I" }
      ]
    }
  ],
  director: [
    {
      id: 1,
      text: "あなたが映画を撮るうえで１番の指針となるのは？",
      choices: [
        { id: "d1a", text: "撮影・編集など技術面の完成度", type: "T" },
        { id: "d1b", text: "観客の心を揺さぶる感情表現", type: "F" },
        { id: "d1c", text: "映像で語るストーリーテリング", type: "S" },
        { id: "d1d", text: "深いテーマやコンセプト性", type: "N" }
      ]
    },
    {
      id: 2,
      text: "映画作りを始める時の取り組み方は？",
      choices: [
        { id: "d2a", text: "緻密な絵コンテで計画を固める", type: "J" },
        { id: "d2b", text: "現場で状況に応じて形にする", type: "P" },
        { id: "d2c", text: "スタッフ全員で意見を出し合う", type: "E" },
        { id: "d2d", text: "自分のビジョンを軸に進める", type: "I" }
      ]
    },
    {
      id: 3,
      text: "あなたの演出スタイルを一言で表すと？",
      choices: [
        { id: "d3a", text: "緻密なコントロール", type: "J" },
        { id: "d3b", text: "臨機応変な演出", type: "P" },
        { id: "d3c", text: "俳優の演技を最大限に引きだす", type: "F" },
        { id: "d3d", text: "機材・技術を駆使して魅せる", type: "T" }
      ]
    },
    {
      id: 4,
      text: "もし制作中にトラブルが起きたとしたら、どう対処しますか？",
      choices: [
        { id: "d4a", text: "手順を整理し着実に解決策を練る", type: "T" },
        { id: "d4b", text: "発想を転換し新たな方法を探す", type: "N" },
        { id: "d4c", text: "チームで相談してベストな案を決める", type: "E" },
        { id: "d4d", text: "自分の判断で即決し進める", type: "I" }
      ]
    }
  ]
};

export const results: Result[] = [
  // Scientists
  {
    name: "Albert Einstein",
    occupation: "scientist",
    mbti: "INTP",
    description: "A brilliant theoretical physicist known for the theory of relativity. Your analytical mind and innovative thinking mirror Einstein's approach to understanding the universe.",
    imageUrl: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Albert_Einstein",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "Marie Curie",
    occupation: "scientist",
    mbti: "ISTJ",
    description: "A pioneering researcher in radioactivity. Like Curie, you value methodical work and precise observation in pursuit of scientific truth.",
    imageUrl: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Marie_Curie",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "Richard Feynman",
    occupation: "scientist",
    mbti: "ENTP",
    description: "A charismatic physicist known for his work in quantum mechanics. Your curiosity and ability to explain complex ideas reflect Feynman's engaging approach to science.",
    imageUrl: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Richard_Feynman",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "Jane Goodall",
    occupation: "scientist",
    mbti: "INFJ",
    description: "A groundbreaking primatologist. Your patience and empathetic observation skills align with Goodall's revolutionary approach to animal behavior research.",
    imageUrl: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Jane_Goodall",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },

  // Entrepreneurs
  {
    name: "Steve Jobs",
    occupation: "entrepreneur",
    mbti: "ENTJ",
    description: "The visionary co-founder of Apple. Like Jobs, you combine creativity with strong leadership abilities to bring innovative ideas to life.",
    imageUrl: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Steve_Jobs",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "Elon Musk",
    occupation: "entrepreneur",
    mbti: "INTJ",
    description: "The innovative founder of Tesla and SpaceX. Your strategic thinking and long-term vision mirror Musk's approach to transformative technology.",
    imageUrl: "https://images.pexels.com/photos/5232929/pexels-photo-5232929.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Elon_Musk",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "Oprah Winfrey",
    occupation: "entrepreneur",
    mbti: "ENFJ",
    description: "A media mogul and philanthropist. Your emotional intelligence and ability to connect with others reflect Winfrey's influential leadership style.",
    imageUrl: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Oprah_Winfrey",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "Walt Disney",
    occupation: "entrepreneur",
    mbti: "ENFP",
    description: "The creative force behind Disney. Your imagination and ability to inspire others align with Disney's magical approach to entertainment.",
    imageUrl: "https://images.pexels.com/photos/3678428/pexels-photo-3678428.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Walt_Disney",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },

  // Designers
  {
    name: "Jonathan Ive",
    occupation: "designer",
    mbti: "INTJ",
    description: "Apple's legendary product designer. Your attention to detail and minimalist aesthetic mirror Ive's revolutionary design philosophy.",
    imageUrl: "https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Jonathan_Ive",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "Ray Eames",
    occupation: "designer",
    mbti: "ENFP",
    description: "A pioneering modernist designer. Your creative problem-solving and innovative spirit reflect Eames' influential approach to design.",
    imageUrl: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Ray_Eames",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "Dieter Rams",
    occupation: "designer",
    mbti: "ISTJ",
    description: "The influential Braun designer. Your methodical approach and focus on functionality align with Rams' 'less is more' design principles.",
    imageUrl: "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Dieter_Rams",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "Philippe Starck",
    occupation: "designer",
    mbti: "ENTP",
    description: "A versatile and innovative designer. Your experimental nature and broad creative vision match Starck's boundary-pushing design approach.",
    imageUrl: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Philippe_Starck",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },

  // Teachers
  {
    name: "Maria Montessori",
    occupation: "teacher",
    mbti: "INFJ",
    description: "The founder of the Montessori education method. Your intuitive understanding of individual needs reflects Montessori's child-centered approach.",
    imageUrl: "https://images.pexels.com/photos/8466776/pexels-photo-8466776.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Maria_Montessori",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "John Dewey",
    occupation: "teacher",
    mbti: "INTP",
    description: "A pioneering educational reformer. Your analytical approach to education mirrors Dewey's philosophy of learning through experience.",
    imageUrl: "https://images.pexels.com/photos/5427654/pexels-photo-5427654.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/John_Dewey",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "Anne Sullivan",
    occupation: "teacher",
    mbti: "ENFJ",
    description: "Helen Keller's dedicated teacher. Your patience and determination to help others learn match Sullivan's transformative teaching style.",
    imageUrl: "https://images.pexels.com/photos/8467079/pexels-photo-8467079.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Anne_Sullivan",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "Ken Robinson",
    occupation: "teacher",
    mbti: "ENFP",
    description: "An advocate for creativity in education. Your innovative teaching style and ability to inspire align with Robinson's educational philosophy.",
    imageUrl: "https://images.pexels.com/photos/5427867/pexels-photo-5427867.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Ken_Robinson_(educator)",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },

  // Doctors
  {
    name: "Elizabeth Blackwell",
    occupation: "doctor",
    mbti: "ISTJ",
    description: "The first woman to receive a medical degree in the US. Your dedication to excellence and breaking barriers reflects Blackwell's pioneering spirit.",
    imageUrl: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Elizabeth_Blackwell",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "Paul Farmer",
    occupation: "doctor",
    mbti: "ENFJ",
    description: "A global health pioneer. Your commitment to healthcare equality and community service mirrors Farmer's humanitarian approach to medicine.",
    imageUrl: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Paul_Farmer",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "Oliver Sacks",
    occupation: "doctor",
    mbti: "INFP",
    description: "A neurologist and author known for his empathetic case studies. Your deep understanding of human experience matches Sacks' compassionate approach.",
    imageUrl: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Oliver_Sacks",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "Jonas Salk",
    occupation: "doctor",
    mbti: "INTJ",
    description: "The developer of the polio vaccine. Your methodical approach to problem-solving reflects Salk's dedication to medical research.",
    imageUrl: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Jonas_Salk",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },

  // Engineers
  {
    name: "Nikola Tesla",
    occupation: "engineer",
    mbti: "INTJ",
    description: "A brilliant electrical engineer and inventor. Your innovative thinking and dedication to perfection mirror Tesla's groundbreaking work.",
    imageUrl: "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Nikola_Tesla",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "Grace Hopper",
    occupation: "engineer",
    mbti: "ENTP",
    description: "A pioneer in computer programming. Your problem-solving creativity and forward-thinking approach reflect Hopper's revolutionary contributions.",
    imageUrl: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Grace_Hopper",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "Leonardo da Vinci",
    occupation: "engineer",
    mbti: "ENFP",
    description: "A Renaissance engineer and inventor. Your diverse interests and creative approach to engineering match da Vinci's innovative spirit.",
    imageUrl: "https://images.pexels.com/photos/8197534/pexels-photo-8197534.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Leonardo_da_Vinci",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "Henry Ford",
    occupation: "engineer",
    mbti: "ISTJ",
    description: "The pioneer of modern assembly-line production. Your systematic approach to efficiency aligns with Ford's revolutionary manufacturing methods.",
    imageUrl: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Henry_Ford",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },

  // Artists
  {
    name: "Vincent van Gogh",
    occupation: "artist",
    mbti: "INFP",
    description: "A post-impressionist painter known for emotional expression. Your passionate creativity and unique vision reflect van Gogh's artistic intensity.",
    imageUrl: "https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Vincent_van_Gogh",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "Frida Kahlo",
    occupation: "artist",
    mbti: "ISFP",
    description: "A symbolic self-portrait artist. Your authentic self-expression and emotional depth mirror Kahlo's powerful artistic voice.",
    imageUrl: "https://images.pexels.com/photos/2123337/pexels-photo-2123337.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Frida_Kahlo",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "Pablo Picasso",
    occupation: "artist",
    mbti: "ENTP",
    description: "A revolutionary modern artist. Your innovative approach and willingness to break conventions align with Picasso's artistic breakthroughs.",
    imageUrl: "https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Pablo_Picasso",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "Georgia O'Keeffe",
    occupation: "artist",
    mbti: "INTJ",
    description: "A modernist painter known for abstract natural forms. Your precise observation and unique interpretation match O'Keeffe's distinctive style.",
    imageUrl: "https://images.pexels.com/photos/2693212/pexels-photo-2693212.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Georgia_O%27Keeffe",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },

  // Journalists
  {
    name: "Edward R. Murrow",
    occupation: "journalist",
    mbti: "INTJ",
    description: "A pioneering broadcast journalist. Your integrity and analytical approach reflect Murrow's commitment to truth in reporting.",
    imageUrl: "https://images.pexels.com/photos/2325729/pexels-photo-2325729.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Edward_R._Murrow",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "Christiane Amanpour",
    occupation: "journalist",
    mbti: "ENFJ",
    description: "An influential international correspondent. Your dedication to storytelling and global perspective mirror Amanpour's impactful journalism.",
    imageUrl: "https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Christiane_Amanpour",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "Hunter S. Thompson",
    occupation: "journalist",
    mbti: "ENTP",
    description: "The founder of Gonzo journalism. Your unique perspective and unconventional approach match Thompson's revolutionary reporting style.",
    imageUrl: "https://images.pexels.com/photos/3944377/pexels-photo-3944377.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Hunter_S._Thompson",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "Bob Woodward",
    occupation: "journalist",
    mbti: "ISTJ",
    description: "An investigative journalist known for uncovering Watergate. Your methodical research and attention to detail align with Woodward's thorough reporting.",
    imageUrl: "https://images.pexels.com/photos/3944434/pexels-photo-3944434.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Bob_Woodward",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },

  // Lawyers
  {
    name: "Thurgood Marshall",
    occupation: "lawyer",
    mbti: "ENFJ",
    description: "The first African American Supreme Court Justice. Your commitment to justice and advocacy reflect Marshall's groundbreaking legal career.",
    imageUrl: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Thurgood_Marshall",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "Ruth Bader Ginsburg",
    occupation: "lawyer",
    mbti: "INTJ",
    description: "A champion of gender equality and civil rights. Your strategic thinking and determination mirror Ginsburg's influential legal approach.",
    imageUrl: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Ruth_Bader_Ginsburg",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "Clarence Darrow",
    occupation: "lawyer",
    mbti: "ENTP",
    description: "A legendary criminal defense lawyer. Your eloquence and innovative legal strategies align with Darrow's compelling courtroom presence.",
    imageUrl: "https://images.pexels.com/photos/5668482/pexels-photo-5668482.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Clarence_Darrow",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "Mary Jo White",
    occupation: "lawyer",
    mbti: "ISTJ",
    description: "A former SEC Chair and prosecutor. Your methodical approach and commitment to rules reflect White's distinguished legal career.",
    imageUrl: "https://images.pexels.com/photos/5668788/pexels-photo-5668788.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Mary_Jo_White",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },

  // Investors
  {
    name: "Warren Buffett",
    occupation: "investor",
    mbti: "ISTJ",
    description: "The Oracle of Omaha. Your patient, analytical approach to investment mirrors Buffett's value investing strategy.",
    imageUrl: "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Warren_Buffett",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "George Soros",
    occupation: "investor",
    mbti: "INTJ",
    description: "A legendary hedge fund manager. Your strategic thinking and global perspective reflect Soros's innovative investment approach.",
    imageUrl: "https://images.pexels.com/photos/534217/pexels-photo-534217.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/George_Soros",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "Cathie Wood",
    occupation: "investor",
    mbti: "ENFJ",
    description: "A visionary tech investor. Your forward-thinking approach and ability to spot trends align with Wood's innovative investment strategy.",
    imageUrl: "https://images.pexels.com/photos/534218/pexels-photo-534218.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Cathie_Wood",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "Ray Dalio",
    occupation: "investor",
    mbti: "ENTP",
    description: "The founder of Bridgewater Associates. Your systematic approach and principle-based thinking match Dalio's investment philosophy.",
    imageUrl: "https://images.pexels.com/photos/534219/pexels-photo-534219.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Ray_Dalio",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },

  // Professors
  {
    name: "Noam Chomsky",
    occupation: "professor",
    mbti: "INTJ",
    description: "A revolutionary linguist and philosopher. Your analytical mind and systematic approach reflect Chomsky's groundbreaking academic work.",
    imageUrl: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Noam_Chomsky",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "bell hooks",
    occupation: "professor",
    mbti: "ENFJ",
    description: "An influential cultural critic. Your passion for teaching and social justice mirrors hooks' transformative educational philosophy.",
    imageUrl: "https://images.pexels.com/photos/3184329/pexels-photo-3184329.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Bell_hooks",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "Richard Feynman",
    occupation: "professor",
    mbti: "ENTP",
    description: "A brilliant physics educator. Your engaging teaching style and ability to simplify complex concepts match Feynman's legendary lectures.",
    imageUrl: "https://images.pexels.com/photos/3184330/pexels-photo-3184330.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Richard_Feynman",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "Hannah Arendt",
    occupation: "professor",
    mbti: "INTP",
    description: "A political theorist and philosopher. Your deep thinking and original insights align with Arendt's influential academic contributions.",
    imageUrl: "https://images.pexels.com/photos/3184331/pexels-photo-3184331.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Hannah_Arendt",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },

  // Consultants
  {
    name: "ピーター・ドラッカー",
    occupation: "consultant",
    mbti: "INTJ",
    description: "近代経営学の父であるドラッカーに匹敵する戦略的洞察力の持ち主！あなたの分析的思考と長期的なビジョンは、複雑な課題を明快なアクションへと導くでしょう。",
    imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Peter_Drucker",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "クレイトン・クリステンセン",
    occupation: "consultant",
    mbti: "ENFJ",
    description: "あなたは組織の動きをスッと見抜いて、新しい波を起こせるコンサルタント！まさに、クリステンセンの”破壊的イノベーション”理論を体現してるかのよう。",
    imageUrl: "https://images.pexels.com/photos/3183151/pexels-photo-3183151.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Clayton_Christensen",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "マイケル・ポーター",
    occupation: "consultant",
    mbti: "ISTJ",
    description: "あなたは市場を冷静に読み解いて、有利なポジションをしっかりと築くコンサルタント！ポーターの競争戦略理論を実践するかのような、堅実なアプローチが光ります。",
    imageUrl: "https://images.pexels.com/photos/3183152/pexels-photo-3183152.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Michael_Porter",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "インドラ・ヌーイ",
    occupation: "consultant",
    mbti: "ENTJ",
    description: "あなたはヌーイのように先を見据えて、きちんとビジョンを形にできるコンサルタント！アイデアを現実に変える力は、まさにビジネス界の変革者そのもの。",
    imageUrl: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Indra_Nooyi",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },

  // Researchers
  {
    name: "スティーブン・ホーキング",
    occupation: "researcher",
    mbti: "INTJ",
    description: "あなたは卓越した分析力と独創的な思考を持つ研究者！ホーキングのように、宇宙の謎を解き明かすための理論を構築する力があります。",
    imageUrl: "https://images.pexels.com/photos/2156/sky-space-dark-galaxy.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/Stephen_Hawking",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "ジェーン・グドール",
    occupation: "researcher",
    mbti: "INFJ",
    description: "あなたは霊長類研究のパイオニア、グドールに匹敵する洞察力の持ち主！精神を宿す優しい眼差しと揺るぎない探究心で、自然界の秘密を解き明かすことができます。",
    imageUrl: "https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Jane_Goodall",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "ニール・ドグラース・タイソン",
    occupation: "researcher",
    mbti: "ENTJ",
    description: "あなたは複雑な概念を魅力的に語る手腕のあるかつリーダーシップも持ち合わせる研究者！その情熱は人々に、宇宙への憧憬を新たに呼び覚まします。",
    imageUrl: "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/Neil_deGrasse_Tyson",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "バーバラ・マクリントック",
    occupation: "researcher",
    mbti: "INTP",
    description: "あなたはマクリントックのような鋭い洞察力を生かし、斬新なアイデアを語る研究者！洞察力を磨き続ければ、ノーベル賞受賞も夢では終わらないかも！？",
    imageUrl: "https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Barbara_McClintock",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },

  // Architects
  {
    name: "フランク・ロイド・ライト",
    occupation: "architect",
    mbti: "INTJ",
    description: "あなたは有機的建築家の巨匠ライトのような、革新的設計思想を持つ建築家！自然と一体化した空間作りを細部までこだわった設計を実現します。",
    imageUrl: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Frank_Lloyd_Wright",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "ザハ・ハディド",
    occupation: "architect",
    mbti: "ENTJ",
    description: "あなたはハディドの魂を宿す奔放な曲線美と不屈の創造力で、空間そのものをアートへと昇華させ、新たな時代の鼓動を響かせるでしょう！",
    imageUrl: "https://images.pexels.com/photos/1732415/pexels-photo-1732415.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Zaha_Hadid",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "ル・コルビュジエ",
    occupation: "architect",
    mbti: "ISTJ",
    description: "あなたはコルビュジエの精神を継ぐ理知的な美意識と周到な空間計画を持つ建築家！ムダのないスマートなデザインで暮らしやすさを考えるのが好きなタイプです。",
    imageUrl: "https://images.pexels.com/photos/1732416/pexels-photo-1732416.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Le_Corbusier",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "アントニ・ガウディ",
    occupation: "architect",
    mbti: "INFP",
    description: "あなたは自然を取り込む独創的表現とディテールへの情熱を持つ建築家！サグラダ・ファミリアのような人々を魅了する建築を創り出せること間違いなし。",
    imageUrl: "https://images.pexels.com/photos/1732417/pexels-photo-1732417.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Antoni_Gaud%C3%AD",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },

  // Copywriters
  {
    name: "デイビッド・オグルヴィ",
    occupation: "copywriter",
    mbti: "ENTJ",
    description: "あなたはオグルヴィの精神を宿す卓越した洞察と物語力で、広告の力を最大限に引き出すコピーライター！消費者の心をつかむ言葉を巧みに操ることができます。",
    imageUrl: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/David_Ogilvy_(businessman)",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "メアリー・ウェルズ・ローレンス",
    occupation: "copywriter",
    mbti: "ENFP",
    description: "あなたは広告界のパイオニアであるウェルズ・ローレンスのような、独自の視点と情熱で消費者の心をつかむコピーライター！斬新なアイデアでブランドを輝かせることができます。",
    imageUrl: "https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Mary_Wells_Lawrence",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "クロード・C・ホプキンス",
    occupation: "copywriter",
    mbti: "ISTJ",
    description: "あなたはホプキンスのような徹底したテストと数値思考で成果を導く手法を持つコピーライター！広告を科学し、人々の心を確かな実証に基づいて動かすことができるでしょう。",
    imageUrl: "https://images.pexels.com/photos/3182775/pexels-photo-3182775.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Claude_C._Hopkins",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "レオ・バーネット",
    occupation: "copywriter",
    mbti: "INFJ",
    description: "あなたは“広告に心を宿す”伝説的クリエイター、バーネットに匹敵する情緒的訴求力を持つコピーライター！人々の記憶に残る物語と温かなキャラクターでブランド価値を永続的に高めます",
    imageUrl: "https://images.pexels.com/photos/3182776/pexels-photo-3182776.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Leo_Burnett",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },

  // Film Directors
  {
    name: "アルフレッド・ヒッチコック",
    occupation: "director",
    mbti: "INTJ",
    description: "あなたはヒッチコックのように巧みな伏線と心理操作ができる映画監督！緻密なストーリーテリングとサスペンスの演出で、観客を引き込む力があります。",
    imageUrl: "https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Alfred_Hitchcock",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "スティーブン・スピルバーグ",
    occupation: "director",
    mbti: "ENFJ",
    description: "あなたは豊かな情感と抜群のエンタメ性を持つ映画監督！スピルバーグのように、観客の心を掴む感動的な物語を紡ぎ出すことができます。",
    imageUrl: "https://images.pexels.com/photos/274938/pexels-photo-274938.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Steven_Spielberg",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "スタンリー・キューブリック",
    occupation: "director",
    mbti: "INTP",
    description: "あなたは徹底したディテール追求と前衛的演出ができる映画監督！キューブリックのようにこだわり抜いた映像で観客を唸らせます。",
    imageUrl: "https://images.pexels.com/photos/274939/pexels-photo-274939.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Stanley_Kubrick",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  },
  {
    name: "アニエス・ヴァルダ",
    occupation: "director",
    mbti: "ENFP",
    description: "あなたは自由な構成とパーソナルな視点を持っている映画監督！ヴァルダのようにドキュメンタリーとフィクションを融合させた独自のスタイルで、観客に深い感動を与えることができます。",
    imageUrl: "https://images.pexels.com/photos/274940/pexels-photo-274940.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Agn%C3%A8s_Varda",
    strengths: ["〈強み〉"],
    weaknesses: ["〈弱み〉"],
    bestEnvironments: ["〈最適環境〉"],
    idealRoles: ["〈推奨ロール〉"],
    actionSteps: ["〈成長アドバイス〉"]
  }
];