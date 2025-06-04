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