import React from 'react';
import { useParams } from 'react-router-dom';
import vodServices from '../data/vodServices'; // VODサービスデータをインポート

const ServiceDetailTemplate = () => {
  const { id } = useParams(); // URLからサービスIDを取得
  const service = vodServices.find(s => s.id === id); // 該当するサービスを検索

  if (!service) {
    return (
      <div className="service-detail-template">
        <h2>サービスが見つかりません</h2>
        <p>指定されたIDのVODサービスは存在しません。</p>
      </div>
    );
  }

  return (
    <div className="service-detail-template">
      {/* サービス名とロゴ */}
      <header>
        {/* <img src={service.logo} alt={`${service.name} Logo`} className="service-logo" /> */}
        <h1>{service.name}</h1>
        <p className="service-description">{service.description}</p>
        <a href={service.link} target="_blank" rel="noopener noreferrer" className="official-link">
          [公式サイトはこちら]
        </a>
      </header>

      {/* 3つの特徴 */}
      <section className="features-section">
        <h2>{service.name}ってどんなサービス？3つの特徴</h2>
        <ul>
          {service.pros && service.pros.slice(0, 3).map((pro, index) => (
            <li key={index}>{pro}</li>
          ))}
        </ul>
      </section>

      {/* おすすめ作品 */}
      {service.recommendedWorks && service.recommendedWorks.length > 0 && (
        <section className="recommended-works-section">
          <h2>これを観なきゃ損！{service.name}独占のおすすめ作品</h2>
          <div className="works-grid">
            {service.recommendedWorks.map((work, index) => (
              <div key={index} className="work-item">
                {/* <img src={work.image} alt={work.title} className="work-image" /> */}
                <h3>{work.title}</h3>
                <p>{work.genre}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 料金プラン */}
      {service.monthly_fee && (
        <section className="pricing-section">
          <h2>料金プラン</h2>
          <table>
            <thead>
              <tr>
                <th>プラン名</th>
                <th>月額料金</th>
                {/* 他の項目もあれば追加 */}
              </tr>
            </thead>
            <tbody>
              {Object.entries(service.monthly_fee).map(([plan, price]) => (
                <tr key={plan}>
                  <td>{plan === 'standard' ? 'スタンダード' : plan === 'basic' ? 'ベーシック' : plan === 'premium' ? 'プレミアム' : plan}</td>
                  <td>{price}円</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {/* こんな人におすすめ/向いていない */}
      <section className="recommendation-target-section">
        <h2>{service.name}はこんな人におすすめ！</h2>
        <ul>
          {service.pros && service.pros.map((pro, index) => (
            <li key={index}>{pro}</li>
          ))}
        </ul>
        {service.cons && service.cons.length > 0 && (
          <>
            <h2>{service.name}はこんな人には向いていないかも…</h2>
            <ul>
              {service.cons.map((con, index) => (
                <li key={index}>{con}</li>
              ))}
            </ul>
          </>
        )}
      </section>
    </div>
  );
};

export default ServiceDetailTemplate;