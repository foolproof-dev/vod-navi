// src/components/SearchPage.jsx
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies, searchTvShows, getMovieDetails, getTvShowDetails, getMovieWatchProviders, getTvShowWatchProviders, getImageUrl } from '../utils/tmdbApi';
import vodServices from '../data/vodServices';
import SearchForm from './SearchForm'; // SearchFormをインポート
import './SearchForm.css'; // Re-use the same CSS for now

// vodServicesから有効なTMDBプロバイダーIDのセットを作成 (コンポーネントの外で定義)
const validTmdbProviderIds = new Set(vodServices.map(service => service.tmdb_provider_id));

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  const [movieDetails, setMovieDetails] = useState(null);
  const [watchProviders, setWatchProviders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const performSearch = async () => {
      if (!query) {
        setMovieDetails(null);
        setWatchProviders([]);
        setError('');
        return;
      }

      setLoading(true);
      setError('');
      setMovieDetails(null);
      setWatchProviders([]);

      try {
        const searchResponse = await searchMovies(query);
        let firstResult = searchResponse.results[0];
        let mediaType = 'movie';

        if (!firstResult) {
          const tvSearchResponse = await searchTvShows(query);
          firstResult = tvSearchResponse.results[0];
          mediaType = 'tv';
        }

        if (!firstResult) {
          setError('作品が見つかりませんでした。');
          setLoading(false);
          return;
        }

        const mediaId = firstResult.id;

        let details;
        if (mediaType === 'movie') {
          details = await getMovieDetails(mediaId);
        } else {
          details = await getTvShowDetails(mediaId);
        }
        setMovieDetails(details);

        let providersData;
        if (mediaType === 'movie') {
          providersData = await getMovieWatchProviders(mediaId);
        } else {
          providersData = await getTvShowWatchProviders(mediaId);
        }

        const jpProviders = providersData.results.JP;
        const filteredProviders = [];
        const addedProviderNames = new Set();

        if (jpProviders && jpProviders.flatrate) {
          jpProviders.flatrate.forEach(provider => {
            if (validTmdbProviderIds.has(provider.provider_id) && !addedProviderNames.has(provider.provider_name)) {
              filteredProviders.push(provider);
              addedProviderNames.add(provider.provider_name);
            }
          });
        }
        setWatchProviders(filteredProviders);

      } catch (err) {
        console.error(err);
        setError('検索中にエラーが発生しました。');
      } finally {
        setLoading(false);
      }
    };

    performSearch();
  }, [query]); // 依存配列から validTmdbProviderIds を削除

  return (
    <div className="search-page-container" style={{ padding: '20px' }}>
      <SearchForm /> {/* 検索フォームをここにも表示 */}
      
      <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #eee' }} />

      {loading && <p>検索中...</p>}
      {error && <p className="error-message">{error}</p>}
      
      {!loading && !error && movieDetails && (
        <div className="search-results-detail">
          <h3>「{query}」の検索結果</h3>
          <div className="movie-detail-card">
            {movieDetails.poster_path && (
              <img src={getImageUrl(movieDetails.poster_path)} alt={movieDetails.title || movieDetails.name} className="movie-poster" />
            )}
            <div className="movie-info">
              <h4>{movieDetails.title || movieDetails.name}</h4>
              <p className="movie-overview">{movieDetails.overview || '概要がありません。'}</p>

              {watchProviders.length > 0 && (
                <div className="watch-providers">
                  <h5>視聴可能なVODサービス:</h5>
                  <ul className="watch-providers-list">
                    {watchProviders.map(provider => (
                      <li key={provider.provider_id} className="watch-provider-item">
                        {provider.logo_path && (
                          <img src={getImageUrl(provider.logo_path, 'w92')} alt={provider.provider_name} />
                        )}
                        <span>{provider.provider_name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {watchProviders.length === 0 && !loading && (
                <p>この作品を視聴できる見放題サービスは見つかりませんでした。</p>
              )}
            </div>
          </div>
        </div>
      )}
      
      {!loading && !movieDetails && (
        <div style={{ textAlign: 'center', color: '#888', marginTop: '50px' }}>
          <p>気になる作品を検索して、視聴できるサービスを探してみましょう。</p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
