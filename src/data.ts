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
  /* Q1 : E / I */
  {
    id: 1,
    text: "On the first day of a new term, what’s your default style?",
    choices: [
      { id: "t1a", text: "Kick off with energetic ice-breakers for the whole class.", type: "E" },
      { id: "t1b", text: "Invite open discussion to get everyone talking right away.", type: "E" },
      { id: "t1c", text: "Observe quietly and learn each student’s name and vibe first.", type: "I" },
      { id: "t1d", text: "Prepare a calm introduction and one-to-one check-ins later.",  type: "I" }
    ]
  },
  /* Q2 : S / N */
  {
    id: 2,
    text: "When designing curriculum materials, you rely most on…",
    choices: [
      { id: "t2a", text: "Concrete examples and step-by-step demonstrations.", type: "S" },
      { id: "t2b", text: "Hands-on activities grounded in real-world tasks.",  type: "S" },
      { id: "t2c", text: "Big-picture themes that spark imagination.",        type: "N" },
      { id: "t2d", text: "Abstract questions that challenge conventional ideas.", type: "N" }
    ]
  },
  /* Q3 : T / F */
  {
    id: 3,
    text: "A student submits late work citing personal issues. Your instinct is to…",
    choices: [
      { id: "t3a", text: "Apply the penalty stated in the syllabus for fairness.", type: "T" },
      { id: "t3b", text: "Offer a structured make-up assignment with clear criteria.", type: "T" },
      { id: "t3c", text: "Listen to their situation and adjust the deadline compassionately.", type: "F" },
      { id: "t3d", text: "Provide encouragement and alternative ways to demonstrate learning.", type: "F" }
    ]
  },
  /* Q4 : J / P */
  {
    id: 4,
    text: "Mid-semester, the school introduces a new policy that shifts your schedule. You…",
    choices: [
      { id: "t4a", text: "Rewrite your lesson plans immediately to align with the new timeline.", type: "J" },
      { id: "t4b", text: "Create a detailed calendar with checkpoints to stay on track.",        type: "J" },
      { id: "t4c", text: "Adjust organically, updating content as you gauge student progress.",  type: "P" },
      { id: "t4d", text: "Embrace the change and experiment with fresh activities week by week.", type: "P" }
    ]
  }
],
  doctor: [
  /* Q1 : E / I */
  {
    id: 1,
    text: "During a patient consultation, your natural style is to…",
    choices: [
      { id: "m1a", text: "Lead an open conversation to put the patient at ease.", type: "E" },
      { id: "m1b", text: "Invite nurses / family into the dialogue for more insight.", type: "E" },
      { id: "m1c", text: "Listen quietly, taking detailed notes before responding.",  type: "I" },
      { id: "m1d", text: "Focus on a calm one-to-one discussion in a private setting.", type: "I" }
    ]
  },
  /* Q2 : S / N */
  {
    id: 2,
    text: "When collecting diagnostic clues, you rely most on…",
    choices: [
      { id: "m2a", text: "Physical exam findings and lab results.",      type: "S" },
      { id: "m2b", text: "Observable symptoms and patient history.",     type: "S" },
      { id: "m2c", text: "Connecting subtle patterns to rare conditions.",type: "N" },
      { id: "m2d", text: "Theoretical models of underlying diseases.",   type: "N" }
    ]
  },
  /* Q3 : T / F */
  {
    id: 3,
    text: "When presenting treatment options, you emphasize…",
    choices: [
      { id: "m3a", text: "Evidence-based statistics and risk–benefit data.", type: "T" },
      { id: "m3b", text: "Clinical guidelines and logical rationale.",       type: "T" },
      { id: "m3c", text: "How each option aligns with the patient’s values.", type: "F" },
      { id: "m3d", text: "Emotional support and quality-of-life factors.",    type: "F" }
    ]
  },
  /* Q4 : J / P */
  {
    id: 4,
    text: "If a treatment plan must change suddenly, you tend to…",
    choices: [
      { id: "m4a", text: "Re-schedule immediately and issue clear new orders.", type: "J" },
      { id: "m4b", text: "Document a step-by-step protocol to stay on track.",   type: "J" },
      { id: "m4c", text: "Keep several options open and adjust on the fly.",     type: "P" },
      { id: "m4d", text: "Iterate with the patient’s feedback as the situation evolves.", type: "P" }
    ]
  }
],
  engineer: [
  /* Q1 : E / I */
  {
    id: 1,
    text: "At project kickoff, your instinctive working style is to…",
    choices: [
      { id: "en1a", text: "Host a white-board session to spark team ideas.", type: "E" },
      { id: "en1b", text: "Pair-program or mob-code to share knowledge fast.", type: "E" },
      { id: "en1c", text: "Sketch a prototype solo before sharing anything.",  type: "I" },
      { id: "en1d", text: "Dive into documentation quietly to map the problem.", type: "I" }
    ]
  },
  /* Q2 : S / N */
  {
    id: 2,
    text: "When comparing design options, you lean on…",
    choices: [
      { id: "en2a", text: "Concrete benchmarks and proven patterns.", type: "S" },
      { id: "en2b", text: "Detailed specs and edge-case checklists.",  type: "S" },
      { id: "en2c", text: "Visionary architecture that scales to unseen needs.", type: "N" },
      { id: "en2d", text: "Creative leaps that could disrupt current limits.",    type: "N" }
    ]
  },
  /* Q3 : T / F */
  {
    id: 3,
    text: "A teammate proposes a risky refactor; your main criterion is…",
    choices: [
      { id: "en3a", text: "Performance metrics and algorithmic efficiency.", type: "T" },
      { id: "en3b", text: "Logical soundness and technical debt reduction.",  type: "T" },
      { id: "en3c", text: "Impact on developer morale and user delight.",     type: "F" },
      { id: "en3d", text: "Whether it fosters collaboration and team growth.", type: "F" }
    ]
  },
  /* Q4 : J / P */
  {
    id: 4,
    text: "Mid-sprint, requirements change drastically. You usually…",
    choices: [
      { id: "en4a", text: "Re-draft a timeline and lock in new deliverables.", type: "J" },
      { id: "en4b", text: "Document clear acceptance criteria right away.",     type: "J" },
      { id: "en4c", text: "Keep options open and iterate with quick spikes.",   type: "P" },
      { id: "en4d", text: "Prototype multiple paths and decide as data arrives.",type: "P" }
    ]
  }
],
  artist: [
  /* Q1 : E / I */
  {
    id: 1,
    text: "When a new idea sparks, your next move is to…",
    choices: [
      { id: "a1a", text: "Call a friend or fellow artist to jam on it together.", type: "E" },
      { id: "a1b", text: "Post a rough sketch online to gather quick feedback.",  type: "E" },
      { id: "a1c", text: "Retreat to your studio and sketch privately first.",   type: "I" },
      { id: "a1d", text: "Keep it in a personal journal until the concept is clear.", type: "I" }
    ]
  },
  /* Q2 : S / N */
  {
    id: 2,
    text: "Your strongest source of inspiration typically comes from…",
    choices: [
      { id: "a2a", text: "Real-world textures, colors, and everyday scenes.", type: "S" },
      { id: "a2b", text: "Historical techniques and classical references.",   type: "S" },
      { id: "a2c", text: "Symbolic imagery and abstract concepts.",           type: "N" },
      { id: "a2d", text: "Dream-like ideas that push beyond reality.",        type: "N" }
    ]
  },
  /* Q3 : T / F */
  {
    id: 3,
    text: "When judging whether a piece is finished, you rely on…",
    choices: [
      { id: "a3a", text: "Balanced composition and technical precision.",   type: "T" },
      { id: "a3b", text: "Adherence to design principles and proportions.", type: "T" },
      { id: "a3c", text: "Whether it conveys the intended emotion.",        type: "F" },
      { id: "a3d", text: "The personal or social story it tells.",          type: "F" }
    ]
  },
  /* Q4 : J / P */
  {
    id: 4,
    text: "Faced with a looming exhibition deadline, you tend to…",
    choices: [
      { id: "a4a", text: "Create a strict schedule and stick to milestones.",  type: "J" },
      { id: "a4b", text: "Finalize each element before moving to the next.",   type: "J" },
      { id: "a4c", text: "Experiment up to the last minute, adjusting as you go.", type: "P" },
      { id: "a4d", text: "Leave space for spontaneous changes on installation day.", type: "P" }
    ]
  }
],
  journalist: [
  /* Q1 : E / I */
  {
    id: 1,
    text: "A potential scoop drops—first thing you do?",
    choices: [
      { id: "j1a", text: "Ring key sources right away for live quotes.",        type: "E" },
      { id: "j1b", text: "Rush to the scene to interview eyewitnesses.",        type: "E" },
      { id: "j1c", text: "Dive into archives and databases on your own first.", type: "I" },
      { id: "j1d", text: "Sketch questions privately before contacting anyone.",type: "I" }
    ]
  },
  /* Q2 : S / N */
  {
    id: 2,
    text: "Your go-to evidence-gathering style is…",
    choices: [
      { id: "j2a", text: "Verify official documents and statistics.",       type: "S" },
      { id: "j2b", text: "Cite on-record statements and concrete facts.",    type: "S" },
      { id: "j2c", text: "Trace hidden patterns across disparate clues.",    type: "N" },
      { id: "j2d", text: "Imagine scenarios to uncover bigger narratives.",  type: "N" }
    ]
  },
  /* Q3 : T / F */
  {
    id: 3,
    text: "When shaping your article’s angle, you rely most on…",
    choices: [
      { id: "j3a", text: "Logical flow supported by hard evidence.",     type: "T" },
      { id: "j3b", text: "Data visuals that prove the claim.",           type: "T" },
      { id: "j3c", text: "Emotional power of personal stories.",         type: "F" },
      { id: "j3d", text: "Potential social impact of the piece.",        type: "F" }
    ]
  },
  /* Q4 : J / P */
  {
    id: 4,
    text: "A breaking-news deadline looms. You tend to…",
    choices: [
      { id: "j4a", text: "Lock sections as you finish and file early.",       type: "J" },
      { id: "j4b", text: "Follow a strict outline and timetable.",            type: "J" },
      { id: "j4c", text: "Keep tweaking copy as fresh info rolls in.",        type: "P" },
      { id: "j4d", text: "Stay flexible, ready to rewrite at the last minute.",type: "P" }
    ]
  }
],
  lawyer: [
  /* Q1 : E / I */
  {
    id: 1,
    text: "At the start of a new case, your first move is…",
    choices: [
      { id: "l1a", text: "Call a team huddle to brainstorm angles.", type: "E" },
      { id: "l1b", text: "Interview key witnesses right away.",     type: "E" },
      { id: "l1c", text: "Study the case files quietly on your own.",type: "I" },
      { id: "l1d", text: "Draft preliminary arguments in solitude.", type: "I" }
    ]
  },
  /* Q2 : S / N */
  {
    id: 2,
    text: "When building your argument, you lean most on…",
    choices: [
      { id: "l2a", text: "Documented precedents and statutes.",                  type: "S" },
      { id: "l2b", text: "Concrete timelines and physical evidence.",            type: "S" },
      { id: "l2c", text: "Novel interpretations that reframe the law.",          type: "N" },
      { id: "l2d", text: "Big-picture principles that could set new precedent.", type: "N" }
    ]
  },
  /* Q3 : T / F */
  {
    id: 3,
    text: "What guides your courtroom persuasion style?",
    choices: [
      { id: "l3a", text: "Logical, point-by-point refutation.",      type: "T" },
      { id: "l3b", text: "Data-driven exhibits and analytics.",      type: "T" },
      { id: "l3c", text: "Compelling stories that humanise clients.",type: "F" },
      { id: "l3d", text: "Appeals to shared values and fairness.",   type: "F" }
    ]
  },
  /* Q4 : J / P */
  {
    id: 4,
    text: "Mid-trial, new evidence surfaces. You tend to…",
    choices: [
      { id: "l4a", text: "Revise your brief and lock the plan quickly.", type: "J" },
      { id: "l4b", text: "Create a strict updated timeline to follow.", type: "J" },
      { id: "l4c", text: "Stay agile—adjust arguments on the fly.",     type: "P" },
      { id: "l4d", text: "Keep options open and improvise in questioning.", type: "P" }
    ]
  }
],
  investor: [
  /* Q1 : E / I */
  {
    id: 1,
    text: "You spot a promising company — what’s your first move?",
    choices: [
      { id: "i1a", text: "Pitch the idea to your investing circle for feedback.", type: "E" },
      { id: "i1b", text: "Jump on a call to hash it out with colleagues.",        type: "E" },
      { id: "i1c", text: "Run a solo deep-dive before telling anyone.",           type: "I" },
      { id: "i1d", text: "Quietly back-test the thesis on your own model.",       type: "I" }
    ]
  },
  /* Q2 : S / N */
  {
    id: 2,
    text: "Which evidence weighs heaviest when vetting an investment?",
    choices: [
      { id: "i2a", text: "Audited financials and recent KPIs.",            type: "S" },
      { id: "i2b", text: "Historical price patterns and hard data.",       type: "S" },
      { id: "i2c", text: "Disruptive potential five years down the road.", type: "N" },
      { id: "i2d", text: "Macro trends that could reshape the sector.",    type: "N" }
    ]
  },
  /* Q3 : T / F */
  {
    id: 3,
    text: "Pressed to choose between two assets, you rely on…",
    choices: [
      { id: "i3a", text: "Risk-adjusted return metrics (Sharpe, etc.).", type: "T" },
      { id: "i3b", text: "Detailed sensitivity analyses in Excel.",      type: "T" },
      { id: "i3c", text: "The company’s mission and societal impact.",   type: "F" },
      { id: "i3d", text: "Leadership’s values and stakeholder stories.", type: "F" }
    ]
  },
  /* Q4 : J / P */
  {
    id: 4,
    text: "Markets tumble unexpectedly — your instinct is to…",
    choices: [
      { id: "i4a", text: "Rebalance to predefined allocation rules.",     type: "J" },
      { id: "i4b", text: "Tighten stop-losses and stick to the playbook.",type: "J" },
      { id: "i4c", text: "Stay nimble and scoop bargains as they appear.",type: "P" },
      { id: "i4d", text: "Pause rules; improvise trades with evolving info.", type: "P" }
    ]
  }
],
  professor: [
  /* Q1 : E / I */
  {
    id: 1,
    text: "A colleague proposes a joint paper — what sounds most appealing?",
    choices: [
      { id: "p1a", text: "Brain-storming together and co-authoring the draft.", type: "E" },
      { id: "p1b", text: "Hosting lively seminars to refine the ideas publicly.", type: "E" },
      { id: "p1c", text: "Developing the argument privately before sharing it.",  type: "I" },
      { id: "p1d", text: "Working out proofs alone, then circulating a preprint.", type: "I" }
    ]
  },
  /* Q2 : S / N */
  {
    id: 2,
    text: "When designing a study, you’re most drawn to…",
    choices: [
      { id: "p2a", text: "Meticulous data collection and replication.",        type: "S" },
      { id: "p2b", text: "Archival digging for concrete historical facts.",     type: "S" },
      { id: "p2c", text: "Building abstract models that push the theory.",      type: "N" },
      { id: "p2d", text: "Speculating on emerging paradigms and possibilities.", type: "N" }
    ]
  },
  /* Q3 : T / F */
  {
    id: 3,
    text: "Evaluating students, which factor tips the scale for you?",
    choices: [
      { id: "p3a", text: "Precise grading rubrics and statistical averages.", type: "T" },
      { id: "p3b", text: "Rigorous argumentation and logical soundness.",     type: "T" },
      { id: "p3c", text: "Growth in confidence and intellectual curiosity.",   type: "F" },
      { id: "p3d", text: "Classroom engagement and peer collaboration.",       type: "F" }
    ]
  },
  /* Q4 : J / P */
  {
    id: 4,
    text: "A syllabus change is required mid-semester — you…",
    choices: [
      { id: "p4a", text: "Publish an updated schedule with firm deadlines.", type: "J" },
      { id: "p4b", text: "Specify clear milestones and stick to them.",      type: "J" },
      { id: "p4c", text: "Leave room for student-led detours and topics.",   type: "P" },
      { id: "p4d", text: "Iterate weekly based on class momentum.",          type: "P" }
    ]
  }
],
  consultant: [
  /* Q1 : E / I */
  {
    id: 1,
    text: "クライアントキックオフで最初に取る行動は？",
    choices: [
      { id: "co1a", text: "ワークショップを開いて関係者と議論を活性化する", type: "E" },
      { id: "co1b", text: "社内外ネットワークを駆使し情報を共有して盛り上げる", type: "E" },
      { id: "co1c", text: "まず一人で資料を読み込み課題を静かに構造化する", type: "I" },
      { id: "co1d", text: "観察に徹し要点を整理してから提案をまとめる",     type: "I" }
    ]
  },
  /* Q2 : S / N */
  {
    id: 2,
    text: "課題の原因を探る際、あなたが最も重視するのは？",
    choices: [
      { id: "co2a", text: "数値データや過去事例など具体的ファクト",            type: "S" },
      { id: "co2b", text: "現場観察とヒアリングで細部を把握すること",            type: "S" },
      { id: "co2c", text: "業界メガトレンドや将来シナリオを描くこと",            type: "N" },
      { id: "co2d", text: "抽象モデルで本質構造を推論し切り口を見つけること",    type: "N" }
    ]
  },
  /* Q3 : T / F */
  {
    id: 3,
    text: "解決策を提案するとき、あなたの決め手は？",
    choices: [
      { id: "co3a", text: "ROI・KPIなど論理的評価指標が優れている",        type: "T" },
      { id: "co3b", text: "仮説検証のロジックが一貫している",              type: "T" },
      { id: "co3c", text: "ステークホルダー全員の納得感と共感が得られる",  type: "F" },
      { id: "co3d", text: "組織文化や人へのポジティブインパクトが大きい", type: "F" }
    ]
  },
  /* Q4 : J / P */
  {
    id: 4,
    text: "プロジェクトの進め方として近いのはどれ？",
    choices: [
      { id: "co4a", text: "ガントチャートでタスクと期限を厳格管理",        type: "J" },
      { id: "co4b", text: "成果物を先に固め計画通りに遂行する",            type: "J" },
      { id: "co4c", text: "変化に応じてスプリントを柔軟に見直す",          type: "P" },
      { id: "co4d", text: "余白を残しアイデアを試しながら進める",          type: "P" }
    ]
  }
],
  researcher: [
  /* Q1 : E / I */
  {
    id: 1,
    text: "新しい研究テーマを思いついた直後、あなたが最初に取る行動は？",
    choices: [
      { id: "r1a", text: "研究室メンバーに話して議論を始める",       type: "E" },
      { id: "r1b", text: "関連する専門家に連絡し意見を募る",         type: "E" },
      { id: "r1c", text: "一人でノートに仮説を書き出し整理する",     type: "I" },
      { id: "r1d", text: "静かな場所で文献を読み込み思考を深める",   type: "I" }
    ]
  },
  /* Q2 : S / N */
  {
    id: 2,
    text: "研究データを収集するときに最も重視するのは？",
    choices: [
      { id: "r2a", text: "実験や調査で得られる具体的な数値",         type: "S" },
      { id: "r2b", text: "現場観察から得られる詳細な事実",           type: "S" },
      { id: "r2c", text: "理論モデルが示す新しい可能性",             type: "N" },
      { id: "r2d", text: "複数学問を横断した斬新な切り口",           type: "N" }
    ]
  },
  /* Q3 : T / F */
  {
    id: 3,
    text: "対立する結果が出たとき、どちらを優先しますか？",
    choices: [
      { id: "r3a", text: "統計的有意性と再現性の高さ",              type: "T" },
      { id: "r3b", text: "論理の一貫性と因果関係の明確さ",          type: "T" },
      { id: "r3c", text: "社会や環境へのプラスの影響",              type: "F" },
      { id: "r3d", text: "被験者や関係者への倫理的配慮",            type: "F" }
    ]
  },
  /* Q4 : J / P */
  {
    id: 4,
    text: "研究スケジュールが変更になった場合の対応は？",
    choices: [
      { id: "r4a", text: "すぐに計画を組み直し進捗を厳格に管理する", type: "J" },
      { id: "r4b", text: "マイルストーンを再設定し順序通り進める",  type: "J" },
      { id: "r4c", text: "変化に合わせて柔軟に進め方を調整する",    type: "P" },
      { id: "r4d", text: "状況を見ながらアイデアを試行錯誤する",    type: "P" }
    ]
  }
],
  architect: [
  /* Q1 : E / I */
  {
    id: 1,
    text: "コンセプト立案の初期段階で、あなたがまず行うのは？",
    choices: [
      { id: "ar1a", text: "スタジオメンバーとアイデアを出し合いブレストする", type: "E" },
      { id: "ar1b", text: "ワークショップを主導して刺激を受ける",           type: "E" },
      { id: "ar1c", text: "一人でスケッチを重ねて思考を整理する",               type: "I" },
      { id: "ar1d", text: "静かな場所で資料を読み込みながら構想を深める",       type: "I" }
    ]
  },
  /* Q2 : S / N */
  {
    id: 2,
    text: "新しい建築プロジェクトのインスピレーション源として最も近いのは？",
    choices: [
      { id: "ar2a", text: "敷地や周辺環境の綿密な現地調査",           type: "S" },
      { id: "ar2b", text: "類似施設の施工事例や実測データ",           type: "S" },
      { id: "ar2c", text: "未来のライフスタイルを描いたビジョン",     type: "N" },
      { id: "ar2d", text: "異分野アートや最新テクノロジーからの発想", type: "N" }
    ]
  },
  /* Q3 : T / F */
  {
    id: 3,
    text: "複数案を比較検討するとき、より重視するのはどちら？",
    choices: [
      { id: "ar3a", text: "構造安全性やコストパフォーマンスなど客観指標", type: "T" },
      { id: "ar3b", text: "性能シミュレーション数値や耐久性データ",       type: "T" },
      { id: "ar3c", text: "利用者の居心地や感情へのインパクト",           type: "F" },
      { id: "ar3d", text: "地域文化や歴史との調和・物語性",             type: "F" }
    ]
  },
  /* Q4 : J / P */
  {
    id: 4,
    text: "クライアント要件が途中で大幅に変更された場合の対応は？",
    choices: [
      { id: "ar4a", text: "即座に工程表を引き直しタスクを割り当てる",      type: "J" },
      { id: "ar4b", text: "変更点を文書化し承認プロセスを再設定する",        type: "J" },
      { id: "ar4c", text: "柔軟にプロセスを組み替えながら試作品で検証",      type: "P" },
      { id: "ar4d", text: "状況を見つつアイデアを探索して最適解を探る",      type: "P" }
    ]
  }
],
  copywriter: [
  /* Q1 : E / I */
  {
    id: 1,
    text: "新しいキャッチコピーを考える最初のステップは？",
    choices: [
      { id: "cw1a", text: "チームと声に出してアイデアを連発し合う", type: "E" },
      { id: "cw1b", text: "クライアントに即ヒアリングして方向性をつかむ", type: "E" },
      { id: "cw1c", text: "一人でノートに書き留めながら発想を深める", type: "I" },
      { id: "cw1d", text: "静かな場所でリサーチして構想を練る", type: "I" }
    ]
  },
  /* Q2 : S / N */
  {
    id: 2,
    text: "コピーの根拠として最も重視する情報源は？",
    choices: [
      { id: "cw2a", text: "購買データやアクセス解析など数値指標", type: "S" },
      { id: "cw2b", text: "過去の成功事例や競合広告の具体例",   type: "S" },
      { id: "cw2c", text: "未来のトレンドを先読みした大胆な仮説", type: "N" },
      { id: "cw2d", text: "業界外の文化・アートから得た着想",     type: "N" }
    ]
  },
  /* Q3 : T / F */
  {
    id: 3,
    text: "複数のコピー案から一本に絞る決め手は？",
    choices: [
      { id: "cw3a", text: "A/Bテストで最もCTRが高いもの",          type: "T" },
      { id: "cw3b", text: "論理構成が明快で誤解の余地がないもの",    type: "T" },
      { id: "cw3c", text: "読者の共感を呼び心を動かすストーリー性",   type: "F" },
      { id: "cw3d", text: "ブランドの世界観を温かく伝える響き",     type: "F" }
    ]
  },
  /* Q4 : J / P */
  {
    id: 4,
    text: "タイトな納期の中でアイデアが出尽くした！あなたの行動は？",
    choices: [
      { id: "cw4a", text: "すぐにタスクを再優先づけし進行表を修正",       type: "J" },
      { id: "cw4b", text: "チェックリストを使い漏れなく仕上げる",         type: "J" },
      { id: "cw4c", text: "視点を変えるため散歩しながらひらめきを待つ",   type: "P" },
      { id: "cw4d", text: "まず書いてみて途中で大胆に方向転換する",       type: "P" }
    ]
  }
],
  director: [
  /* Q1 : E / I */
  {
    id: 1,
    text: "撮影初日の朝、まず最初に取る行動は？",
    choices: [
      { id: "d1a", text: "スタッフ全員に声を掛け、現場の士気を高める", type: "E" },
      { id: "d1b", text: "キャストと即席リハーサルを行い意見を交換する", type: "E" },
      { id: "d1c", text: "一人で絵コンテを確認し静かに段取りを整理する", type: "I" },
      { id: "d1d", text: "ヘッドホンを付けてイメージを深掘りし集中モードへ", type: "I" }
    ]
  },
  /* Q2 : S / N */
  {
    id: 2,
    text: "あなたが脚本を読み込むとき、注目するポイントは？",
    choices: [
      { id: "d2a", text: "シーンごとの舞台設定や小道具の具体性", type: "S" },
      { id: "d2b", text: "登場人物の行動とセリフが現実味を持つか",   type: "S" },
      { id: "d2c", text: "物語全体に流れる象徴的モチーフや裏テーマ",   type: "N" },
      { id: "d2d", text: "結末が投げかける哲学的メッセージや余韻",     type: "N" }
    ]
  },
  /* Q3 : T / F */
  {
    id: 3,
    text: "編集段階でシーンをカットするか迷ったとき、決め手は？",
    choices: [
      { id: "d3a", text: "物語の整合性とテンポが最適になるかどうか", type: "T" },
      { id: "d3b", text: "画面転換のリズムと構成上の論理が崩れないか", type: "T" },
      { id: "d3c", text: "観客がキャラクターにより感情移入できるか",  type: "F" },
      { id: "d3d", text: "残したほうが心揺さぶる余韻が生まれるか",    type: "F" }
    ]
  },
  /* Q4 : J / P */
  {
    id: 4,
    text: "撮影中にロケ地が急遽変更！どう対応する？",
    choices: [
      { id: "d4a", text: "即座に新しい撮影スケジュールを作り直す", type: "J" },
      { id: "d4b", text: "各部署のタスクを再割当てし進捗を管理",     type: "J" },
      { id: "d4c", text: "ロケ地の特色を活かし脚本を大胆に書き換える", type: "P" },
      { id: "d4d", text: "臨場感を優先しその場のインスピレーションで撮る", type: "P" }
    ]
  }
],
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
  name: "ウォーレン・バフェット",
  occupation: "investor",
  mbti: "ISTJ",
  description:
    "徹底したファンダメンタル分析で“適正価格以下の優良企業”を丹念に拾い上げる「オマハの賢人」。複利と長期保有の威力を誰よりも体現する堅実派です。",
  imageUrl: "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg",
  wikiUrl: "https://en.wikipedia.org/wiki/Warren_Buffett",
  strengths: [
    "財務諸表を深掘りして企業の本質価値を算定する分析力",
    "短期ノイズに左右されない鉄壁の忍耐力と規律",
    "資本配分を最適化する経営者視点の投資判断"
  ],
  weaknesses: [
    "新興テクノロジー分野への参入が慎重すぎる傾向",
    "決断速度より熟考を重視するため機会損失が起こりやすい"
  ],
  actionSteps: [
    "成長産業の専門家と協働し知見をアップデート",
    "ポートフォリオの一部で実験的な少額投資を行い学習速度を上げる",
    "後継者育成とナレッジ共有に時間を割き組織的判断力を高める"
  ],
},
{
  name: "ジョージ・ソロス",
  occupation: "investor",
  mbti: "INTJ",
  description:
    "“再帰性理論”で市場心理を読み切り、世界経済を股にかけたマクロトレードを敢行する戦略家。大胆なポジショニングと即断即決で巨利を狙います。",
  imageUrl: "https://images.pexels.com/photos/534217/pexels-photo-534217.jpeg",
  wikiUrl: "https://en.wikipedia.org/wiki/George_Soros",
  strengths: [
    "地政学・金融政策まで俯瞰するグローバル視点",
    "相場の転換点を嗅ぎ取る鋭い直観とシナリオ思考",
    "損切りを躊躇しないリスク管理の徹底"
  ],
  weaknesses: [
    "ポジションが巨大化し市場へ自己影響を与えやすい",
    "高いボラティリティが精神的ストレスを招く"
  ],
  actionSteps: [
    "ポジションサイズを段階的に調整し影響度をコントロール",
    "チーム分析を取り入れ主観バイアスを軽減",
    "ストレス対策としてトレード以外の意思決定プロトコルを整備"
  ],
},
{
  name: "キャシー・ウッド",
  occupation: "investor",
  mbti: "ENFJ",
  description:
    "破壊的イノベーション企業に集中投資し“次の10年を創るテーマ”を世界に語るビジョナリー。物語とデータを両輪に未来像を描きます。",
  imageUrl: "https://images.pexels.com/photos/534218/pexels-photo-534218.jpeg",
  wikiUrl: "https://en.wikipedia.org/wiki/Cathie_Wood",
  strengths: [
    "テクノロジーのSカーブを先読みする洞察力",
    "難解な技術をストーリーとして投資家に伝える発信力",
    "高リターンを狙う集中ポートフォリオ構築"
  ],
  weaknesses: [
    "ボラティリティが高くドローダウンが大きい",
    "将来予測を重視し過去データからの逸脱が生じやすい"
  ],
  actionSteps: [
    "バリュエーションの定量モデルを精緻化し期待値を数値で検証",
    "ヘッジ戦略を導入し下落局面のリスクを平準化",
    "外部専門家レビューで根拠の透明性を高める"
  ],
},
{
  name: "レイ・ダリオ",
  occupation: "investor",
  mbti: "ENTP",
  description:
    "“プリンシプル”を掲げ、データ駆動でオールウェザー運用を実践する橋水アソシエイツ創業者。経済メカニズムを体系化し、多角的分散で安定収益を追求します。",
  imageUrl: "https://images.pexels.com/photos/534219/pexels-photo-534219.jpeg",
  wikiUrl: "https://en.wikipedia.org/wiki/Ray_Dalio",
  strengths: [
    "経済サイクルをモデル化するシステム思考",
    "膨大なデータを用いたアルゴリズム運用",
    "組織に“率直な対話文化”を根付かせるリーダーシップ"
  ],
  weaknesses: [
    "モデルが複雑化し外部に伝わりにくい",
    "原則を重視しすぎて環境変化への柔軟性が低下する恐れ"
  ],
  actionSteps: [
    "モデルの仮定を簡潔に可視化し関係者間で共有",
    "フィードバックループを短縮しパラメータを迅速にアップデート",
    "小規模チームでの実験運用を並行し機敏さを維持"
  ],
},

  // Professors
  {
  name: "ノーム・チョムスキー",
  occupation: "professor",
  mbti: "INTJ",
  description:
    "生成文法で言語研究に革命を起こし、政治哲学でも鋭い批評を続ける“構造の開拓者”。抽象モデルで本質を掴み、学際的に理論を拡張する姿勢が際立ちます。",
  imageUrl: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg",
  wikiUrl: "https://en.wikipedia.org/wiki/Noam_Chomsky",
  strengths: [
    "複雑現象を抽象化する構造的思考",
    "学際領域へ理論を応用する概念転用力",
    "一貫した批判精神で議論を牽引"
  ],
  weaknesses: [
    "抽象度が高く実践との橋渡しが不足しがち",
    "議論が演繹的になり現場の情緒を見落とすことがある"
  ],
  actionSteps: [
    "実証研究者と協働しケーススタディを増やす",
    "学生ワークショップで理論を日常経験に結び付ける",
    "一般向け解説記事を執筆し概念を具体化する"
  ]
},
{
  name: "ベル・フックス",
  occupation: "professor",
  mbti: "ENFJ",
  description:
    "ジェンダー・人種・階級を横断する批評で教育を変革した“インクルーシブ・エデュケーター”。共感と情熱で学習コミュニティを築き、社会正義を学びに結び付けます。",
  imageUrl: "https://images.pexels.com/photos/3184329/pexels-photo-3184329.jpeg",
  wikiUrl: "https://en.wikipedia.org/wiki/Bell_hooks",
  strengths: [
    "物語と対話で多様な声を引き出すファシリテーション",
    "学習を社会変革へ導くビジョン提示力",
    "学生の成長を後押しするコーチングマインド"
  ],
  weaknesses: [
    "情熱が強く批判を個人的に受け止めやすい",
    "テーマが拡散し研究フォーカスが散漫になりがち"
  ],
  actionSteps: [
    "年度ごとに研究テーマを絞りアウトカムを定義",
    "セルフケアと境界設定で情緒的負荷を調整",
    "定量指標を導入してインパクトを可視化"
  ]
},
{
  name: "リチャード・ファインマン",
  occupation: "professor",
  mbti: "ENTP",
  description:
    "量子電磁力学を平易に語り“ファインマン流講義”を確立した好奇心の化身。ユーモアと実験精神で学問の魅力を広めます。",
  imageUrl: "https://images.pexels.com/photos/3184330/pexels-photo-3184330.jpeg",
  wikiUrl: "https://en.wikipedia.org/wiki/Richard_Feynman",
  strengths: [
    "比喩で難解概念を噛み砕くストーリーテリング",
    "“やってみよう”で学生を巻き込む実践志向",
    "異分野の疑問を拾う旺盛な好奇心"
  ],
  weaknesses: [
    "興味が拡散し研究計画が長期化しやすい",
    "即興重視で理論的精度が粗くなる場合がある"
  ],
  actionSteps: [
    "年間プロジェクトを三つ以内に絞り優先順位を明確化",
    "共著者を立てデータ解析や理論検証を深掘り",
    "講義資料を体系化しナレッジベースを構築"
  ]
},
{
  name: "ハンナ・アーレント",
  occupation: "professor",
  mbti: "INTP",
  description:
    "全体主義と公共性を再考した政治哲学者。“考えることの責任”を問い続け、独立独歩で概念を磨き上げる探究者です。",
  imageUrl: "https://images.pexels.com/photos/3184331/pexels-photo-3184331.jpeg",
  wikiUrl: "https://en.wikipedia.org/wiki/Hannah_Arendt",
  strengths: [
    "歴史事象を俯瞰し概念を再編成する分析力",
    "少数資料から新理論を構築する洞察力",
    "複雑な倫理問題を鮮やかに言語化する論述力"
  ],
  weaknesses: [
    "議論が高度で学生が置き去りになることがある",
    "独立を好みチーム研究が停滞しがち"
  ],
  actionSteps: [
    "基礎用語集を作成し授業で共有し理解を支援",
    "少人数ゼミで学生のフィードバックを取り入れる",
    "共同研究に参加し多面的視点を取り込む"
  ]
},
  // Consultants
  {
  name: "ノーム・チョムスキー",
  occupation: "professor",
  mbti: "INTJ",
  description:
    "生成文法を提唱し言語学のみならず政治哲学にも影響を与えた“構造の開拓者”。体系的に真理を追究し、学際的視点で既存理論を再構築します。",
  imageUrl: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg",
  wikiUrl: "https://en.wikipedia.org/wiki/Noam_Chomsky",
  strengths: [
    "複雑現象を抽象モデルで整理する構造化思考",
    "学際領域へ理論を応用する概念転用力",
    "一貫した批判精神で新たな議論を喚起"
  ],
  weaknesses: [
    "抽象度が高く具体的応用が伝わりにくい",
    "議論が演繹的になり現場の情緒を見落としがち"
  ],
  actionSteps: [
    "実証研究者と協働し理論の検証事例を増やす",
    "ワークショップ形式で学生の経験知を理論に接続",
    "一般向け解説記事を執筆し抽象概念を具体化する"
  ]
},
{
  name: "ベル・フックス",
  occupation: "professor",
  mbti: "ENFJ",
  description:
    "ジェンダー・人種・階級を横断するファミニズム理論で教育を変革した“インクルーシブ・エデュケーター”。共感と情熱で学びを共同創造します。",
  imageUrl: "https://images.pexels.com/photos/3184329/pexels-photo-3184329.jpeg",
  wikiUrl: "https://en.wikipedia.org/wiki/Bell_hooks",
  strengths: [
    "物語と対話で多様な声を引き出すファシリテーション力",
    "社会正義と学びを結び付けるビジョン提案力",
    "学生の成長を後押しするコーチングマインド"
  ],
  weaknesses: [
    "情熱が強く批判を個人的に受け止めやすい",
    "テーマが広がりすぎ研究フォーカスが散漫になりがち"
  ],
  actionSteps: [
    "研究テーマを年度ごとに絞りアウトカムを明確化",
    "セルフケアと境界設定を意識し情緒的負荷を調整",
    "データ駆動の評価指標を取り入れ説得力を補強"
  ]
},
{
  name: "リチャード・ファインマン",
  occupation: "professor",
  mbti: "ENTP",
  description:
    "量子電磁力学を平易な言葉で語り“ファインマン流講義”を確立した好奇心の化身。ユーモアと実験精神で学問の魅力を拡散します。",
  imageUrl: "https://images.pexels.com/photos/3184330/pexels-photo-3184330.jpeg",
  wikiUrl: "https://en.wikipedia.org/wiki/Richard_Feynman",
  strengths: [
    "複雑概念を比喩で噛み砕くストーリーテリング力",
    "“やってみよう”で学生を巻き込む実験志向",
    "異分野の疑問を拾い上げる好奇心と柔軟性"
  ],
  weaknesses: [
    "興味が拡散し研究計画が長期化する恐れ",
    "即興的アプローチで理論精度が粗くなることがある"
  ],
  actionSteps: [
    "年間リサーチテーマを3件以内に絞り優先度を管理",
    "共著者を立て理論・データ検証の深掘りを委ねる",
    "講義記録を教材化し継続的に知識資産を蓄積"
  ]
},
{
  name: "ハンナ・アーレント",
  occupation: "professor",
  mbti: "INTP",
  description:
    "全体主義と公共性を再考した政治哲学者。“考えることの責任”を問い続け、独立独歩で概念を磨き上げる探究者です。",
  imageUrl: "https://images.pexels.com/photos/3184331/pexels-photo-3184331.jpeg",
  wikiUrl: "https://en.wikipedia.org/wiki/Hannah_Arendt",
  strengths: [
    "歴史事象を俯瞰し概念を再編成する分析力",
    "少数資料から新たな理論枠組みを構築する洞察",
    "複雑な倫理問題を言語化する論述スキル"
  ],
  weaknesses: [
    "議論が高度になり学生が置き去りになることがある",
    "協調より独立を好みチーム研究が停滞しがち"
  ],
  actionSteps: [
    "基礎用語集を作成し授業で理解の土台を共有",
    "少人数ゼミで逐次フィードバックを取り入れ双方向性を強化",
    "共同研究プロジェクトに参加し多面的視点を導入"
  ]
},
  // Resercher
{
  name: "スティーブン・ホーキング",
  occupation: "researcher",
  mbti: "INTJ",
  description:
    "ブラックホール蒸発理論で宇宙観を刷新した“車椅子の天才理論物理学者”。思考実験を駆使し、抽象理論を一枚の式に凝縮する設計者型です。",
  imageUrl: "https://images.pexels.com/photos/2156/sky-space-dark-galaxy.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Stephen_Hawking",
  strengths: [
    "複雑な数式モデルを直観的に操る抽象化能力",
    "膨大な文献を統合し新理論へ昇華する分析力",
    "逆境をも力に変える粘り強い探究心"
  ],
  weaknesses: [
    "理論に没頭し過ぎて実験・観測との接点が希薄になりやすい",
    "完璧を求め発表タイミングを逃すことがある"
  ],
  actionSteps: [
    "共同研究者と定期レビューを設け実証フェーズを強化",
    "研究アイデアを小刻みに論文化し知見共有の速度を上げる",
    "若手へメンタリングし新視点を取り入れて仮説を進化させる"
  ]
},
{
  name: "ジェーン・グドール",
  occupation: "researcher",
  mbti: "INFJ",
  description:
    "チンパンジー研究で“動物に心を見出した”フィールドサイエンティスト。洞察と共感で被写体との垣根を取り払い、物語性ある科学を創ります。",
  imageUrl: "https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg",
  wikiUrl: "https://en.wikipedia.org/wiki/Jane_Goodall",
  strengths: [
    "長期観察で行動変化を丁寧に追う粘着質な観察眼",
    "動物・人・社会を結ぶストーリーテリング力",
    "保全活動へつなげる使命感とリーダーシップ"
  ],
  weaknesses: [
    "現場への愛着が強く客観データ化が後手になることがある",
    "感情移入しすぎて批判的再検討を後回しにしやすい"
  ],
  actionSteps: [
    "行動データを定量指標に落とし込み統計解析を補完",
    "第三者レビューでバイアスをチェックし再現性を確保",
    "研究成果を政策提言に翻訳し影響力を拡大"
  ]
},
{
  name: "ニール・ドグラース・タイソン",
  occupation: "researcher",
  mbti: "ENTJ",
  description:
    "宇宙の魅力を軽妙な語り口で届ける“サイエンス・コミュニケーター”。大局観とプレゼンスで研究と社会を橋渡しします。",
  imageUrl: "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Neil_deGrasse_Tyson",
  strengths: [
    "難解な概念を比喩で噛み砕くストーリーテリング",
    "メディア・イベントを活用し研究資源を獲得する交渉力",
    "多分野の専門家を束ねる統率力"
  ],
  weaknesses: [
    "メッセージ性を優先し細部の厳密さが犠牲になる恐れ",
    "決断が速いぶん周囲の合意形成が追いつかないことがある"
  ],
  actionSteps: [
    "ピアレビュー前の内部校閲を徹底し精度を担保",
    "議論の場で傾聴を意識し協働関係を強化",
    "若手研究者の広報スキル育成プログラムを主導しチーム力向上"
  ]
},
{
  name: "バーバラ・マクリントック",
  occupation: "researcher",
  mbti: "INTP",
  description:
    "“トランスポゾン”の発見で遺伝学を塗り替えた独創的実験家。孤高の集中力でデータに語らせ、思わぬパターンを掘り当てる探検者です。",
  imageUrl: "https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg",
  wikiUrl: "https://en.wikipedia.org/wiki/Barbara_McClintock",
  strengths: [
    "大量の実験データから相関を見抜くパターン認識力",
    "既存理論に縛られず自由に仮説を立て検証する独立心",
    "技術習得が速く新手法を自作できる器用さ"
  ],
  weaknesses: [
    "他者との議論を省きがちで理解を得るまで時間がかかる",
    "興味が拡散しプロジェクト完了に時間がかかることがある"
  ],
  actionSteps: [
    "定期セミナーで研究進捗を共有しフィードバックを得る",
    "論文化プロセスをスケジュール化し成果を可視化",
    "共同著者を迎え入れ検証ステップを効率化"
  ]
},
  // Architects
  {
  name: "フランク・ロイド・ライト",
  occupation: "architect",
  mbti: "INTJ",
  description:
    "敷地・構造・家具までを統合し“有機的建築”を生んだ構想家。自然との調和を図りつつ綿密な計算で空間体験をデザインします。",
  imageUrl: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
  wikiUrl: "https://en.wikipedia.org/wiki/Frank_Lloyd_Wright",
  strengths: [
    "全体を俯瞰しコンセプトからディテールまで一貫させる体系的思考",
    "自然素材と幾何学を掛け合わせた革新的デザイン発想",
    "長期的ビジョンを掲げクライアントを説得する戦略性"
  ],
  weaknesses: [
    "完璧主義ゆえ設計変更に柔軟に応じにくい",
    "自己の美学を優先しチームの意見を取りこぼす傾向"
  ],
  actionSteps: [
    "早期にモックアップを共有し利害関係者との合意形成を強化",
    "サステナビリティ指標を導入し客観的な評価軸を拡充",
    "タスクを委任しプロセスを可視化してリードタイムを短縮"
  ]
},
{
  name: "ザハ・ハディド",
  occupation: "architect",
  mbti: "ENTJ",
  description:
    "力強い曲線とダイナミックな空間で“脱構築”を体現したビジョナリー。大胆なコンセプトで都市景観に新しいリズムを刻みます。",
  imageUrl: "https://images.pexels.com/photos/1732415/pexels-photo-1732415.jpeg",
  wikiUrl: "https://en.wikipedia.org/wiki/Zaha_Hadid",
  strengths: [
    "常識を打ち破るフォルムを実現する先見性とリーダーシップ",
    "構造・材料の限界を押し広げる技術コラボ推進力",
    "プレゼンテーション力が高く大型案件を獲得する交渉力"
  ],
  weaknesses: [
    "コスト・工期が膨らみやすく実現性の調整に時間がかかる",
    "要求水準が高くチームの疲弊を招くリスク"
  ],
  actionSteps: [
    "初期段階で施工チームと協働し実現性を段階的に検証",
    "BIMデータを活用しコストシミュレーションを可視化",
    "若手スタッフに権限委譲し育成と負荷分散を図る"
  ]
},
{
  name: "ル・コルビュジエ",
  occupation: "architect",
  mbti: "ISTJ",
  description:
    "“住宅は住むための機械”と唱えた機能主義の旗手。モジュール化と合理性を武器に都市計画まで体系化しました。",
  imageUrl: "https://images.pexels.com/photos/1732416/pexels-photo-1732416.jpeg",
  wikiUrl: "https://en.wikipedia.org/wiki/Le_Corbusier",
  strengths: [
    "機能・寸法を標準化し生産効率を高めるロジカルシンキング",
    "緻密なドローイングと書籍執筆でビジョンを共有する文書化力",
    "都市スケールまで視野に入れるマスタープラン能力"
  ],
  weaknesses: [
    "実用性を重視しすぎて温かみを欠くことがある",
    "計画に固執し予期せぬ要求変化に対応しづらい"
  ],
  actionSteps: [
    "ワークショップで住民の感情的ニーズをヒアリング",
    "素材・色彩の実験で人間味をプラス",
    "アジャイルな設計レビューを導入し途中変更に備える"
  ]
},
{
  name: "アントニ・ガウディ",
  occupation: "architect",
  mbti: "INFP",
  description:
    "自然物の曲線やカラフルな装飾を取り入れた“詩的建築”の創造者。直感と信仰心を頼りに唯一無二の空間を紡ぎ出しました。",
  imageUrl: "https://images.pexels.com/photos/1732417/pexels-photo-1732417.jpeg",
  wikiUrl: "https://en.wikipedia.org/wiki/Antoni_Gaud%C3%AD",
  strengths: [
    "自然形態を観察し構造美へ昇華する創造性",
    "細部のモザイクや彫刻に魂を込める職人肌のこだわり",
    "スケール模型を駆使し空間を感覚的に検証する能力"
  ],
  weaknesses: [
    "ビジョンが抽象的で図面化・共有に時間がかかる",
    "情熱が強すぎ予算やスケジュール管理が後手に回る"
  ],
  actionSteps: [
    "3DスキャンやVRでアイデアを早期可視化し関係者と共有",
    "プロジェクトマネージャーと二人三脚で工期・費用を管理",
    "定期的にコンセプトを文章化し目的と進捗を確認"
  ]
},

  // Copywriters
{
  name: "デイビッド・オグルヴィ",
  occupation: "copywriter",
  mbti: "ENTJ",
  description:
    "リサーチと物語性を融合し“広告は売るための芸術”を体現した戦略家。数字で裏付けた大胆なコピーでブランド価値を跳ね上げました。",
  imageUrl: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg",
  wikiUrl: "https://en.wikipedia.org/wiki/David_Ogilvy_(businessman)",
  strengths: [
    "消費者インサイトを論理的に抽出する分析力",
    "大局を描き、クリエイティブを牽引するリーダーシップ",
    "ストーリーとベネフィットを両立させる説得力ある筆致"
  ],
  weaknesses: [
    "完璧主義が強く、フィードバックを受け入れにくい傾向",
    "トップダウン型になりがちでチームの自発性を阻害する恐れ"
  ],
  actionSteps: [
    "アイデアレビューを定例化し、ボトムアップの意見を取り込む",
    "データだけでなく感情指標もKPIに加えバランスを取る",
    "“80%ルール”で早期リリース→検証→改善のサイクルを回す"
  ]
},
{
  name: "メアリー・ウェルズ・ローレンス",
  occupation: "copywriter",
  mbti: "ENFP",
  description:
    "大胆なビジュアルとウィットに富むコピーで空の色まで変えた革新者。情熱と直感でブランドに新しい物語を吹き込みます。",
  imageUrl: "https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg",
  wikiUrl: "https://en.wikipedia.org/wiki/Mary_Wells_Lawrence",
  strengths: [
    "枠にとらわれない発想で“記憶に残る”キャンペーンを創出",
    "チームを鼓舞するポジティブなコミュニケーション力",
    "ブランドと顧客を感情でつなぐストーリーテリング"
  ],
  weaknesses: [
    "アイデアが広がり過ぎてメッセージが散漫になることがある",
    "熱意が先行しコスト・スケジュール管理が甘くなりがち"
  ],
  actionSteps: [
    "コンセプトを一文で言語化し、方向性を随時確認する",
    "数値テストでアイデアを絞り込み、実行フェーズを明確化",
    "プロデューサーと連携し予算とクリエイティブの両輪を整える"
  ]
},
{
  name: "クロード・C・ホプキンス",
  occupation: "copywriter",
  mbti: "ISTJ",
  description:
    "“Scientific Advertising”を提唱し、テストと統計で広告効果を可視化した実証主義者。確かな数字でクライアントを納得させます。",
  imageUrl: "https://images.pexels.com/photos/3182775/pexels-photo-3182775.jpeg",
  wikiUrl: "https://en.wikipedia.org/wiki/Claude_C._Hopkins",
  strengths: [
    "A/Bテストとデータ解析による説得力の高い提案",
    "商品理解を深め事実を端的に伝える文章力",
    "手順を徹底管理し、再現性の高い制作プロセスを構築"
  ],
  weaknesses: [
    "数値に依存しすぎて感情訴求が弱くなる恐れ",
    "変化を好まず新しい表現手法に消極的になりがち"
  ],
  actionSteps: [
    "感情価値を測る新指標（SNS反応など）もテストに組み込む",
    "他業界のクリエイティブ事例を定期的にリサーチ",
    "ビジュアル・コピーの協働ワークショップで発想を拡張"
  ]
},
{
  name: "レオ・バーネット",
  occupation: "copywriter",
  mbti: "INFJ",
  description:
    "“心に火を灯す広告”を信条に、温かな物語と象徴的キャラクターでブランドに魂を吹き込んだ共感の名匠。",
  imageUrl: "https://images.pexels.com/photos/3182776/pexels-photo-3182776.jpeg",
  wikiUrl: "https://en.wikipedia.org/wiki/Leo_Burnett",
  strengths: [
    "社会的・文化的文脈まで読み解く洞察力",
    "キャラクターや象徴を通じ長期ブランド資産を構築",
    "細部まで思いやりが行き届いたクリエイティブディレクション"
  ],
  weaknesses: [
    "理想を追求しすぎて制作スピードが落ちることがある",
    "感情移入が深く、客観的な評価を後回しにしがち"
  ],
  actionSteps: [
    "タイムボックス法で創作フェーズに期限を設ける",
    "第三者レビューを活用し客観視点を定期的に取り入れる",
    "デジタル解析ツールでブランドキャラクターの効果を可視化"
  ]
},
  // Film Directors
  {
  name: "アルフレッド・ヒッチコック",
  occupation: "director",
  mbti: "INTJ",
  description:
    "緻密なプロットと心理的サスペンスで観客を翻弄する“サスペンスの巨匠”。情報を小出しにして緊張を高める設計力と、全工程を見通した統率力が光ります。",
  imageUrl: "https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg",
  wikiUrl: "https://en.wikipedia.org/wiki/Alfred_Hitchcock",
  strengths: [
    "長期的ビジョンで伏線を張り巡らせる構成力",
    "観客心理を読み解く分析的思考",
    "編集・撮影まで一貫して管理できる戦略性"
  ],
  weaknesses: [
    "完璧主義ゆえ意思決定が遅れることがある",
    "コラボレーションより統制を優先しがち"
  ],
  actionSteps: [
    "チームメンバーへ権限委譲し、柔軟な意見交換を取り入れる",
    "段階的なマイルストーンを設定し、完璧主義による遅延を防止",
    "テスト試写で観客フィードバックを取り込みバランス感覚を磨く"
  ]
},
{
  name: "スティーブン・スピルバーグ",
  occupation: "director",
  mbti: "ENFJ",
  description:
    "壮大なスケールと豊かな感情表現で観客を魅了する“物語の魔術師”。人の心を動かすテーマ設定とチームを鼓舞するリーダーシップが特徴です。",
  imageUrl: "https://images.pexels.com/photos/274938/pexels-photo-274938.jpeg",
  wikiUrl: "https://en.wikipedia.org/wiki/Steven_Spielberg",
  strengths: [
    "感情移入を促すストーリーテリング",
    "大人数のクルーをまとめる共感型リーダーシップ",
    "マスマーケット向けのエンタメ性と社会的メッセージの両立"
  ],
  weaknesses: [
    "情熱が先行してスケジュール・予算が膨らみやすい",
    "感情移入しすぎて客観性を失う瞬間がある"
  ],
  actionSteps: [
    "データドリブンな進行管理で情熱と現実のバランスを取る",
    "静かな内省時間を確保し脚本の本質を再点検する",
    "信頼できるプロデューサーと財務面を二重チェックする"
  ]
},
{
  name: "スタンリー・キューブリック",
  occupation: "director",
  mbti: "INTP",
  description:
    "映像技法と哲学的テーマを極限まで追求した“完璧主義の研究者”。斬新なカメラワークと徹底的なリサーチで映画表現を革新しました。",
  imageUrl: "https://images.pexels.com/photos/274939/pexels-photo-274939.jpeg",
  wikiUrl: "https://en.wikipedia.org/wiki/Stanley_Kubrick",
  strengths: [
    "技術・美術・脚本を横断する深い探究心",
    "誰も試みない撮影手法を生むイノベーション力",
    "論理的分析でテーマを掘り下げる洞察力"
  ],
  weaknesses: [
    "完璧を求めすぎて制作期間・コストが膨張しやすい",
    "対人コミュニケーションが最小化され誤解を生むことがある"
  ],
  actionSteps: [
    "早期にプロトタイプ映像を制作し方向性を可視化",
    "定期レビューを設けチームと進捗・課題を共有",
    "完成度80%で一旦区切る“ベータ版思考”を取り入れる"
  ]
},
{
  name: "アニエス・ヴァルダ",
  occupation: "director",
  mbti: "ENFP",
  description:
    "ドキュメンタリーとフィクションを自由に往来する“映画界のグランマザー”。直感的かつ詩的な視点で人々の日常に潜む物語を掘り起こします。",
  imageUrl: "https://images.pexels.com/photos/274940/pexels-photo-274940.jpeg",
  wikiUrl: "https://en.wikipedia.org/wiki/Agn%C3%A8s_Varda",
  strengths: [
    "柔軟な発想でジャンルや形式を横断する創造性",
    "被写体との信頼関係を築く共感力",
    "少人数クルーでも高い作品完成度を実現するフットワーク"
  ],
  weaknesses: [
    "アイデアが広がりすぎてテーマが散漫になりがち",
    "制作管理よりも創作衝動を優先し予算超過の恐れ"
  ],
  actionSteps: [
    "信頼できるプロデューサーと連携し資金計画を可視化",
    "定期的に作品テーマを言語化して方向性をブレ防止",
    "フィードバック上映を行い客観的視点を取り入れる"
  ]
}
];