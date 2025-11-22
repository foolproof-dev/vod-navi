
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import DiagnoseForm from './components/DiagnoseForm';
import ResultDisplay from './components/ResultDisplay';
import ServiceDetailTemplate from './components/ServiceDetailTemplate';
import vodServices from './data/vodServices';
import SearchForm from './components/SearchForm';
import SearchPage from './components/SearchPage'; // SearchPageをインポート
import ScrollToTop from './components/ScrollToTop'; // ScrollToTopをインポート

// 仮のコンポーネント
// 仮のコンポーネント
const HomePage = () => (
  <div>
    <section className="hero-section">
      <div className="site-brand">VOD-Navi</div>
      <h1>あなたにぴったりのVODが<br />30秒で見つかる</h1>
      <p className="hero-sub">「どれを選べばいいかわからない…」<br />そんな悩みは、もう終わり。無駄なサブスク代を払うのはやめましょう。</p>
      <div className="cta-group">
        <Link to="/diagnose" className="diagnosis-button cta-pulse">
          今すぐ無料診断を始める
        </Link>
        <div className="search-link-container">
          <Link to="/search" className="text-link">
            自分で検索する &rarr;
          </Link>
        </div>
      </div>
    </section>

    <h2 className="section-title">気になるVODサービスから探す</h2>
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
      <ScrollToTop />
      <header className="site-header">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/diagnose">Diagnose</Link></li>
            <li><Link to="/search">Search</Link></li>
          </ul>
        </nav>
      </header>

      <main className="site-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/diagnose" element={<DiagnoseForm />} />
          <Route path="/result" element={<ResultDisplay />} />
          <Route path="/service/:id" element={<ServiceDetailTemplate />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} VOD-Navi. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
