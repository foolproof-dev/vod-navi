import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DiagnoseForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [mainInterest, setMainInterest] = useState('');
  const [genres, setGenres] = useState([]);
  const [priorities, setPriorities] = useState([]);

  // ステップ1の選択肢
  const mainInterestsOptions = [
    '映画', '海外ドラマ', '国内ドラマ', 'アニメ', '韓国ドラマ・アジア作品',
    'バラエティ・お笑い', 'スポーツ', '音楽・ライブ'
  ];

  // ステップ2の選択肢 (ジャンル)
  const genreOptions = [
    'アクション', 'SF', 'ファンタジー', 'コメディ', '恋愛', 'サスペンス',
    'ホラー', 'ヒューマンドラマ', '歴史', 'ドキュメンタリー', 'キッズ'
  ];

  // ステップ2の選択肢 (こだわり)
  const priorityOptions = [
    '料金の安さ', '作品数の多さ', '独占・オリジナル作品', '最新作の速さ',
    '家族での利用', '機能性'
  ];

  const handleMainInterestChange = (e) => {
    setMainInterest(e.target.value);
  };

  const handleGenreChange = (e) => {
    const { value, checked } = e.target;
    setGenres(prev =>
      checked ? [...prev, value] : prev.filter(g => g !== value)
    );
  };

  const handlePriorityChange = (e) => {
    const { value, checked } = e.target;
    if (checked && priorities.length >= 2) {
      // 2つまでしか選択できないようにする
      return;
    }
    setPriorities(prev =>
      checked ? [...prev, value] : prev.filter(p => p !== value)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ここで診断ロジックを呼び出すか、結果ページに遷移する
    // 現時点では仮で結果ページに遷移
    console.log({ mainInterest, genres, priorities });
    navigate('/result', { state: { mainInterest, genres, priorities } });
  };

  return (
    <div className="diagnose-form">
      <h2>VOD診断</h2>
      <form onSubmit={handleSubmit}>
        {/* ステップ1: メインの興味 */}
        <div>
          <h3>ステップ1: あなたの「メインディッシュ」を教えてください (1つだけ選択)</h3>
          {mainInterestsOptions.map(option => (
            <label key={option}>
              <input
                type="radio"
                name="mainInterest"
                value={option}
                checked={mainInterest === option}
                onChange={handleMainInterestChange}
              />
              {option}
            </label>
          ))}
        </div>

        {/* ステップ2: 好みのジャンルとこだわり条件 */}
        <div>
          <h3>ステップ2: 好みのジャンルとこだわり条件を教えてください (ジャンルはいくつでも、こだわりは2つまで)</h3>
          <h4>好みのジャンル (いくつでも選択可)</h4>
          {genreOptions.map(option => (
            <label key={option}>
              <input
                type="checkbox"
                name="genres"
                value={option}
                checked={genres.includes(option)}
                onChange={handleGenreChange}
              />
              {option}
            </label>
          ))}

          <h4>サービスへのこだわり (2つまで選択可)</h4>
          {priorityOptions.map(option => (
            <label key={option}>
              <input
                type="checkbox"
                name="priorities"
                value={option}
                checked={priorities.includes(option)}
                onChange={handlePriorityChange}
              />
              {option}
            </label>
          ))}
        </div>

        <button type="submit">診断結果を見る</button>
      </form>
    </div>
  );
};

export default DiagnoseForm;