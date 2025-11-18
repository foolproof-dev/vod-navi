import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import DiagnoseForm from './components/DiagnoseForm';
import ResultDisplay from './components/ResultDisplay';
import ServiceDetailTemplate from './components/ServiceDetailTemplate';
import vodServices from './data/vodServices';
import SearchForm from './components/SearchForm';
import SearchPage from './components/SearchPage'; // SearchPageをインポート

// 仮のコンポーネント
const HomePage = () => (
  <div>
    <h1>VODナビ / VOD-Navi</h1>
    <p>あなたにぴったりの動画配信サービスを見つけよう！</p>

    <SearchForm />

    <h2>VOD診断を始める</h2>
    <nav>
      <Link to="/diagnose" className="diagnosis-button">Start Diagnosis</Link>
    </nav>

    <h2>気になるVODサービスから探す</h2>
    <div className="service-list">
      {vodServices.map(service => (
        <Link to={`/service/${service.id}`} key={service.id} className="service-card">
          {/* <img src={service.logo} alt={`${service.name} Logo`} /> */}
          <h3>{service.name}</h3>
        </Link>
      ))}
    </div>
  </div>
);

function App() {
  return (
    <>
      <header className="site-header">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/diagnose">Diagnose</Link></li>
            <li><Link to="/search">Search</Link></li> {/* 検索ページへのリンクを追加 */}
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/diagnose" element={<DiagnoseForm />} />
        <Route path="/result" element={<ResultDisplay />} />
        <Route path="/service/:id" element={<ServiceDetailTemplate />} />
        <Route path="/search" element={<SearchPage />} /> {/* 検索ページ用のルートを追加 */}
      </Routes>
    </>
  );
}

export default App;
