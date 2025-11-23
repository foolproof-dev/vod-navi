import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import vodServices from '../data/vodServices'; // VODサービスデータをインポート
import { getPopularMovies, getDiscoverMoviesByProvider, getImageUrl } from '../utils/tmdbApi'; // TMDB API関数をインポート
import './ServiceDetailTemplate.css'; // スタイルシートをインポート

const ServiceDetailTemplate = () => {
  const { id } = useParams(); // URLからサービスIDを取得
  const service = vodServices.find(s => s.id === id); // 該当するサービスを検索
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      let moviesData;
      if (service && service.tmdb_provider_id) {
        // サービス固有の人気映画を取得
        moviesData = await getDiscoverMoviesByProvider(service.tmdb_provider_id);
      } else {
        // サービス固有のIDがない場合は、一般的な人気映画を取得
        moviesData = await getPopularMovies();
      }

      if (moviesData && moviesData.results) {
        setPopularMovies(moviesData.results.slice(0, 10)); // 上位10件を表示
      }
    };

    fetchMovies();
  }, [service]); // serviceが変更されたら再実行

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
      </header>

      {/* アフィリエイトリンクボタン */}
      <section className="cta-section">
        <a
          href={service.affiliateLink || service.link}
          target="_blank"
          rel="noopener noreferrer"
          className="affiliate-button"
        >
          {service.name}の無料体験を始める
        </a>
      </section>

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

      {/* TMDBからの人気映画 */}
      <section className="tmdb-popular-movies-section">
        <h2>{service.name}で人気の映画</h2>
        <div className="tmdb-works-grid">
          {popularMovies.length > 0 ? (
            popularMovies.map((movie) => (
              <div key={movie.id} className="tmdb-work-item">
                <img src={getImageUrl(movie.poster_path)} alt={movie.title} className="tmdb-work-image" />
                <h3>{movie.title}</h3>
              </div>
            ))
          ) : (
            <p>{service.name}で利用可能な人気映画は見つかりませんでした。</p>
          )}
        </div>
      </section>

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