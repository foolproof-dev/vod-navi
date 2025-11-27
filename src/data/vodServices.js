const vodServices = [
  {
    id: 'netflix',
    name: 'Netflix',
    catchphrase: '世界が選ぶNo.1',
    tmdb_provider_id: 8, // TMDB Provider ID
    logo: '/logos/netflix.png', // 後で追加
    monthly_fee: {
      basic: 790, // 広告つきスタンダード
      standard: 1490,
      premium: 1980,
    },
    features: {
      mainInterests: ['映画', '海外ドラマ', 'アニメ', 'ドキュメンタリー'],
      genres: ['アクション', 'SF', 'ファンタジー', 'コメディ', '恋愛', 'サスペンス', 'ホラー', 'ヒューマンドラマ'],
      priorities: ['独占・オリジナル作品', '機能性', '作品数の多さ'],
      originalContent: true,
      latestContent: false, // レンタルは別
      familyFriendly: true,
      download: true,
      simultaneousViewing: 4, // プレミアムプランの場合
      totalWorks: '豊富', // 具体的な数字は変動するため
    },
    description: '世界中で愛されるオリジナル作品が魅力。映画、ドラマ、アニメ、ドキュメンタリーなど幅広いジャンルを網羅。',
    pros: [
      '圧倒的なオリジナル作品の質と量',
      '高度なレコメンド機能',
      '使いやすいUI/UX',
      '4K対応作品が豊富'
    ],
    cons: [
      '月額料金が比較的高め',
      'レンタル作品がない',
      '見放題作品の入れ替わりがある'
    ],
    recommendedWorks: [
      { title: 'ストレンジャー・シングス 未知の世界', genre: 'SF/ホラー' },
      { title: '愛の不時着', genre: '韓国ドラマ/恋愛' },
      { title: '全裸監督', genre: '国内ドラマ/コメディ' },
    ],
    link: 'https://www.netflix.com/',
  },
  {
    id: 'u-next',
    name: 'U-NEXT',
    catchphrase: '作品数No.1',
    tmdb_provider_id: 84, // TMDB Provider ID
    logo: '/logos/u-next.png', // 後で追加
    monthly_fee: {
      standard: 2189,
    },
    features: {
      mainInterests: ['映画', '国内ドラマ', '海外ドラマ', 'アニメ', '韓国ドラマ・アジア作品', 'バラエティ・お笑い'],
      genres: ['アクション', 'SF', 'ファンタジー', 'コメディ', '恋愛', 'サスペンス', 'ホラー', 'ヒューマンドラマ', '歴史', 'ドキュメンタリー', 'キッズ'],
      priorities: ['作品数の多さ', '最新作の速さ', '機能性'],
      originalContent: false, // ほぼなし
      latestContent: true, // ポイント利用
      familyFriendly: true,
      download: true,
      simultaneousViewing: 4,
      totalWorks: '30万本以上',
    },
    description: '見放題作品数No.1！映画、ドラマ、アニメ、漫画、雑誌まで楽しめるエンタメ総合サービス。毎月もらえるポイントで新作も視聴可能。',
    pros: [
      '見放題作品数が圧倒的',
      '毎月1,200円分のポイント付与で新作も楽しめる',
      '漫画や雑誌も読める',
      'アカウント共有で最大4人まで利用可能'
    ],
    cons: [
      '月額料金が最も高額',
      'オリジナル作品は少ない',
      'UIがやや複雑'
    ],
    recommendedWorks: [
      { title: 'SPY×FAMILY', genre: 'アニメ/コメディ' },
      { title: 'キングダム', genre: '映画/歴史' },
      { title: '梨泰院クラス', genre: '韓国ドラマ/ヒューマンドラマ' },
    ],
    link: 'https://video.unext.jp/',
  },
  {
    id: 'amazon-prime-video',
    name: 'Amazon Prime Video',
    catchphrase: 'コスパ最強',
    tmdb_provider_id: 9, // TMDB Provider ID
    logo: '/logos/amazon-prime-video.png', // 後で追加
    monthly_fee: {
      standard: 600, // プライム会員費
      annual: 5900, // 年間プラン
    },
    features: {
      mainInterests: ['映画', '国内ドラマ', '海外ドラマ', 'アニメ', 'バラエティ・お笑い'],
      genres: ['アクション', 'SF', 'コメディ', '恋愛', 'サスペンス', 'ホラー', 'ヒューマンドラマ', 'キッズ'],
      priorities: ['料金の安さ', '独占・オリジナル作品', '作品数の多さ'],
      originalContent: true,
      latestContent: true, // レンタル・購入
      familyFriendly: true,
      download: true,
      simultaneousViewing: 3,
      totalWorks: '豊富',
    },
    description: 'Amazonプライム会員特典の一つ。映画、ドラマ、アニメ、オリジナル作品が見放題。他のプライム特典も利用可能。',
    pros: [
      '月額料金が非常に安い（プライム会員特典）',
      'Amazonオリジナル作品が充実',
      '他のプライム特典（お急ぎ便など）も利用できる',
      'レンタル・購入作品も豊富'
    ],
    cons: [
      '見放題作品の入れ替わりが激しい',
      'UIがやや分かりにくい場合がある',
      '作品数がU-NEXTほどではない'
    ],
    recommendedWorks: [
      { title: 'ザ・ボーイズ', genre: '海外ドラマ/アクション' },
      { title: 'ドキュメンタル', genre: 'バラエティ/お笑い' },
      { title: 'シン・エヴァンゲリオン劇場版', genre: 'アニメ/SF' },
    ],
    link: 'https://www.amazon.co.jp/primevideo/',
  },
  {
    id: 'd-anime-store',
    name: 'dアニメストア',
    catchphrase: 'アニメ専門',
    tmdb_provider_id: 2494, // TMDB Provider ID (dAnime Amazon Channel)
    logo: '/logos/d-anime-store.png', // 後で追加
    monthly_fee: {
      standard: 550,
    },
    features: {
      mainInterests: ['アニメ'],
      genres: ['アクション', 'SF', 'ファンタジー', 'コメディ', '恋愛', 'サスペンス', 'ホラー', 'ヒューマンドラマ', 'キッズ'],
      priorities: ['料金の安さ', '作品数の多さ', '最新作の速さ'],
      originalContent: false,
      latestContent: true,
      familyFriendly: true,
      download: true,
      simultaneousViewing: 1,
      totalWorks: '5,500本以上',
    },
    description: 'アニメ作品数No.1！月額550円で5,500本以上のアニメが見放題。最新作から懐かしの名作まで網羅。',
    pros: [
      'アニメに特化しており、作品数が圧倒的',
      '月額料金が非常に安い',
      '最新アニメの配信が早い',
      'アニメ関連イベントの先行抽選販売など特典あり'
    ],
    cons: [
      'アニメ以外のジャンルはほとんどない',
      '同時視聴は1台のみ',
      '画質が他のサービスより劣る場合がある'
    ],
    recommendedWorks: [
      { title: '呪術廻戦', genre: 'アニメ/アクション' },
      { title: 'Re:ゼロから始める異世界生活', genre: 'アニメ/ファンタジー' },
      { title: '銀魂', genre: 'アニメ/コメディ' },
    ],
    link: 'https://animestore.docomo.ne.jp/',
  },
  {
    id: 'hulu',
    name: 'Hulu',
    catchphrase: '日テレ系充実',
    tmdb_provider_id: 15,
    logo: '/logos/hulu.png', // 後で追加
    monthly_fee: {
      standard: 1026,
    },
    features: {
      mainInterests: ['海外ドラマ', '国内ドラマ', 'アニメ', 'バラエティ・お笑い'],
      genres: ['アクション', 'SF', 'ファンタジー', 'コメディ', '恋愛', 'サスペンス', 'ホラー', 'ヒューマンドラマ', 'ドキュメンタリー'],
      priorities: ['独占・オリジナル作品', '最新作の速さ'],
      originalContent: true, // 日テレ系コンテンツ
      latestContent: true, // 日テレ系コンテンツ
      familyFriendly: true,
      download: true,
      simultaneousViewing: 4,
      totalWorks: '14万本以上',
    },
    description: '14万本以上の映画・ドラマ・アニメ・バラエティが見放題。日本テレビ系の見逃し配信やHuluオリジナル作品も豊富。',
    pros: [
      '日本テレビ系のドラマやバラエティが充実',
      '海外ドラマのラインナップが豊富',
      '1つのアカウントで最大4台まで同時視聴可能',
      'ライブTVでスポーツやニュースも楽しめる'
    ],
    cons: [
      '無料トライアル期間がない',
      'ダウンロード機能に制限がある',
      '最新映画の配信は少し遅め'
    ],
    recommendedWorks: [
      { title: 'ウォーキング・デッド', genre: '海外ドラマ/ホラー' },
      { title: '君と世界が終わる日に', genre: '国内ドラマ/サスペンス' },
      { title: '月曜から夜ふかし', genre: 'バラエティ' },
    ],
    link: 'https://www.hulu.jp/',
    affiliateLink: 'https://h.accesstrade.net/sp/cc?rk=0100l6dx00oli4',
  },
  {
    id: 'disney-plus',
    name: 'Disney+',
    catchphrase: 'ディズニー公式',
    tmdb_provider_id: 337,
    logo: '/logos/disney-plus.png', // 後で追加
    monthly_fee: {
      standard: 1140,
      premium: 1520,
    },
    features: {
      mainInterests: ['映画', '海外ドラマ', 'アニメ'],
      genres: ['アクション', 'SF', 'ファンタジー', 'コメディ', '恋愛', 'キッズ'],
      priorities: ['独占・オリジナル作品', '家族での利用'],
      originalContent: true,
      latestContent: false,
      familyFriendly: true,
      download: true,
      simultaneousViewing: 4, // プレミアムプランの場合
      totalWorks: '16,000本以上',
    },
    description: 'ディズニー、ピクサー、マーベル、スター・ウォーズ、ナショナルジオグラフィック、スターの6大ブランドの作品が見放題。',
    pros: [
      'ディズニーやマーベルなどの独占配信作品が豊富',
      '4K UHDやドルビーアトモス対応作品も多い（プレミアム）',
      '家族で楽しめる作品が充実',
      'オリジナル作品のクオリティが高い'
    ],
    cons: [
      '無料トライアル期間がない',
      '他のサービスに比べて作品数は少なめ',
      '日本のドラマやバラエティは少ない'
    ],
    recommendedWorks: [
      { title: 'マンダロリアン', genre: 'SF/アクション' },
      { title: 'ワンダヴィジョン', genre: 'SF/サスペンス' },
      { title: 'アナと雪の女王', genre: 'アニメ/ファンタジー' },
    ],
    link: 'https://www.disneyplus.com/ja-jp',
  },
  {
    id: 'fod',
    name: 'FOD',
    catchphrase: 'フジ系ドラマ',
    tmdb_provider_id: 2498, // FOD Channel Amazon Channel
    logo: '/logos/fod.png', // 後で追加
    monthly_fee: {
      standard: 976,
    },
    features: {
      mainInterests: ['国内ドラマ', 'バラエティ・お笑い', 'アニメ'],
      genres: ['恋愛', 'ヒューマンドラマ', 'コメディ', 'サスペンス'],
      priorities: ['独占・オリジナル作品', '最新作の速さ'],
      originalContent: true,
      latestContent: true,
      familyFriendly: true,
      download: true,
      simultaneousViewing: 1,
      totalWorks: '10万本以上',
    },
    description: 'フジテレビのドラマやバラエティが豊富！FODでしか見られない独占配信やオリジナル作品も多数。',
    pros: [
      'フジテレビの最新ドラマや過去の名作が見放題',
      '200誌以上の人気雑誌が読み放題',
      '毎月もらえるポイントでレンタル作品や電子書籍も楽しめる',
      'FOD独占のオリジナル作品が充実'
    ],
    cons: [
      '同時視聴ができない',
      '海外ドラマや映画は少なめ',
      '無料トライアル期間がない'
    ],
    recommendedWorks: [
      { title: 'ミステリと言う勿れ', genre: '国内ドラマ/ミステリー' },
      { title: 'silent', genre: '国内ドラマ/恋愛' },
      { title: '人志松本のすべらない話', genre: 'バラエティ' },
    ],
    link: 'https://fod.fujitv.co.jp/',
  },
  {
    id: 'dmm-tv',
    name: 'DMM TV',
    catchphrase: '新作アニメ最速',
    tmdb_provider_id: 2427,
    logo: '/logos/dmm-tv.png',
    monthly_fee: {
      standard: 550,
    },
    features: {
      mainInterests: ['アニメ', '映画', '国内ドラマ', 'バラエティ・お笑い', '2.5次元・舞台'],
      genres: ['アクション', 'SF', 'ファンタジー', 'コメディ', '恋愛', 'サスペンス', 'ホラー', 'ヒューマンドラマ', 'キッズ'],
      priorities: ['料金の安さ', '作品数の多さ', '独占・オリジナル作品'],
      originalContent: true,
      latestContent: true,
      familyFriendly: true,
      download: true,
      simultaneousViewing: 4,
      totalWorks: '19万本以上',
    },
    description: 'アニメ作品数トップクラス！月額550円で19万本以上の作品が見放題。アニメ、2.5次元舞台、バラエティなど幅広いジャンルを網羅。',
    pros: [
      '月額料金が非常に安い（550円）',
      'アニメ作品数が6,300本以上と圧倒的',
      '新作アニメの配信が早い（2年連続No.1）',
      'DMMオリジナル作品やバラエティが充実',
      '最大4台まで同時視聴可能',
      'ダウンロード機能あり'
    ],
    cons: [
      '無料トライアル期間が14日間と短め',
      'アプリ経由の登録は月額650円と割高',
      '海外ドラマや映画は他サービスより少なめ'
    ],
    recommendedWorks: [
      { title: '葬送のフリーレン', genre: 'アニメ/ファンタジー' },
      { title: '薬屋のひとりごと', genre: 'アニメ/ミステリー' },
      { title: 'ブルーロック', genre: 'アニメ/スポーツ' },
    ],
    link: 'https://tv.dmm.com/',
  },
  {
    id: 'abema-premium',
    name: 'ABEMAプレミアム',
    catchphrase: '恋愛リアリティ',
    tmdb_provider_id: 2428,
    logo: '/logos/abema-premium.png',
    monthly_fee: {
      standard: 960,
      basic: 580,
    },
    features: {
      mainInterests: ['国内ドラマ', 'バラエティ・お笑い', 'アニメ', '恋愛リアリティ', 'スポーツ'],
      genres: ['アクション', 'SF', 'ファンタジー', 'コメディ', '恋愛', 'サスペンス', 'ホラー', 'ヒューマンドラマ', 'ドキュメンタリー', 'スポーツ'],
      priorities: ['独占・オリジナル作品', '最新作の速さ', 'ライブ配信'],
      originalContent: true,
      latestContent: true,
      familyFriendly: true,
      download: true,
      simultaneousViewing: 2,
      totalWorks: '4万本以上',
    },
    description: 'オリジナル恋愛リアリティショーやバラエティが充実！スポーツ中継、格闘技、将棋など他にはないジャンルも楽しめる。',
    pros: [
      'ABEMAオリジナルの恋愛リアリティショーが人気',
      '広告ありプランなら月額580円と格安',
      'スポーツ中継や格闘技などライブ配信が充実',
      '追っかけ再生機能で放送中の番組も最初から視聴可能',
      '見逃し配信が無期限で視聴できる',
      'ダウンロード機能あり（広告なしプラン）'
    ],
    cons: [
      '映画や海外ドラマのラインナップは少なめ',
      '広告ありプランは機能制限あり',
      '同時視聴は最大2台まで（広告なしプラン）'
    ],
    recommendedWorks: [
      { title: 'オオカミくんには騙されない', genre: '恋愛リアリティ' },
      { title: '今日、好きになりました。', genre: '恋愛リアリティ' },
      { title: 'RIZIN', genre: 'スポーツ/格闘技' },
    ],
    link: 'https://abema.tv/about/premium',
    affiliateLink: 'https://px.a8.net/svt/ejp?a8mat=45IFX7+EKIXI2+4EKC+60WN6',
  },
];

export default vodServices;