import vodServices from '../data/vodServices';

const diagnoseLogic = (mainInterest, genres, priorities) => {
  const scoredServices = vodServices.map(service => {
    let score = 0;

    // ステップ1: メインの興味
    if (mainInterest && service.features.mainInterests.includes(mainInterest)) {
      score += 10; // メインの興味が一致したら高得点
    }

    // ステップ2: 好みのジャンル
    genres.forEach(selectedGenre => {
      if (service.features.genres.includes(selectedGenre)) {
        score += 3; // ジャンルが一致したら加点
      }
    });

    // ステップ3: こだわり条件
    priorities.forEach(selectedPriority => {
      switch (selectedPriority) {
        case '料金の安さ':
          // 月額料金が安いほど高得点 (例: 1000円以下なら+5, 500円以下なら+10)
          if (service.monthly_fee.standard <= 550) score += 10;
          else if (service.monthly_fee.standard <= 1000) score += 5;
          break;
        case '作品数の多さ':
          // 作品数が多いほど高得点 (例: '豊富'や'30万本以上'など)
          if (service.features.totalWorks === '30万本以上') score += 10;
          else if (service.features.totalWorks === '豊富') score += 5;
          break;
        case '独占・オリジナル作品':
          if (service.features.originalContent) score += 10;
          break;
        case '最新作の速さ':
          if (service.features.latestContent) score += 7;
          break;
        case '家族での利用':
          if (service.features.familyFriendly && service.features.simultaneousViewing >= 2) score += 7;
          break;
        case '機能性':
          if (service.features.download && service.features.simultaneousViewing >= 1) score += 5; // ダウンロードと同時視聴があれば加点
          break;
        default:
          break;
      }
    });

    return { ...service, score };
  });

  // スコアが高い順にソート
  return scoredServices.sort((a, b) => b.score - a.score);
};

export default diagnoseLogic;