const vodServices = [
  {
    id: 'netflix',
    name: 'Netflix',
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
];

export default vodServices;