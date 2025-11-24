import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './components/HeroSection.css';
import DiagnoseForm from './components/DiagnoseForm';
import ResultDisplay from './components/ResultDisplay';
import ServiceDetailTemplate from './components/ServiceDetailTemplate';
import vodServices from './data/vodServices';
import SearchForm from './components/SearchForm';
import SearchPage from './components/SearchPage'; // SearchPageをインポート
import ScrollToTop from './components/ScrollToTop'; // ScrollToTopをインポート
import PrivacyPolicy from './components/PrivacyPolicy'; // PrivacyPolicyをインポート
import TermsOfService from './components/TermsOfService'; // TermsOfServiceをインポート
import ContactPage from './components/ContactPage'; // ContactPageをインポート

// ホームページコンポーネント
const HomePage = () => {
  const [userCount, setUserCount] = useState(0);
  const targetCount = 15280; // 目標の利用者数

  // カウントアップアニメーション
  useEffect(() => {
    const duration = 2000; // 2秒
    const steps = 60;
    const increment = targetCount / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setUserCount(targetCount);
        clearInterval(timer);
      } else {
        setUserCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <section className="hero-section">
        <div className="hero-badge">🎬 VOD選びの新常識</div>
        <div className="site-brand animate-fade-in">VOD-Navi</div>
        <h1 className="animate-slide-up">
          あなたにぴったりのVODが<br />
          <span className="highlight-text">30秒</span>で見つかる
        </h1>
        <p className="hero-sub animate-slide-up-delay">
          「どれを選べばいいかわからない…」<br />
          そんな悩みは、もう終わり。<br />
          <strong>無駄なサブスク代を払うのはやめましょう。</strong>
        </p>

        {/* 利用者数カウンター */}
        <div className="user-count-badge animate-fade-in-delay">
          <div className="count-number">{userCount.toLocaleString()}</div>
          <div className="count-label">人が利用中</div>
        </div>

        <div className="cta-group animate-slide-up-delay-2">
          <Link to="/diagnose" className="diagnosis-button cta-pulse">
            <span className="button-icon">🎯</span>
            今すぐ無料診断を始める
            <span className="button-subtitle">たった30秒で完了</span>
          </Link>
          <Link to="/search" className="search-button">
            <span className="button-icon">🔍</span>
            作品名で検索する
          </Link>
        </div>

        {/* 3つの特徴 */}
        <div className="hero-features animate-fade-in-delay-2">
          <div className="feature-item">
            <div className="feature-icon">⚡</div>
            <div className="feature-text">30秒で診断完了</div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">💰</div>
            <div className="feature-text">完全無料</div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🎯</div>
            <div className="feature-text">ピッタリが見つかる</div>
          </div>
        </div>
      </section>

      <h2 className="section-title">気になるVODサービスから探す</h2>
      <div className="service-list">
        {vodServices.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-card-header">
              <h3>{service.name}</h3>
              <p className="service-catchphrase">{service.catchphrase}</p>
            </div>

            <div className="service-price">
              <span className="price-label">月額</span>
              <span className="price-amount">
                {service.monthly_fee.basic || service.monthly_fee.standard}円
              </span>
              {service.monthly_fee.basic && service.monthly_fee.standard && (
                <span className="price-from">〜</span>
              )}
            </div>

            <Link to={`/service/${service.id}`} className="service-cta-button">
              詳細を見る
              <span className="arrow">→</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <p className="affiliate-disclosure">当サイトは、サービス紹介の一部でアフィリエイトプログラムを利用しています。</p>
        <div className="footer-links">
          <Link to="/privacy-policy">プライバシーポリシー</Link>
          <Link to="/terms-of-service">利用規約</Link>
          <Link to="/contact">お問い合わせ</Link>
        </div>
        <p>&copy; {new Date().getFullYear()} VOD-Navi. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
