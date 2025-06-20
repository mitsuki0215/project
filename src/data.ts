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
  name: "アルベルト・アインシュタイン",
  occupation: "scientist",
  mbti: "INTP",
  description:
    "思考実験で時空の本質を解き明かした理論物理学の革命児。固定概念に縛られず“もしこうだったら？”を問い続け、直観と数式で宇宙像を書き換えました。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Albert_Einstein_1947.jpg/500px-Albert_Einstein_1947.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Albert_Einstein",
  strengths: [
    "抽象概念を操る卓越した論理思考",
    "大胆な仮説を生む想像力と好奇心",
    "複雑な理論を平易に語るコミュニケーション力"
  ],
  weaknesses: [
    "日常業務や細部の管理を後回しにしがち",
    "他者の意見より自分の直感を優先し協調性が薄れることがある"
  ],
  actionSteps: [
    "実験系研究者と早期に連携し仮説検証サイクルを短縮",
    "研究ノートとタスクを定期レビューし抜け漏れを防止",
    "学際セミナーで視点を広げ、新たな数理モデルの着想を得る"
  ]
},
{
  name: "マリー・キュリー",
  occupation: "scientist",
  mbti: "ISTJ",
  description:
    "放射能研究を切り拓いた“実験の職人”。慎重な手技と膨大なデータ収集で未知の元素を同定し、科学と医療に計り知れない貢献を残しました。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/500px-Marie_Curie_c._1920s.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Marie_Curie",
  strengths: [
    "再現性を極める几帳面さと計量精度",
    "危険を恐れぬ献身性と持続力",
    "成果を社会利用へ橋渡しする責任感"
  ],
  weaknesses: [
    "完璧を期すあまり作業ペースが遅くなる",
    "自己犠牲的に働き健康管理を後回しにしがち"
  ],
  actionSteps: [
    "作業プロトコルを標準化しチームへ分担・委譲",
    "定期的な休養と安全教育で長期的パフォーマンスを維持",
    "臨床応用・産業応用の専門家と協働し成果の社会実装を加速"
  ]
},
{
  name: "リチャード・ファインマン",
  occupation: "scientist",
  mbti: "ENTP",
  description:
    "量子力学を“語り・遊ぶ”天才講義師。難解な現象をユーモアと比喩で紐解き、新しい視点を提示することで科学の魅力を広く伝えました。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Richard_Feynman_Nobel.jpg/500px-Richard_Feynman_Nobel.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Richard_Feynman",
  strengths: [
    "複雑な概念を直観的にモデル化する発想力",
    "問いを投げかけ議論を活性化するコミュ力",
    "分野横断でアイデアを掛け合わせる創造性"
  ],
  weaknesses: [
    "興味が移りやすく継続的な文書化を怠りがち",
    "形式張った手続きや書類業務を後回しにする傾向"
  ],
  actionSteps: [
    "研究ログとコードをリポジトリ化し共有知にする",
    "長期目標をマイルストーン化し興味の分散を抑制",
    "講演や執筆で外部フィードバックを得て理論を磨く"
  ]
},
{
  name: "ジェーン・グドール",
  occupation: "scientist",
  mbti: "INFJ",
  description:
    "チンパンジーの生態観察から“共感する科学”を切り開いたフィールド研究者。動物と人間社会を結び、保全活動へとつなげる使命感が光ります。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Jane-goodall_%28cropped%29.jpg/500px-Jane-goodall_%28cropped%29.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Jane_Goodall",
  strengths: [
    "長期観察で微細な行動変化を捉える洞察力",
    "被写体・コミュニティと信頼関係を築く共感力",
    "科学を物語として届け行動変革を促す発信力"
  ],
  weaknesses: [
    "定量データより質的記述を重視し統計的裏付けが薄くなることがある",
    "感情移入が強く客観性を保つ負荷が高い"
  ],
  actionSteps: [
    "統計解析やAI画像解析など定量手法を取り入れ説得力を強化",
    "共同研究で多角的視点を得てバイアスを軽減",
    "政策提言・教育プログラムと連携し保全インパクトを拡大"
  ]
},

  // Entrepreneurs
  {
  name: "スティーブ・ジョブズ",
  occupation: "entrepreneur",
  mbti: "ENTJ",
  description:
    "デザインとテクノロジーを融合し “人々の生活を一変させる製品” を次々と世に送り出した〈完璧主義のカリスマ〉。卓越した審美眼とプレゼン力で、まだ見ぬ未来像を大衆に提示しました。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/500px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Steve_Jobs",
  strengths: [
    "ビジョンを言語化しチームを鼓舞するリーダーシップ",
    "妥協を許さない品質基準とUXへのこだわり",
    "市場ニーズを直感的に捉える洞察力"
  ],
  weaknesses: [
    "完璧主義ゆえ周囲に厳しく摩擦を生むことがある",
    "感情起伏が激しく組織運営が不安定になりがち"
  ],
  actionSteps: [
    "エンパシーを鍛え、メンバーの動機や課題を継続的にヒアリングする",
    "迅速なユーザーテストで“80% の完成度”を許容し学習サイクルを短縮",
    "環境・社会インパクトを評価基準に加え、中長期のブランド価値を最大化"
  ]
},
{
  name: "イーロン・マスク",
  occupation: "entrepreneur",
  mbti: "INTJ",
  description:
    "電気自動車・宇宙開発・AI など複数領域で常識を覆す〈破壊的イノベーター〉。長期的ビジョンと大胆なリスクテイクで、人類規模の課題解決に挑み続けます。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/The_White_House_-_54409525537_%28cropped%29.jpg/500px-The_White_House_-_54409525537_%28cropped%29.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Elon_Musk",
  strengths: [
    "数十年先を見据えたシステム思考と戦略立案力",
    "高度な技術理解と大胆な実行スピード",
    "複数企業を統括しシナジーを生むマルチタスク能力"
  ],
  weaknesses: [
    "タイムラインが楽観的で計画遅延を招きやすい",
    "詳細に介入しすぎマイクロマネジメント傾向がある"
  ],
  actionSteps: [
    "現場リーダーへ権限委譲し自律的な問題解決を促進",
    "社内外のコミュニケーションチームを整備し情報伝達を円滑化",
    "実現可能なマイルストーンを設定し投資家・社員の信頼を強化"
  ]
},
{
  name: "オプラ・ウィンフリー",
  occupation: "entrepreneur",
  mbti: "ENFJ",
  description:
    "温かな共感力と鋭い洞察で視聴者を魅了し、メディア帝国を築いた〈ストーリーテリングの女王〉。人の潜在能力を引き出し、社会課題にも光を当てる影響力を持ちます。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Oprah_Winfrey_2016.jpg/500px-Oprah_Winfrey_2016.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Oprah_Winfrey",
  strengths: [
    "高い感情知能で信頼と共感を醸成",
    "物語を通じブランド価値を高めるストーリーテラー",
    "コミュニティを巻き込み社会的インパクトを拡大"
  ],
  weaknesses: [
    "人情に流され意思決定が遅れることがある",
    "セルフブランディングの負荷でリソースが分散しやすい"
  ],
  actionSteps: [
    "データドリブン指標を導入し感情と客観のバランスを取る",
    "役割と境界線を明確にし経営判断のスピードを保つ",
    "複数収益源を設計しリスクを分散するポートフォリオ戦略を採用"
  ]
},
{
  name: "ウォルト・ディズニー",
  occupation: "entrepreneur",
  mbti: "ENFP",
  description:
    "物語・アニメーション・テーマパークを融合し“体験価値”を創造した〈想像力の巨匠〉。夢と魔法をビジネスへ昇華し、人々の心に残るブランドを築きました。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/50/Walt_Disney_1946_%28cropped2%29.JPG",
  wikiUrl: "https://en.wikipedia.org/wiki/Walt_Disney",
  strengths: [
    "豊かな想像力で独自の世界観を構築",
    "チームを鼓舞し共通の夢に向かわせるビジョナリー力",
    "体験全体を設計するクロスメディア発想"
  ],
  weaknesses: [
    "収益管理より創造性を優先しコスト超過の恐れ",
    "アイデアが多岐にわたり焦点を失うことがある"
  ],
  actionSteps: [
    "財務・運営の専門家とパートナーを組み経営基盤を強化",
    "アイデア評価フレームを導入し集中すべきプロジェクトを選別",
    "ロードマップを明文化し短期・中期・長期の成果指標を設置"
  ]
},

  // Designers
{
  name: "ジョナサン・アイブ",
  occupation: "designer",
  mbti: "INTJ",
  description:
    "“形は体験に奉仕する”を体現し、徹底したミニマリズムで Apple 製品を象徴へと昇華させた〈寡黙なビジョナリー〉。機能と感情のバランスを緻密に設計し、全工程を俯瞰する統率力が光ります。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Jonathan_Ive_%28OTRS%29.jpg/500px-Jonathan_Ive_%28OTRS%29.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Jonathan_Ive",
  strengths: [
    "ユーザー体験を核に据えたシステム思考",
    "細部まで徹底する審美眼と検証プロセス",
    "エンジニア・経営陣と橋渡しする戦略性"
  ],
  weaknesses: [
    "完璧主義が開発サイクルを延長させがち",
    "意匠優先でコスト感覚を忘れることがある"
  ],
  actionSteps: [
    "早期プロトタイプでフィードバックループを短縮",
    "コスト・環境負荷の指標を意思決定フレームに追加",
    "若手デザイナーへレビュー権限を委譲し視点を多角化"
  ]
},
{
  name: "レイ・イームズ",
  occupation: "designer",
  mbti: "ENFP",
  description:
    "家具・映像・グラフィックを横断し、人間の好奇心をかき立てた〈ミッドセンチュリーの発明家〉。遊び心と実験精神で“デザインは日常を楽しくする”ことを実証しました。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/82/Photo_of_Ray_Eames.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Ray_Eames",
  strengths: [
    "分野を越境して着想を拡げる発想力",
    "共創ワークショップでチームを鼓舞するコミュ力",
    "材料や技法を試しながら形にするプロトタイピング速度"
  ],
  weaknesses: [
    "アイデアが拡散しコンセプトが散漫になることがある",
    "スケジュール管理より探究を優先し納期が厳しくなる"
  ],
  actionSteps: [
    "最終アウトカムを一句で表す“コアメッセージ”を設定",
    "時限付きスプリントで実験と収束をリズム化",
    "ビジネス側パートナーと早期に仕様・予算を共有"
  ]
},
{
  name: "ディーター・ラムス",
  occupation: "designer",
  mbti: "ISTJ",
  description:
    "“Less, but better” を信条に余計な装飾をそぎ落とし、機能美を極めた〈静かな職人〉。10 原則に基づくタイムレスなプロダクトは、今なお UX の礎となっています。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Designer-Dieter_Rams.jpg/500px-Designer-Dieter_Rams.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Dieter_Rams",
  strengths: [
    "機能要件を優先し一貫性を保つ判断力",
    "長期使用を想定した耐久性・修理性への配慮",
    "デザインガイドラインを体系化するドキュメント力"
  ],
  weaknesses: [
    "大胆なビジュアル表現を避けイノベーション機会を逃す",
    "ユーザーテストより理論・原則を重視しがち"
  ],
  actionSteps: [
    "エモーショナル価値の測定指標を試験導入",
    "ラピッドプロトタイプで市場のリアルな反応を検証",
    "サステナビリティ要件を10 原則に統合しアップデート"
  ]
},
{
  name: "フィリップ・スタルク",
  occupation: "designer",
  mbti: "ENTP",
  description:
    "日用品から宇宙船まで、ユーモアと挑発で“あり得ない”を実現する〈ボーダーレス・クリエイター〉。社会批評とテクノロジーを掛け合わせ、驚きと機能を両立させます。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Phillippe_Starck_2011_%283x4_cropped%29.jpg/500px-Phillippe_Starck_2011_%283x4_cropped%29.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Philippe_Starck",
  strengths: [
    "既成概念を打破するコンセプトメイキング",
    "多様な業界とコラボしアイデアを量産する影響力",
    "ユーザー体験を物語として設計するストーリーテリング"
  ],
  weaknesses: [
    "奇抜さを追求し製造コストや量産性が課題化",
    "意見が鋭く衝突を生みやすいコミュニケーション"
  ],
  actionSteps: [
    "製造パートナーと早期連携し量産の壁を共有",
    "コンセプト段階で KPI を設定しビジネス価値を明確化",
    "フィードバックセッションで多様な視点を受け入れる姿勢を養う"
  ]
},

  // Teachers
  {
  name: "マリア・モンテッソーリ",
  occupation: "teacher",
  mbti: "INFJ",
  description:
    "子どもの〈自己教育力〉を信じ、感覚教具と“整えられた環境”で主体的学びを引き出した〈人間性重視の教育改革者〉。一人ひとりの成長段階を洞察し、静かに伴走する指導スタイルが特徴です。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Maria_Montessori_%28portrait%29.jpg/500px-Maria_Montessori_%28portrait%29.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Maria_Montessori",
  strengths: [
    "観察眼が鋭く個々の発達ニーズを的確に把握できる",
    "教具や空間をデザインし学習を自然に促す構成力",
    "穏やかなカリスマ性で保護者・同僚から信頼を得る"
  ],
  weaknesses: [
    "標準化テストや画一的カリキュラムに反発しがち",
    "理想の環境づくりにこだわり過労・完璧主義に陥る"
  ],
  actionSteps: [
    "ICT教材など新リソースを柔軟に取り入れ探究的学習を拡張",
    "評価制度との折り合いをつけるため成果指標を言語化",
    "チームに権限委譲し自分の創造エネルギーを温存する"
  ]
},
{
  name: "ジョン・デューイ",
  occupation: "teacher",
  mbti: "INTP",
  description:
    "“経験からの学び”を軸に学校を社会の縮図と捉えた〈プラグマティスト教育哲学者〉。問題解決型プロジェクトで思考を鍛え、民主的な教室文化を提唱しました。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/John_Dewey_cph.3a51565.jpg/500px-John_Dewey_cph.3a51565.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/John_Dewey",
  strengths: [
    "理論と実践を往還しカリキュラムを抽象化できる分析力",
    "探究学習を体系立てるデザイン思考",
    "教育政策にも影響を与える論理的発信力"
  ],
  weaknesses: [
    "細かな運営より概念整理を優先し授業進行が散漫になりやすい",
    "試行錯誤を重ねるうちに締切を逃すことがある"
  ],
  actionSteps: [
    "単元ごとに到達目標を数値化しプロジェクト型学習を管理",
    "コラボ型授業で現場の実践者からフィードバックを収集",
    "研究成果を共有し教育コミュニティ全体で検証を進める"
  ]
},
{
  name: "アン・サリヴァン",
  occupation: "teacher",
  mbti: "ENFJ",
  description:
    "ヘレン・ケラーの潜在能力を解放した〈奇跡の教師〉。深い共感と揺るがぬ信念で学習者の心を開き、個別最適なアプローチで自立を支援しました。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/31/AnneSullivanMacy.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Anne_Sullivan",
  strengths: [
    "粘り強い指導とモチベート力で学習者を鼓舞",
    "コミュニケーションの障壁を打破する創意工夫",
    "保護者・支援団体を巻き込む調整力"
  ],
  weaknesses: [
    "生徒への献身が行き過ぎ自己犠牲になりやすい",
    "感情移入が深く客観的評価を後回しにする傾向"
  ],
  actionSteps: [
    "明文化した学習記録で進捗を可視化し客観性を保持",
    "チームティーチングで負担と視点を分散",
    "セルフケアと専門家カウンセリングでメンタルを維持"
  ]
},
{
  name: "ケン・ロビンソン",
  occupation: "teacher",
  mbti: "ENFP",
  description:
    "“学校は創造性を殺していないか？”と問い、教育界に波紋を起こした〈クリエイティブ・カタリスト〉。ユーモアと物語で学びを解放し、多様な才能が輝く場づくりを提唱しました。",
  imageUrl: "https://media.licdn.com/dms/image/v2/D4E22AQFmGRd7zynBGQ/feedshare-shrink_800/B4EZVhXz72H0Ag-/0/1741095397523?e=2147483647&v=beta&t=u_kDelZm34oeyyf9iegJaNtj-PCAv5ocmVkcrKQfcBM",
  wikiUrl: "https://en.wikipedia.org/wiki/Ken_Robinson_(educator)",
  strengths: [
    "インスピレーショナルなスピーチで学習者の情熱を喚起",
    "芸術・STEMを横断しカリキュラムを再構築する発想力",
    "変革を後押しするネットワーキングと影響力"
  ],
  weaknesses: [
    "ビジョンが大きく具体的運用設計が後手に回りがち",
    "規則や評価制度への適応を煩わしく感じる"
  ],
  actionSteps: [
    "アイデアを実現する実行計画と評価フレームを策定",
    "小規模パイロットを行いデータで効果を示す",
    "同じ志を持つ教師コミュニティを育成しムーブメントを拡大"
  ]
},

  // Doctors
  {
  name: "エリザベス・ブラックウェル",
  occupation: "doctor",
  mbti: "ISTJ",
  description:
    "米国初の女性医師として医学の門戸を開いた〈先駆的リーダー〉。公衆衛生の制度化と医学教育の質向上に生涯を捧げ、確固たる倫理観で患者と社会に貢献しました。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Elizabeth_Blackwell.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Elizabeth_Blackwell",
  strengths: [
    "膨大な症例を几帳面に記録・分析するデータ管理力",
    "規範を守り抜く責任感と忍耐力で高い信頼を得る",
    "教育体制や制度を整備するオーガナイズ能力"
  ],
  weaknesses: [
    "新奇な治療法より確立手順を優先し変化に慎重",
    "自己犠牲的に働き続け心身の負荷を抱えやすい"
  ],
  actionSteps: [
    "最新エビデンスを定期レビューし革新的治療も検討する",
    "タスクを委任しセルフケアの時間を確保する",
    "若手医師のメンタリングで知識と価値観を継承する"
  ]
},
{
  name: "ポール・ファーマー",
  occupation: "doctor",
  mbti: "ENFJ",
  description:
    "「誰一人置き去りにしない医療」を掲げ、世界の僻地で包括的ケアを実践した〈グローバル・ヒューマニスト〉。共感力と行動力でコミュニティを巻き込み健康格差に挑んできました。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Paul_Farmer_2011.jpg/500px-Paul_Farmer_2011.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Paul_Farmer",
  strengths: [
    "異文化と協調し信頼関係を築くコミュニケーション力",
    "医療・社会・経済を統合するシステム思考",
    "チームを鼓舞し資金・資源を引き寄せるリーダーシップ"
  ],
  weaknesses: [
    "理想を追い過ぎて資金・時間の制約を超過しがち",
    "対人対応が多く自身の研究時間を確保しにくい"
  ],
  actionSteps: [
    "プロジェクトにKPIを設定しリソース配分を最適化",
    "後進リーダーを育成し運営を分担する",
    "デジタルヘルスツールを導入し現場データを即時共有"
  ]
},
{
  name: "オリバー・サックス",
  occupation: "doctor",
  mbti: "INFP",
  description:
    "患者の物語を丁寧に掬い上げた〈神経学のストーリーテラー〉。臨床と文学を融合し、人間の不思議と尊厳を世に伝えることで医療の奥深さを示しました。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Dr._Oliver_Sacks%2C_Physician%2C_Author.jpg/500px-Dr._Oliver_Sacks%2C_Physician%2C_Author.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Oliver_Sacks",
  strengths: [
    "症例一つひとつに寄り添う深い共感力",
    "複雑な神経症状を物語として分かりやすく伝える表現力",
    "学際的視点で医学と芸術・哲学を結びつける創造性"
  ],
  weaknesses: [
    "感情移入が強く客観的データとのバランスを崩しやすい",
    "研究より執筆を優先し学術的発表が後回しになる傾向"
  ],
  actionSteps: [
    "定量的評価指標を導入し症例記述と統計を両立",
    "共同研究者と論文化を進め臨床知見を共有",
    "自己ケアの時間を確保し感情負荷をコントロールする"
  ]
},
{
  name: "ジョナス・ソーク",
  occupation: "doctor",
  mbti: "INTJ",
  description:
    "不可能と言われたポリオワクチンを開発し世界の公衆衛生を変えた〈戦略的イノベーター〉。緻密な実験計画と社会的使命感で科学を実装しました。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Jonas_Salk_candid.jpg/500px-Jonas_Salk_candid.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Jonas_Salk",
  strengths: [
    "大規模臨床試験を設計・統括する計画力",
    "疾患根絶を目指す長期ビジョンと使命感",
    "研究成果を迅速に社会実装する実行力"
  ],
  weaknesses: [
    "理論検証を優先し臨床現場の声を取りこぼすことがある",
    "細部まで統制したい完璧主義で意思決定が遅延しがち"
  ],
  actionSteps: [
    "現場医師や患者団体と定期ミーティングしニーズを反映",
    "アジャイル研究プロセスを導入しスピードと品質を両立",
    "成果普及のため政策提言や教育活動にも時間を割く"
  ]
},
  // Engineers
  {
  name: "ニコラ・テスラ",
  occupation: "engineer",
  mbti: "INTJ",
  description:
    "交流電力や無線送電など、時代を超えるテクノロジーを生み出した〈孤高の発明家〉。数学的な思考で壮大なビジョンを設計し、完璧を追求する職人気質が光ります。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Tesla_circa_1890.jpeg/500px-Tesla_circa_1890.jpeg",
  wikiUrl: "https://en.wikipedia.org/wiki/Nikola_Tesla",
  strengths: [
    "未来を先読みするシステム設計力と洞察力",
    "複雑理論を具体的装置に落とし込む技術応用力",
    "長時間の集中を維持し細部まで最適化できる探究心"
  ],
  weaknesses: [
    "量産化・資金調達など事業面への関心が薄い",
    "コラボレーションや交渉より技術を優先しがち",
    "自己管理を後回しにし健康を損ねやすい"
  ],
  actionSteps: [
    "早期プロトタイプを公開し投資家やパートナーを巻き込む",
    "仕様・実験結果を文書化し知識共有を強化",
    "ワークライフバランスを意識し定期的にリフレッシュする"
  ]
},
{
  name: "グレース・ホッパー",
  occupation: "engineer",
  mbti: "ENTP",
  description:
    "世界初のコンパイラを生み、誰もがコードを書ける未来を切り開いた〈計算機科学の開拓者〉。既存の枠を疑い、問題をユーモアと行動力で解決します。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Commodore_Grace_M._Hopper%2C_USN_%28covered%29_head_and_shoulders_crop.jpg/960px-Commodore_Grace_M._Hopper%2C_USN_%28covered%29_head_and_shoulders_crop.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Grace_Hopper",
  strengths: [
    "抽象概念をわかりやすい言語・ツールへ翻訳する力",
    "「なぜ？」を問い続け変革を推進するリーダーシップ",
    "障害をチャンスに変える大胆な試行錯誤精神"
  ],
  weaknesses: [
    "興味が多岐にわたりタスクが拡散しやすい",
    "規則や手順を飛ばして周囲を混乱させることがある",
    "細部の詰めが甘く品質リスクを招く場合がある"
  ],
  actionSteps: [
    "週次で優先順位を見直し成果物を小刻みにデリバリー",
    "品質チェックリストを導入しリリース前にギャップを補正",
    "若手や多職種と協働し好奇心を組織学習へ昇華させる"
  ]
},
{
  name: "レオナルド・ダ・ヴィンチ",
  occupation: "engineer",
  mbti: "ENFP",
  description:
    "芸術・解剖・機械工学を横断し未来をスケッチした〈万能の天才〉。好奇心に導かれ、自然の法則を探りながら革新的な機構を次々と着想します。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Francesco_Melzi_-_Portrait_of_Leonardo.png/500px-Francesco_Melzi_-_Portrait_of_Leonardo.png",
  wikiUrl: "https://en.wikipedia.org/wiki/Leonardo_da_Vinci",
  strengths: [
    "分野を越境してアイデアを結び付ける創造的連想力",
    "細密な観察とスケッチで概念を視覚化する力",
    "人文学的視点を技術に取り込みユーザー体験を豊かにする感性"
  ],
  weaknesses: [
    "新構想に惹かれ完成まで至らないプロジェクトが多い",
    "長期的な実装フェーズへの集中が続きにくい",
    "実験コストやスケジュールを見積もるのが苦手"
  ],
  actionSteps: [
    "ゴールとマイルストーンを定義し進捗を可視化",
    "実装フェーズは協力者に委任し自らはアーキテクトに専念",
    "アイデアノートを体系化し再利用・共有できる知識資産にする"
  ]
},
{
  name: "ヘンリー・フォード",
  occupation: "engineer",
  mbti: "ISTJ",
  description:
    "ベルトコンベア方式で大量生産を確立し、社会をモータリゼーションへ導いた〈効率化の達人〉。厳格なプロセス管理と堅実な品質基準が強みです。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Henry_Ford_portrait_1915_original_%28cropped_3x4%29.png/500px-Henry_Ford_portrait_1915_original_%28cropped_3x4%29.png",
  wikiUrl: "https://en.wikipedia.org/wiki/Henry_Ford",
  strengths: [
    "工程を標準化しコストと品質を最適化するシステム思考",
    "データに基づく堅実な意思決定とリスク管理",
    "継続的改善（Kaizen）のマインドで効率を高める実行力"
  ],
  weaknesses: [
    "革新的アイデアより既存プロセスの最適化を優先しがち",
    "変化への抵抗感が強く柔軟性に欠ける場合がある",
    "ヒト・社会・環境など非効率でも重要な要素を軽視しやすい"
  ],
  actionSteps: [
    "デザイン思考やリーンスタートアップを学び革新志向を補完",
    "多様な専門家とワークショップを行い新視点を導入",
    "効率指標に顧客満足度や環境負荷を追加しバランスを取る"
  ]
},

  // Artists
  {
  name: "フィンセント・ファン・ゴッホ",
  occupation: "artist",
  mbti: "INFP",
  description:
    "渦巻く筆致と鮮烈な色彩で内面世界をキャンバスに刻んだ〈魂の画家〉。孤高の感受性と自然への畏敬が、ありふれた風景に壮大なドラマを宿します。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/500px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Vincent_van_Gogh",
  strengths: [
    "感情を色とタッチに昇華する卓越した表現力",
    "日常の隠れた美を見抜く繊細な観察眼",
    "独自技法を試行錯誤し続ける探究心"
  ],
  weaknesses: [
    "情緒の起伏で制作ペースが不安定になりやすい",
    "批評や商業的プレッシャーへの耐性が低い",
    "自己評価が低く他者と比較して落ち込みやすい"
  ],
  actionSteps: [
    "ルーティンと休息時間を明確に区切り心身を安定化させる",
    "制作進捗を共有できる仲間やメンターを持ち孤立を防ぐ",
    "作品をシリーズ化し一貫したテーマでブランド価値を高める"
  ]
},
{
  name: "フリーダ・カーロ",
  occupation: "artist",
  mbti: "ISFP",
  description:
    "痛みとアイデンティティを鮮烈な色彩で告白する〈自己を描く象徴派〉。メキシコ文化と個人の物語を重ね、観る者に深い共感を呼び起こします。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg/500px-Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Frida_Kahlo",
  strengths: [
    "個人的体験を普遍的象徴へ昇華する洞察力",
    "大胆な色彩と記号で視覚的インパクトを与える",
    "文化的ルーツを作品に織り込み多様性を訴求する力"
  ],
  weaknesses: [
    "内省が深く制作が自己完結しがちで外部視点が不足",
    "感情的負荷が高くバーンアウトを招きやすい",
    "自己プロモーションを後回しにし機会を逃しがち"
  ],
  actionSteps: [
    "セルフケアのルーティンを設け感情を整理する",
    "外部アーティストとコラボし視点の拡張と刺激を得る",
    "SNSや展示声明で物語を発信しファンコミュニティを育てる"
  ]
},
{
  name: "パブロ・ピカソ",
  occupation: "artist",
  mbti: "ENTP",
  description:
    "キュビスムをはじめ次々と様式を刷新した〈終わりなき革新者〉。既成概念を分解し再構築する発想で20世紀美術を塗り替えました。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pablo_picasso_1.jpg/500px-Pablo_picasso_1.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Pablo_Picasso",
  strengths: [
    "概念を解体し新構造へ転換する創造的思考",
    "多作で高速なプロトタイピング能力",
    "社交性と市場洞察でトレンドを先取りする嗅覚"
  ],
  weaknesses: [
    "興味が移ろいやすくテーマが散漫になりがち",
    "挑発的姿勢が批判を呼びやすい",
    "スピード重視で作品の粗さが残ることがある"
  ],
  actionSteps: [
    "長期ビジョンを設定しコアテーマを定める",
    "批判を分析し次の革新のヒントとして活用",
    "一部作品でスロー制作を試し完成度を高める訓練を行う"
  ]
},
{
  name: "ジョージア・オキーフ",
  occupation: "artist",
  mbti: "INTJ",
  description:
    "花弁や砂漠を抽象化し本質を射抜く〈静謐なるモダニスト〉。緻密な観察と構成力でミニマルながら強烈なイメージを創出しました。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Georgia_O%27Keeffe_MET_DP230868.jpg/500px-Georgia_O%27Keeffe_MET_DP230868.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Georgia_O%27Keeffe",
  strengths: [
    "対象を抽象化し核心を捉える分析力",
    "ミニマル構図で強いメッセージを放つ設計力",
    "孤独な環境でも高集中を維持する自己管理力"
  ],
  weaknesses: [
    "完璧を求め決定が遅れ制作が長期化しやすい",
    "個人のペースを優先しチーム活動に消極的",
    "急速なトレンド変化への関心が薄い傾向"
  ],
  actionSteps: [
    "制作工程に明確なデッドラインを設け意思決定を迅速化",
    "アートコミュニティで議論し外部フィードバックを取り入れる",
    "年次計画に新技法やデジタルツール習得を組み込み進化を継続"
  ]
},

  // Journalists
  {
  name: "エドワード・R・マロー",
  occupation: "journalist",
  mbti: "INTJ",
  description:
    "第二次大戦下のロンドン空襲を生中継し、放送ジャーナリズムの新境地を開いた〈公共の良心〉。冷徹な分析眼と揺るがぬ倫理観で “This … is London” の一言に真実を宿しました。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/25/Edward_R._Murrow.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Edward_R._Murrow",
  strengths: [
    "資料と現場証言を統合する構成力",
    "政治・軍事圧力にも屈しない職業倫理",
    "短い原稿で核心を突く言語センス"
  ],
  weaknesses: [
    "完璧主義で放送直前まで修正を続けがち",
    "感情表現を抑えるあまり共感的なトーンが不足することも"
  ],
  actionSteps: [
    "マルチメディア表現（データ可視化・SNS動画）で感情的訴求も強化",
    "デッドライン前のレビュー工程を固定し修正ループを制限",
    "若手と協働し新しい取材手法を実験して視座を拡張"
  ]
},
{
  name: "クリスティアナ・アマンポール",
  occupation: "journalist",
  mbti: "ENFJ",
  description:
    "紛争地に飛び込み、当事者の声を世界に届ける〈地球規模のストーリーテラー〉。強烈な共感力と説得力で“国際報道の顔”として人権課題を可視化してきました。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Christiane_Amanpour_June_2008_%28cropped%29.jpg/500px-Christiane_Amanpour_June_2008_%28cropped%29.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Christiane_Amanpour",
  strengths: [
    "危機下でも相手の信頼を得る対人スキル",
    "複雑な国際情勢を物語として翻訳する構築力",
    "カメラ前でのエネルギッシュなプレゼンス"
  ],
  weaknesses: [
    "使命感が強すぎて感情疲労・バーンアウトに陥りやすい",
    "ストーリー優先で細部のファクトチェックが遅れる場合がある"
  ],
  actionSteps: [
    "取材後のセルフケアとメンタリング機会をスケジュールに組み込む",
    "デスクチェックのダブル体制を敷き事実検証を強化",
    "学際的な研究者ネットワークを広げ分析面を補完"
  ]
},
{
  name: "ハンター・S・トンプソン",
  occupation: "journalist",
  mbti: "ENTP",
  description:
    "自らを物語の主人公に据えた“ゴンゾ・ジャーナリズム”で既存報道を揺さぶった〈反骨の観察者〉。過激な比喩と鋭いユーモアで権力構造を暴きます。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Hunter_S._Thompson%2C_Las_Vegas_1971.jpg/500px-Hunter_S._Thompson%2C_Las_Vegas_1971.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Hunter_S._Thompson",
  strengths: [
    "型破りな視点で読者を引き込む創造性",
    "権力への忖度ゼロの批評精神",
    "文章にリズムを与える独特の語感"
  ],
  weaknesses: [
    "主観が強く客観データが不足しがち",
    "締め切りや規律よりインスピレーションを優先しやすい"
  ],
  actionSteps: [
    "リサーチアシスタントと組み事実確認フローを確立",
    "短期連載形式で締め切り耐性を高めるトレーニング",
    "セルフエディット用チェックリストで論点の過剰拡散を防止"
  ]
},
{
  name: "ボブ・ウッドワード",
  occupation: "journalist",
  mbti: "ISTJ",
  description:
    "ウォーターゲート事件を粘り強く追い、米国史を動かした〈調査報道の代名詞〉。膨大な証言と公文書を突き合わせ、静かな確信で真実を積み上げます。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Bob_Woodward_Oct23_%2853297480588%29.jpg/500px-Bob_Woodward_Oct23_%2853297480588%29.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Bob_Woodward",
  strengths: [
    "一次資料を重層的に照合する検証力",
    "匿名情報源を守り抜く信頼構築力",
    "長期取材プロジェクトを計画通り遂行する粘着力"
  ],
  weaknesses: [
    "慎重すぎて速報競争に乗り遅れることがある",
    "文章が事実報告に偏りドラマ性が薄くなる傾向"
  ],
  actionSteps: [
    "速報チームと連携し段階的に情報公開するハイブリッド型取材を採用",
    "ストーリーテリング技法（ナラティブアーク・人物描写）を学習",
    "データジャーナリズム手法を取り入れ視覚的訴求力を底上げ"
  ]
},
  // Lawyers
  {
  name: "サーグッド・マーシャル",
  occupation: "lawyer",
  mbti: "ENFJ",
  description:
    "人種差別撤廃へ道を開いた〈公民権の旗手〉。弱者の声に寄り添いながら、大胆な戦略と情熱的スピーチで合衆国憲法の解釈を塗り替えた行動派リーダーです。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Thurgood-marshall-2.jpg/500px-Thurgood-marshall-2.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Thurgood_Marshall",
  strengths: [
    "高い共感力と道義的カリスマで支持を集める",
    "多様な利害関係者を束ねるコーチング型リーダーシップ",
    "判例の社会的インパクトを読み切るビジョン"
  ],
  weaknesses: [
    "当事者意識が強すぎて冷静さを欠くことがある",
    "情熱が先行し準備工数・リソースを過大投入しやすい"
  ],
  actionSteps: [
    "エビデンスに基づく客観評価シートで感情と分析のバランスを取る",
    "案件ごとに優先順位を可視化し投入リソースを最適化",
    "異なる法分野の専門家と交差レビューを行い視野を拡張"
  ]
},
{
  name: "ルース・ベイダー・ギンズバーグ",
  occupation: "lawyer",
  mbti: "INTJ",
  description:
    "緻密な論理と鉄の意志でジェンダー平等を切り拓いた〈リーガル・アーキテクト〉。最少の語数で最大の説得力を生む意見書はまさに芸術品。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Ruth_Bader_Ginsburg_2016_portrait.jpg/500px-Ruth_Bader_Ginsburg_2016_portrait.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Ruth_Bader_Ginsburg",
  strengths: [
    "判例・統計を組み合わせた戦略的ロジック構築",
    "粘り強く目標を追い続ける計画遂行力",
    "簡潔で鋭いリーガルライティング"
  ],
  weaknesses: [
    "完璧主義ゆえ判断が遅れがち",
    "自己完結しやすくチームの協働機会を逃すことがある"
  ],
  actionSteps: [
    "80%完成時点でドラフト共有し即時フィードバックを取り入れる",
    "業務をモジュール化して若手に権限委譲し育成を両立",
    "健康管理とワークライフバランスを意識し持続可能性を高める"
  ]
},
{
  name: "クラレンス・ダロウ",
  occupation: "lawyer",
  mbti: "ENTP",
  description:
    "機転の利くクロスエグザミネーションとウィットに富んだ弁論で陪審員を魅了した〈法廷の自由人〉。既存の枠を打ち破る創造的ディフェンスが持ち味です。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Clarence_Darrow.jpg/500px-Clarence_Darrow.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Clarence_Darrow",
  strengths: [
    "即興的な質問で証言の矛盾を突く洞察力",
    "ストーリーテリングを駆使した説得力あるプレゼン",
    "型破りな戦略で前例を作るイノベーション志向"
  ],
  weaknesses: [
    "細部の事務作業や長期計画を後回しにしがち",
    "議論好きが高じて対立を生むことがある"
  ],
  actionSteps: [
    "ディテール志向のパートナーとチームを組み抜け漏れを補完",
    "事前にスクリプトを作成し要点を絞った議論を意識",
    "判例リサーチのフレームワークを標準化し効率を向上"
  ]
},
{
  name: "メアリー・ジョー・ホワイト",
  occupation: "lawyer",
  mbti: "ISTJ",
  description:
    "SEC長官として市場の公正性を守り抜いた〈金融規制の番人〉。証拠を積み重ねる堅実さと不偏不党の姿勢で信頼を勝ち取る“鉄の検察官”タイプ。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Official_portrait_of_Mary_Jo_White.jpg/500px-Official_portrait_of_Mary_Jo_White.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Mary_Jo_White",
  strengths: [
    "事実関係を網羅する緻密なドキュメンテーション",
    "規制・コンプライアンスの枠内で最適解を導く判断力",
    "プレッシャー下でも揺るがない責任感"
  ],
  weaknesses: [
    "規則重視のため柔軟な発想が生まれにくい",
    "変化の激しい案件で適応が後手に回ることがある"
  ],
  actionSteps: [
    "新領域のケーススタディを取り入れ創造的思考を刺激",
    "アジャイルなプロジェクト管理手法を試験導入",
    "交渉術やソフトスキル研修で対人影響力を強化"
  ]
},

  // Investors
  {
  name: "ウォーレン・バフェット",
  occupation: "investor",
  mbti: "ISTJ",
  description:
    "徹底したファンダメンタル分析で“適正価格以下の優良企業”を丹念に拾い上げる「オマハの賢人」。複利と長期保有の威力を誰よりも体現する堅実派です。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit_%28cropped%29.jpg/500px-Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit_%28cropped%29.jpg",
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
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/George_Soros_-_May_31%2C_2017.jpg/500px-George_Soros_-_May_31%2C_2017.jpg",
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
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Cathie_Wood_ARK_Invest_Photo.jpg/500px-Cathie_Wood_ARK_Invest_Photo.jpg",
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
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Web_Summit_2018_-_Forum_-_Day_2%2C_November_7_HM1_7481_%2844858045925%29.jpg/500px-Web_Summit_2018_-_Forum_-_Day_2%2C_November_7_HM1_7481_%2844858045925%29.jpg",
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
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Noam_Chomsky_portrait_2017_retouched.jpg/500px-Noam_Chomsky_portrait_2017_retouched.jpg",
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
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/37/Bell_hooks%2C_October_2014.jpg",
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
  imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Richard_Feynman_Nobel.jpg/500px-Richard_Feynman_Nobel.jpg",
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
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Hannah_Arendt_auf_dem_1._Kulturkritikerkongress%2C_Barbara_Niggl_Radloff%2C_FM-2019-1-5-9-16_%28cropped%29.jpg/500px-Hannah_Arendt_auf_dem_1._Kulturkritikerkongress%2C_Barbara_Niggl_Radloff%2C_FM-2019-1-5-9-16_%28cropped%29.jpg",
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
  name: "ピーター・ドラッカー",
  occupation: "consultant",
  mbti: "INTJ",
  description:
    "経営を“社会生態系”として捉えた近代マネジメントの開拓者。全体構造を俯瞰し、理論を実践に変える知的アーキテクトです。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Drucker5789.jpg/500px-Drucker5789.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Peter_Drucker",
  strengths: [
    "因果関係をモデル化し複雑課題を整理する体系思考",
    "定量･定性データを融合し実行指針へ落とし込む分析力",
    "組織に学習文化を根付かせる思想的リーダーシップ"
  ],
  weaknesses: [
    "現場の政治力学や感情面を軽視しがち",
    "理念を深掘りしすぎ行動計画が遅れることがある"
  ],
  actionSteps: [
    "フィールドワークを増やし現場視点を理論に反映",
    "小規模パイロットで仮説検証サイクルを高速化",
    "多職種ワークショップで実装責任を共有し推進力を高める"
  ]
},
{
  name: "クレイトン・クリステンセン",
  occupation: "consultant",
  mbti: "ENFJ",
  description:
    "“破壊的イノベーション”理論で業界の常識を覆したビジョナリー。共感力と説得力で組織を変革へ導くストーリーテラー型コンサルタント。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Clayton_Christensen_World_Economic_Forum_2013.jpg/500px-Clayton_Christensen_World_Economic_Forum_2013.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Clayton_Christensen",
  strengths: [
    "顧客ジョブに着目しイノベーション機会を発見する洞察力",
    "ストーリーテリングで利害関係者を巻き込む影響力",
    "若手を育成し知を共有するコーチングスキル"
  ],
  weaknesses: [
    "理想像を語りすぎ具体ロードマップが曖昧になりがち",
    "ネットワーキング過多で深い分析時間が不足することも"
  ],
  actionSteps: [
    "施策ごとにKPIを設定し進捗を定量管理",
    "週次ブロックタイムで分析・執筆に集中する環境を確保",
    "“デビルズアドボケイト”を置き仮説を批判的に磨く"
  ]
},
{
  name: "マイケル・ポーター",
  occupation: "consultant",
  mbti: "ISTJ",
  description:
    "5フォース分析で競争戦略を体系化した構造派。膨大な業界データを整理し、再現性あるフレームワークへ昇華させるファクトドリブン型です。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Michael_Porter.jpg/500px-Michael_Porter.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Michael_Porter",
  strengths: [
    "業界構造を分解し優位性を数値で示すロジカルシンキング",
    "フレームワーク化により提案を標準化・横展開する力",
    "粘り強いファクトチェックで信頼性を担保"
  ],
  weaknesses: [
    "革新的アイデアへの感度がやや低い",
    "堅実ゆえ変化速度の速い案件で対応が後手に回ることがある"
  ],
  actionSteps: [
    "デザイン思考ワークショップで発想の幅を拡張",
    "リアルタイムデータを取り入れ分析周期を短縮",
    "異業種プロジェクトに参画し視座をアップデートする"
  ]
},
{
  name: "インドラ・ヌーイ",
  occupation: "consultant",
  mbti: "ENTJ",
  description:
    "グローバル経営を牽引した“戦略実行の達人”。ビジョンを数値目標へ落とし込み、多文化組織を動かすダイナミックリーダーです。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/IndraNooyiDavos2010ver2.jpg/500px-IndraNooyiDavos2010ver2.jpg",
  wikiUrl: "https://en.wikipedia.org/wiki/Indra_Nooyi",
  strengths: [
    "遠大なビジョンを実行計画へ翻訳する推進力",
    "多文化環境で合意形成を図る交渉・コミュニケーション力",
    "サステナビリティを戦略に組み込む先見性"
  ],
  weaknesses: [
    "高い目標設定でメンバーへの負荷が大きくなりがち",
    "細部より全体像を優先しディテール抜けのリスク"
  ],
  actionSteps: [
    "チームにマイクロゴールを設定し負荷を分散",
    "専門家レビューで施策の細部を定期点検",
    "ステークホルダーインタビューを継続し温度感を把握"
  ]
},
  // Resercher
{
  name: "スティーブン・ホーキング",
  occupation: "researcher",
  mbti: "INTJ",
  description:
    "ブラックホール蒸発理論で宇宙観を刷新した“車椅子の天才理論物理学者”。思考実験を駆使し、抽象理論を一枚の式に凝縮する設計者型です。",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Stephen_Hawking.StarChild.jpg",
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
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Jane-goodall_%28cropped%29.jpg/500px-Jane-goodall_%28cropped%29.jpg",
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
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Neil_DeGrasse_Tyson_%282023%29.jpg/500px-Neil_DeGrasse_Tyson_%282023%29.jpg",
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
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Barbara_McClintock_%281902-1992%29_shown_in_her_laboratory_in_1947.jpg/500px-Barbara_McClintock_%281902-1992%29_shown_in_her_laboratory_in_1947.jpg",
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
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Frank_Lloyd_Wright_portrait.jpg/500px-Frank_Lloyd_Wright_portrait.jpg",
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
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Zaha_Hadid_in_Heydar_Aliyev_Cultural_center_in_Baku_nov_2013.jpg/500px-Zaha_Hadid_in_Heydar_Aliyev_Cultural_center_in_Baku_nov_2013.jpg",
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
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Le_Corbusier_%281964%29.jpg/500px-Le_Corbusier_%281964%29.jpg",
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
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Antoni_Gaudi_1878.jpg/500px-Antoni_Gaudi_1878.jpg",
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
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/David_ogilvy.jpg",
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
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/18/1969_Wells_Rich_Greene_File_Photo_of_Mary_Wells_Lawrence_at_her_desk.jpg",
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
  imageUrl: "https://www.nextdayflyers.com/blog/wp-content/uploads/2011/05/1claude.jpg",
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
  imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/b2/Leo_Burnett.jpg",
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
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Hitchcock%2C_Alfred_02.jpg/500px-Hitchcock%2C_Alfred_02.jpg",
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
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/MKr25402_Steven_Spielberg_%28Berlinale_2023%29.jpg/500px-MKr25402_Steven_Spielberg_%28Berlinale_2023%29.jpg",
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
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Kubrick_on_the_set_of_Barry_Lyndon_%281975_publicity_photo%29_crop.jpg/500px-Kubrick_on_the_set_of_Barry_Lyndon_%281975_publicity_photo%29_crop.jpg",
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
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Identite-AgnesVarda-1962-Sacem.jpg/500px-Identite-AgnesVarda-1962-Sacem.jpg",
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