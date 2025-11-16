import React, { useState } from 'react';
import axios from 'axios';

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null); // 初期状態をnullに変更
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchedQuery, setSearchedQuery] = useState(''); // 検索したキーワードを保持

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setError('');
    setResults(null); // 検索開始時にリセット
    setSearchedQuery(query);

    try {
      // 1. 作品を検索してIDを取得
      const searchUrl = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=ja-JP&query=${encodeURIComponent(query)}`;
      const searchResponse = await axios.get(searchUrl);
      const searchResults = searchResponse.data.results;

      if (searchResults.length === 0) {
        setError('作品が見つかりませんでした。');
        setLoading(false);
        return;
      }

      // 2. 最初の検索結果のIDを使って、配信プロバイダー情報を取得
      const firstResult = searchResults[0];
      const mediaType = firstResult.media_type;
      const mediaId = firstResult.id;

      if (mediaType !== 'movie' && mediaType !== 'tv') {
        setError('映画またはテレビ番組の情報が見つかりませんでした。');
        setLoading(false);
        return;
      }

      const providersUrl = `https://api.themoviedb.org/3/${mediaType}/${mediaId}/watch/providers?api_key=${apiKey}`;
      const providersResponse = await axios.get(providersUrl);
      const providers = providersResponse.data.results.JP;

      setResults(providers && providers.flatrate ? providers.flatrate : []);

    } catch (err) {
      console.error(err);
      setError('検索中にエラーが発生しました。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <h2>作品名で配信サービスを検索</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="例: ストレンジャー・シングス"
        />
        <button type="submit" disabled={loading}>
          {loading ? '検索中...' : '検索'}
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {results && (
        <div className="search-results">
          <h3>「{searchedQuery}」の検索結果</h3>
          {results.length > 0 ? (
            <ul>
              {results.map(provider => (
                <li key={provider.provider_id}>
                  {provider.logo_path && (
                    <img src={`https://image.tmdb.org/t/p/w500${provider.logo_path}`} alt={provider.provider_name} />
                  )}
                  <span>{provider.provider_name}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>見放題で配信中のサービスは見つかりませんでした。</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchForm;