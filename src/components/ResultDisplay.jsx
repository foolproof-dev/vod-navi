import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import diagnoseLogic from '../utils/diagnoseLogic'; // 診断ロジックをインポート

const ResultDisplay = () => {
  const location = useLocation();

  // location.state が存在しない場合は、早期にリターンする
  if (!location.state) {
    return (
      <div className="result-display">
        <h2>診断データがありません</h2>
        <p>診断フォームから診断を行ってください。</p>
        <Link to="/diagnose">診断フォームへ</Link>
      </div>
    );
  }

  const { mainInterest, genres, priorities } = location.state;
  const [recommendedServices, setRecommendedServices] = useState([]);

  useEffect(() => {
    const results = diagnoseLogic(mainInterest, genres, priorities);
    setRecommendedServices(results);
  }, [mainInterest, genres, priorities]);

  return (
    <div className="result-display">
      <h2>診断結果：あなたにピッタリのVODはこれ！</h2>
      {recommendedServices.length > 0 ? (
        recommendedServices.map((service, index) => (
          <div key={service.id} className="service-recommendation">
            <h3>
              {index === 0 && '👑 総合1位：'}
              {index === 1 && '🥈 総合2位：'}
              {index === 2 && '🥉 総合3位：'}
              {service.name}
            </h3>
            <p className="catch-copy">
              {/* ここにユーザーの選択に基づいたキャッチコピーを生成するロジックを追加可能 */}
              {service.description}
            </p>
            <h4>【おすすめする理由】</h4>
            <ul>
              {mainInterest && service.features.mainInterests.includes(mainInterest) && (
                <li>あなたが選んだ「**{mainInterest}**」の作品が豊富です。</li>
              )}
              {genres.length > 0 && genres.some(g => service.features.genres.includes(g)) && (
                <li>好みのジャンル（{genres.filter(g => service.features.genres.includes(g)).join('、')}）の作品が充実しています。</li>
              )}
              {priorities.length > 0 && priorities.some(p => {
                // こだわり条件とサービスの特徴を比較して理由を生成
                if (p === '料金の安さ' && service.monthly_fee.standard <= 1000) return true;
                if (p === '作品数の多さ' && (service.features.totalWorks === '30万本以上' || service.features.totalWorks === '豊富')) return true;
                if (p === '独占・オリジナル作品' && service.features.originalContent) return true;
                if (p === '最新作の速さ' && service.features.latestContent) return true;
                if (p === '家族での利用' && service.features.familyFriendly && service.features.simultaneousViewing >= 2) return true;
                if (p === '機能性' && service.features.download) return true;
                return false;
              }) && (
                <li>重視するこだわり（{priorities.filter(p => {
                  if (p === '料金の安さ' && service.monthly_fee.standard <= 1000) return true;
                  if (p === '作品数の多さ' && (service.features.totalWorks === '30万本以上' || service.features.totalWorks === '豊富')) return true;
                  if (p === '独占・オリジナル作品' && service.features.originalContent) return true;
                  if (p === '最新作の速さ' && service.features.latestContent) return true;
                  if (p === '家族での利用' && service.features.familyFriendly && service.features.simultaneousViewing >= 2) return true;
                  if (p === '機能性' && service.features.download) return true;
                  return false;
                }).join('、')}）にも対応しています。</li>
              )}
              {/* その他の理由やサービス固有の強み */}
              <li>月額料金は {service.monthly_fee.standard}円からです。</li>
            </ul>
            <a href={service.affiliateLink || service.link} target="_blank" rel="noopener noreferrer">
              [公式サイトで詳細を見る]
            </a>
          </div>
        ))
      ) : (
        <p>条件に合うVODサービスが見つかりませんでした。</p>
      )}
    </div>
  );
};

export default ResultDisplay;