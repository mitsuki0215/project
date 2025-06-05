import { Question, Result } from './types';

export const questions: { [key: string]: Question[] } = {
  scientist: [
  /* Q1 : E / I */
  {
    id: 1,
    text: "あなたは画期的なアイデアを思いついた時、最初に何をしますか？",
    choices: [
      { id: "s1a", text: "すぐに研究仲間に共有し議論をする", type: "E" },
      { id: "s1b", text: "口に出しながらアイデアをブラッシュアップする",          type: "E" },
      { id: "s1c", text: "静かな場所にこもり、とりあえず図や式を描いてみる",      type: "I" },
      { id: "s1d", text: "ひとまず頭の中でモデルを組み立て、数日寝かせてから共有する",       type: "I" }
    ]
  },
  /* Q2 : S / N */
  {
    id: 2,
    text: "事実を裏付ける材料を探すとき、どの方法がいいと思いますか？",
    choices: [
      { id: "s2a", text: "実験の数値データをまず信頼する", type: "S" },
      { id: "s2b", text: "肉眼で確かめた現象を丹念に記録する",       type: "S" },
      { id: "s2c", text: "数式や理論モデルから可能性を広げて考える",    type: "N" },
      { id: "s2d", text: "一見バラバラな数値の中から相関や法則性を見いだす",       type: "N" }
    ]
  },
  /* Q3 : T / F */
  {
    id: 3,
    text: "２つの仮説を比べるとき、まずチェックするのはどこですか？",
    choices: [
      { id: "s3a", text: "理論が一貫していて矛盾がないか",  type: "T" },
      { id: "s3b", text: "テストしても毎回同じ結果になるか",        type: "T" },
      { id: "s3c", text: "人や環境の役に立つか", type: "F" },
      { id: "s3d", text: "現状の生態系に悪影響が出ないか",           type: "F" }
    ]
  },
  /* Q4 : J / P */
  {
    id: 4,
    text: "研究の状況が一変した時、あなたはどう対応しますか？",
    choices: [
      { id: "s4a", text: "すぐ新しい工程表を作り、決めた順序で進める", type: "J" },
      { id: "s4b", text: "マイルストーンを設定して立て直す",            type: "J" },
      { id: "s4c", text: "状況に合わせてその都度、柔軟にやり方を変える",      type: "P" },
      { id: "s4d", text: "考えるより先に動き、臨機応変に方向転換する",      type: "P" }
    ]
  }
],
  entrepreneur: [
  /* Q1 : E / I */
  {
    id: 1,
    text: "新たなビジネスアイデアが浮かんだ時、あなたはまず何をしますか？",
    choices: [
      { id: "e1a", text: "共に立ち上げたい相手に電話して、ブレインストーミングをする",      type: "E" },
      { id: "e1b", text: "オンラインで公開して、協力したい人を募りつつ意見を聞く",    type: "E" },
      { id: "e1c", text: "まず自分用メモに書き出し、じっくり肉付けする",      type: "I" },
      { id: "e1d", text: "アイデアを一晩寝かせてから、人に共有する",       type: "I" }
    ]
  },
  /* Q2 : S / N */
  {
    id: 2,
    text: "市場調査をするとき、どんな調査方法が良いと思いますか？",
    choices: [
      { id: "e2a", text: "ユーザーに直接ヒアリングし、実際の利用データを見る",         type: "S" },
      { id: "e2b", text: "競合分析と成功事例を徹底的に調べて、ギャップを洗い出す",type: "S" },
      { id: "e2c", text: "資料を読み、〇〇年後に伸びる需要を推測する",   type: "N" },
      { id: "e2d", text: "ニュースやSNSの小さな兆しを集め、手つかずのニッチを探す", type: "N" }
    ]
  },
  /* Q3 : T / F */
  {
    id: 3,
    text: "２つの製品（サービス）の「売り」で迷ったとき、決め手になるのは？",
    choices: [
      { id: "e3a", text: "想定ROIと利用者が増えても対応できるか",           type: "T" },
      { id: "e3b", text: "データに基づくA/Bテスト結果",            type: "T" },
      { id: "e3c", text: "ユーザーの生活を良くする効果",         type: "F" },
      { id: "e3d", text: "会社のミッション・価値観との一致", type: "F" }
    ]
  },
  /* Q4 : J / P */
  {
    id: 4,
    text: "急成長中のスタートアップ、あなたならどう舵を取る？",
    choices: [
      { id: "e4a", text: "4半期ごとのOKRを立て、ロードマップに忠実に進む",     type: "J" },
      { id: "e4b", text: "担当や手順、チェック方法をくっきり決める",   type: "J" },
      { id: "e4c", text: "ざっくり方針だけ立て、データが出たらすぐ方向転換",type: "P" },
      { id: "e4d", text: "まずやってみて、気づきをもとに素早く改良する",  type: "P" }
    ]
  }
],
  designer: [
  /* Q1 : E / I */
  {
    id: 1,
    text: "新しいデザインプロジェクトの第一歩は？",
    choices: [
      { id: "d1a", text: "共有ツールを開き、その場でみんなとアイデア出し",           type: "E" },
      { id: "d1b", text: "関係者をさっと集め、短いワークショップを開く",              type: "E" },
      { id: "d1c", text: "まず一人でラフスケッチしてイメージを固める",       type: "I" },
      { id: "d1d", text: "ムードボードを作成したのち、みんなと共有する",   type: "I" }
    ]
  },
  /* Q2 : S / N */
  {
    id: 2,
    text: "いちばんクリエイティブな発想をかき立ててくれるのはどれ？",
    choices: [
      { id: "d2a", text: "ユーザーテストで聞いた“生の声”",        type: "S" },
      { id: "d2b", text: "今どきのアプリやサイトのデザイン例ク",    type: "S" },
      { id: "d2c", text: "抽象アートや他分野のアイデア", type: "N" },
      { id: "d2d", text: "未来技術や『もしもこうだったら』という想像",       type: "N" }
    ]
  },
  /* Q3 : T / F */
  {
    id: 3,
    text: "２つのカラーパレットで迷ったときの決め手は？",
    choices: [
      { id: "d3a", text: "コントラストやアクセシビリティなど、数値で測れる基準", type: "T" },
      { id: "d3b", text: "ユーザーテストで一番高評価だった案",                 type: "T" },
      { id: "d3c", text: "色が生む感情とストーリー",           type: "F" },
      { id: "d3d", text: "ひと目でユーザーが受ける印象",        type: "F" }
    ]
  },
  /* Q4 : J / P */
  {
    id: 4,
    text: "締め切りが迫ってきたとき、どんな進め方をする？",
    choices: [
      { id: "d4a", text: "レイアウトを早めに確定し、チェックリスト通り進める",      type: "J" },
      { id: "d4b", text: "デザインルールを厳守して、後から崩れないよう先に形を固める",type: "J" },
      { id: "d4c", text: "ギリギリまで試行錯誤を続けて、最良の案を探し続ける",type: "P" },
      { id: "d4d", text: "締め切り間際のひらめきや微調整も楽しむ",      type: "P" }
    ]
  }
],
  teacher: [
  /* Q1 : E / I */
  {
    id: 1,
    text: "新学期の朝、クラスを持った時まずどんな空気をつくる？",
    choices: [
      { id: "t1a", text: "元気一杯なアイスブレイクで一気に場を温める！", type: "E" },
      { id: "t1b", text: "ワイワイ全員参加のフリートークを回していく", type: "E" },
      { id: "t1c", text: "生徒に自己紹介をさせ、その様子を見守る", type: "I" },
      { id: "t1d", text: "自分の落ち着いた自己紹介からスタート",  type: "I" }
    ]
  },
  /* Q2 : S / N */
  {
    id: 2,
    text: "テストを作るとき、何をいちばん大事にする？",
    choices: [
      { id: "t2a", text: "過去問や授業内容をベースに、レベルを段階的に上げる", type: "S" },
      { id: "t2b", text: "日常シーンを再現した実践型の応用問題にする",  type: "S" },
      { id: "t2c", text: "授業内容を軸にしつつ、関連トピックへ発想力を鍛えられるようにする",        type: "N" },
      { id: "t2d", text: "「それ、ホントに正解？」と常識を覆す思考トラップで揺さぶる", type: "N" }
    ]
  },
  /* Q3 : T / F */
  {
    id: 3,
    text: "学生が理由を述べて課題を遅れて提出したとき、あなたはどうする？",
    choices: [
      { id: "t3a", text: "公平を保つためシラバス通りに減点", type: "T" },
      { id: "t3b", text: "基準を明確にした追課題を用意", type: "T" },
      { id: "t3c", text: "事情を聞き、期限を思いやりを持って調整", type: "F" },
      { id: "t3d", text: "いま取り組める別の課題にしっかり取り組むよう伝える", type: "F" }
    ]
  },
  /* Q4 : J / P */
  {
    id: 4,
    text: "もし学期途中で期末考査が１週前倒しになり、授業数が不足しそうだと分かったらどうする？",
    choices: [
      { id: "t4a", text: "すぐにシラバスを改訂し、短縮版の日程表を学生と教師に配布する", type: "J" },
      { id: "t4b", text: "残り授業を単元ごとに再配置したガントチャートを作り、各回の到達目標を明示する",        type: "J" },
      { id: "t4c", text: "学生の理解度を見ながら要点を優先し、授業ごとに内容を微調整していく",  type: "P" },
      { id: "t4d", text: "週ごとに新しいアクティビティと自己評価を試して柔軟に補う", type: "P" }
    ]
  }
],
  doctor: [
  /* Q1 : E / I */
  {
    id: 1,
    text: "あなたが医者になったら、どんな診察スタイルをとる？",
    choices: [
      { id: "m1a", text: "まずは世間話や健康習慣の話題で緊張をほぐし、診療の本題へ誘導する", type: "E" },
      { id: "m1b", text: "電子カルテを共有モニターに映し、患者さんと一緒に情報を確認しながら進める", type: "E" },
      { id: "m1c", text: "事前にカルテと画像を読み込み、要点を整理してから静かに質問を始める",  type: "I" },
      { id: "m1d", text: "チェックリストを手元に置き、短い質問を重ねて症状を体系的に絞り込む", type: "I" }
    ]
  },
  /* Q2 : S / N */
  {
    id: 2,
    text: "診察室に患者さんが入ってきた瞬間、まず注目するのは？",
    choices: [
      { id: "m2a", text: "呼吸数・皮膚色・歩き方など客観的バイタルサイン",      type: "S" },
      { id: "m2b", text: "問診票に書かれたキーワードの有無",     type: "S" },
      { id: "m2c", text: "症状の組み合わせから“隠れた共通メカニズム”を連想",type: "N" },
      { id: "m2d", text: "患者さんの話し方・表情から潜在的ストーリーを推測",   type: "N" }
    ]
  },
  /* Q3 : T / F */
  {
    id: 3,
    text: "治療法を提案するとき、あなたが強調するのは？",
    choices: [
      { id: "m3a", text: "エビデンスに基づく統計とリスク・ベネフィット", type: "T" },
      { id: "m3b", text: "診療ガイドラインと論理的根拠",       type: "T" },
      { id: "m3c", text: "各選択肢が患者さんの価値観にどう合うか", type: "F" },
      { id: "m3d", text: "心のケアや生活の質への影響",    type: "F" }
    ]
  },
  /* Q4 : J / P */
  {
    id: 4,
    text: "患者さんの状態が急変し、治療計画を見直す必要が出たとき、あなたはどうしますか？",
    choices: [
      { id: "m4a", text: "まず緊急対応チームを招集し、変更した治療プランとタイムラインを即時に会議する", type: "J" },
      { id: "m4b", text: "当者・手技・投薬スケジュールをチェックリスト化して共有する",   type: "J" },
      { id: "m4c", text: "検査結果が出るたびに複数案を比べながらプランを更新する",     type: "P" },
      { id: "m4d", text: "患者さんのフィードバックを受け取りつつ状況に合わせて更新する", type: "P" }
    ]
  }
],
  engineer: [
  /* Q1 : E / I */
  {
    id: 1,
    text: "プロジェクトキックオフ時、あなたがまず取る行動はどれ？",
    choices: [
      { id: "en1a", text: "ホワイトボード等のツールを使用して、ブレインストーミングをチームでする", type: "E" },
      { id: "en1b", text: "みんなで画面を囲んでワイワイ実装をする", type: "E" },
      { id: "en1c", text: "まず一人でプロトタイプを作り、形にしてから共有する",  type: "I" },
      { id: "en1d", text: "静かに資料を読み漁り、課題をマインドマップ化", type: "I" }
    ]
  },
  /* Q2 : S / N */
  {
    id: 2,
    text: "アーキテクチャを比較するとき、重要視するには？",
    choices: [
      { id: "en2a", text: "数字で証明済み！鉄板ベンチマーク＋王道パターン", type: "S" },
      { id: "en2b", text: "仕様書とエッジケースを根こそぎ潰す“抜け漏れゼロ”リスト",  type: "S" },
      { id: "en2c", text: "変化ウェルカム！未知を呑み込むフューチャープルーフ設計", type: "N" },
      { id: "en2d", text: "常識をぶち破るクリエイティブジャンプで現状打破案",    type: "N" }
    ]
  },
  /* Q3 : T / F */
  {
    id: 3,
    text: "チームメイトがリスクの高いリファクタリングを提案してきた。判断基準として最優先するのはどれ？",
    choices: [
      { id: "en3a", text: "パフォーマンス指標やアルゴリズム効率", type: "T" },
      { id: "en3b", text: "論理的一貫性と技術的負債の削減",  type: "T" },
      { id: "en3c", text: "開発者の士気とユーザー体験へのインパクト",     type: "F" },
      { id: "en3d", text: "コラボレーションやチーム成長を促すかどうか", type: "F" }
    ]
  },
  /* Q4 : J / P */
  {
    id: 4,
    text: "スプリント途中で要件が大幅変更。あなたはどう動く？",
    choices: [
      { id: "en4a", text: "新しいタスクを決めてスケジュールを組み直す", type: "J" },
      { id: "en4b", text: "すぐに受け入れ条件を書き出して明確化する",     type: "J" },
      { id: "en4c", text: "選択肢を残しつつ短期で試作をたくさん作る",   type: "P" },
      { id: "en4d", text: "複数のプロトタイプを走らせ、データを見て決める",type: "P" }
    ]
  }
],
  artist: [
  /* Q1 : E / I */
  {
    id: 1,
    text: "アイデアが閃いた直後、あなたはどんな行動を取る？",
    choices: [
      { id: "a1a", text: "友人や仲間のアーティストに連絡し、一緒に演奏する", type: "E" },
      { id: "a1b", text: "ラフスケッチをSNSに投稿し、すぐフィードバックを集める",  type: "E" },
      { id: "a1c", text: "ひたすら書き殴り、形より量でアイデアを出す",   type: "I" },
      { id: "a1d", text: "情報を集めて構造化し、完成イメージが見えるまで整理する", type: "I" }
    ]
  },
  /* Q2 : S / N */
  {
    id: 2,
    text: "インスピレーションの源としてもっとも強いのはどれ？？",
    choices: [
      { id: "a2a", text: "現実世界の質感・色彩・日常の風景", type: "S" },
      { id: "a2b", text: "古典的技法や美術史のリファレンス",   type: "S" },
      { id: "a2c", text: "象徴的イメージや抽象的コンセプト",           type: "N" },
      { id: "a2d", text: "現実を超えた夢幻的アイデア",        type: "N" }
    ]
  },
  /* Q3 : T / F */
  {
    id: 3,
    text: "何を基準に作品が完成したと判断しますか？",
    choices: [
      { id: "a3a", text: "構図のバランスと技術的な精度",   type: "T" },
      { id: "a3b", text: "黄金比など理論ルールへの合致", type: "T" },
      { id: "a3c", text: "狙った感情がしっかり伝わっているか",        type: "F" },
      { id: "a3d", text: "個人的または社会的な物語が語ることができてるか",          type: "F" }
    ]
  },
  /* Q4 : J / P */
  {
    id: 4,
    text: "展示会の締め切りが迫ってきたとき、あなたはどのように進める？",
    choices: [
      { id: "a4a", text: "厳格なスケジュールを組み、マイルストーンを死守する",  type: "J" },
      { id: "a4b", text: "各要素を完全に仕上げてから次の工程へ進む",   type: "J" },
      { id: "a4c", text: "締切ギリギリまで施策を続け、その都度調整する", type: "P" },
      { id: "a4d", text: "設営当日に起こる即興の変化を楽しむ", type: "P" }
    ]
  }
],
  journalist: [
  /* Q1 : E / I */
  {
    id: 1,
    text: "あなたの元へ特ダネの情報が迷い込んだ！あなたが真っ先にすることは？",
    choices: [
      { id: "j1a", text: "関係者に即電話してコメントをもらう",        type: "E" },
      { id: "j1b", text: "現場へ飛び、目撃者に直接インタビューする",        type: "E" },
      { id: "j1c", text: "まず一人で資料やデータを掘り下げ、情報を集め尽くす", type: "I" },
      { id: "j1d", text: "まずは原稿の骨組みと質問表を作り込む",type: "I" }
    ]
  },
  /* Q2 : S / N */
  {
    id: 2,
    text: "あなたの情報収集スタイルはどれになりそう？",
    choices: [
      { id: "j2a", text: "公的文書や統計を照合して裏付けを取る",       type: "S" },
      { id: "j2b", text: "公式発言や具体的事実を引用する",    type: "S" },
      { id: "j2c", text: "バラバラの手がかりをつなげてパターンを見抜く",    type: "N" },
      { id: "j2d", text: "自分の仮説を軸に壮大なストーリーを組み立てる",  type: "N" }
    ]
  },
  /* Q3 : T / F */
  {
    id: 3,
    text: "記事の“どの視点で攻めるか”を決めるとき、あなたが一番重視するのは？",
    choices: [
      { id: "j3a", text: "確かな証拠で支える論理的な構成",     type: "T" },
      { id: "j3b", text: "主張を裏付けるデータ図やグラフ",           type: "T" },
      { id: "j3c", text: "心に響く当事者のストーリー",         type: "F" },
      { id: "j3d", text: "社会に与えるインパクトの大きさ",        type: "F" }
    ]
  },
  /* Q4 : J / P */
  {
    id: 4,
    text: "締め切り直前に新しい情報が飛び込んできた！あなたはどうする？",
    choices: [
      { id: "j4a", text: "書けた段落から保存して先に送稿する",       type: "J" },
      { id: "j4b", text: "厳密なアウトラインと時間表に沿って進める",            type: "J" },
      { id: "j4c", text: "新情報が入るたび原稿を微調整し続ける",        type: "P" },
      { id: "j4d", text: "締切ギリギリまで待ち、必要なら”全面”を一気に書き直す",type: "P" }
    ]
  }
],
  lawyer: [
  /* Q1 : E / I */
  {
    id: 1,
    text: "あなたへ新しい案件の依頼が来た！まず何をする？",
    choices: [
      { id: "l1a", text: "チームメンバーを集めて作戦会議", type: "E" },
      { id: "l1b", text: "重要証人に即インタビューしに行く",     type: "E" },
      { id: "l1c", text: "まず一人で資料をじっくり読み込む",type: "I" },
      { id: "l1d", text: "一人で初期弁論を下書きする", type: "I" }
    ]
  },
  /* Q2 : S / N */
  {
    id: 2,
    text: "主法律的主張を組み立てるとき、まず拠り所にするのはどれ？",
    choices: [
      { id: "l2a", text: "判例や条文など「決まったルール」",                  type: "S" },
      { id: "l2b", text: "時系列と物的証拠など「動かぬ事実」",            type: "S" },
      { id: "l2c", text: "従来を覆す「まったく新しい法解釈」",          type: "N" },
      { id: "l2d", text: "未来の判例になるかもしれない「大きな理念・ビジョン」", type: "N" }
    ]
  },
  /* Q3 : T / F */
  {
    id: 3,
    text: "法廷で陪審員に説明する際、まず最初に採るべき説得スタイルはどれ？",
    choices: [
      { id: "l3a", text: "論点を順に検証して反証するロジカルアプローチ",      type: "T" },
      { id: "l3b", text: "データ解析や図表を駆使した証拠提示",      type: "T" },
      { id: "l3c", text: "依頼人の人間味を引き立てるストーリーテリング",type: "F" },
      { id: "l3d", text: "共通の価値観や公平さへの訴え",   type: "F" }
    ]
  },
  /* Q4 : J / P */
  {
    id: 4,
    text: "もし公判中に新たな証拠が出てきたら、あなたはどう対応する？",
    choices: [
      { id: "l4a", text: "直ちに書面を修正し、戦略を確定して固める", type: "J" },
      { id: "l4b", text: "裁判所の手続き規則を再確認し、必要な申立てを即座に行う", type: "J" },
      { id: "l4c", text: "状況に応じて議論を柔軟に組み替える",     type: "P" },
      { id: "l4d", text: "質問を即興で調整し、流れに乗る", type: "P" }
    ]
  }
],
  investor: [
  /* Q1 : E / I */
  {
    id: 1,
    text: "投資価値のある企業を見つけた！あなたはまずどんな行動を取る？",
    choices: [
      { id: "i1a", text: "投資コミュニティで共有し、公開ディスカッションを主導する", type: "E" },
      { id: "i1b", text: "マーケットが動いているうちに同僚へ即電話し、二人で戦略を練る",        type: "E" },
      { id: "i1c", text: "誰にも言わずに、一人で徹底リサーチ",           type: "I" },
      { id: "i1d", text: "自作モデルでバックテストを行う",       type: "I" }
    ]
  },
  /* Q2 : S / N */
  {
    id: 2,
    text: "投資をするかどうか、最も重要視する決め手はどれ？",
    choices: [
      { id: "i2a", text: "監査済み財務諸表と最新KPI",            type: "S" },
      { id: "i2b", text: "過去の価格推移などハードデータ",       type: "S" },
      { id: "i2c", text: "5年以内に業界構造を一変させる爆発力のある製品・サービス", type: "N" },
      { id: "i2d", text: "業界の常識を塗り変えそうな巨大トレンド",    type: "N" }
    ]
  },
  /* Q3 : T / F */
  {
    id: 3,
    text: "2択の資産で行き詰まったとき、判断材料にするのは？",
    choices: [
      { id: "i3a", text: "リスクを考慮した儲けの度合い（例：シャープレシオ）", type: "T" },
      { id: "i3b", text: "Excelで条件を変えながら行う綿密なシミュレーション",      type: "T" },
      { id: "i3c", text: "企業ミッションや社会的インパクト",   type: "F" },
      { id: "i3d", text: "経営陣の価値観や信念", type: "F" }
    ]
  },
  /* Q4 : J / P */
  {
    id: 4,
    text: "おっと、市場が急落してしまった！あなたはどう動く？",
    choices: [
      { id: "i4a", text: "決めていた資産バランスにきっちり戻す",     type: "J" },
      { id: "i4b", text: "損切りラインを守って静かに撤退する",type: "J" },
      { id: "i4c", text: "チャンスと見て、安くなった株をすばやく拾う",type: "P" },
      { id: "i4d", text: "その場のニュースを見ながら臨機応変に売買する", type: "P" }
    ]
  }
],
  professor: [
  /* Q1 : E / I */
  {
    id: 1,
    text: "あなたに共同研究の誘いがきた！魅力的に感じる研究方法は？",
    choices: [
      { id: "p1a", text: "一緒にブレインストーミングをし、そのまま共著で執筆", type: "E" },
      { id: "p1b", text: "公開セミナーを開き議論を盛り上げる", type: "E" },
      { id: "p1c", text: "まずは一人で理論を練り上げてから共有",  type: "I" },
      { id: "p1d", text: "証明を独力で完成させ、プレプリントを回す", type: "I" }
    ]
  },
  /* Q2 : S / N */
  {
    id: 2,
    text: "研究計画で特にワクワクするのは？",
    choices: [
      { id: "p2a", text: "緻密なデータ収集と再現実験",        type: "S" },
      { id: "p2b", text: "資料庫を漁り、実際の歴史データを集める",     type: "S" },
      { id: "p2c", text: "理論を発展させるための抽象モデルを組み立てる",      type: "N" },
      { id: "p2d", text: "まったく新しい枠組みを考え、未知の可能性を探る.", type: "N" }
    ]
  },
  /* Q3 : T / F */
  {
    id: 3,
    text: "学生評価において、あなたが大切だと思う基準は？",
    choices: [
      { id: "p3a", text: "細かな採点基準と統計平均", type: "T" },
      { id: "p3b", text: "論証の厳密さと論理的整合性",     type: "T" },
      { id: "p3c", text: "自信と知的好奇心の成長度",   type: "F" },
      { id: "p3d", text: "授業への参加度と仲間との協働",       type: "F" }
    ]
  },
  /* Q4 : J / P */
  {
    id: 4,
    text: "学期途中でシラバス改訂が必要になってしまった。あなたは最初にどの行動を取る？",
    choices: [
      { id: "p4a", text: "新しいスケジュールと締切を即公開する", type: "J" },
      { id: "p4b", text: "明確なマイルストーンを示し遵守させる",      type: "J" },
      { id: "p4c", text: "学生の好奇心に合わせてスケジュールをゆるく設定する",   type: "P" },
      { id: "p4d", text: "クラスの流れを見て毎週内容を微調整する",          type: "P" }
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