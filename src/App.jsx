import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import DiagnoseForm from './components/DiagnoseForm';
import ResultDisplay from './components/ResultDisplay';
import ServiceDetailTemplate from './components/ServiceDetailTemplate';
import vodServices from './data/vodServices';
import SearchForm from './components/SearchForm';

// 仮のコンポーネント
const HomePage = () => (
  <div>
    <h1>VODナビ / VOD-Navi</h1>
    <p>あなたにぴったりの動画配信サービスを見つけよう！</p>

    <SearchForm />

    <nav>
      <Link to="/diagnose">Start Diagnosis</Link>
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
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/diagnose" element={<DiagnoseForm />} />
        <Route path="/result" element={<ResultDisplay />} />
        <Route path="/service/:id" element={<ServiceDetailTemplate />} />
      </Routes>
    </>
  );
}

export default App;
