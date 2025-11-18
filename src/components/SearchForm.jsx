import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchForm.css'; // スタイルシートをインポート

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/search?q=${encodeURIComponent(query)}`);
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
        <button type="submit">検索</button>
      </form>
    </div>
  );
};

export default SearchForm;