import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Vocabulary from './components/Vocabulary';
import Markers from './components/Markers';
import Quiz from './components/Quiz';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function AppContent() {
  const [vocabIndex, setVocabIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const totalWords = 15;

  const handlePrevious = () => {
    setVocabIndex(prev => prev === 0 ? totalWords - 1 : prev - 1);
  };

  const handleNext = () => {
    setVocabIndex(prev => prev === totalWords - 1 ? 0 : prev + 1);
  };

  const isVocabularyPage = location.pathname === '/vocabulary';

  // Detect mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <div className="App">
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        background: 'linear-gradient(135deg, #26ccc2 0%, #6aece1 100%)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', background: 'none', boxShadow: 'none', border: 'none' }}>
          <img 
            src="/asset/ref/logo.png" 
            alt="Logo" 
            style={{ 
              height: '96px', 
              width: '96px',
              background: 'none',
              boxShadow: 'none',
              border: 'none',
              padding: 0,
              margin: 0
            }} 
          />
          <span style={{
            marginLeft: 22,
            fontWeight: 800,
            fontSize: '3em',
            color: '#fff57e',
            letterSpacing: '1px',
            lineHeight: 1,
            fontFamily: 'inherit',
            textShadow: '0 2px 8px #26ccc299'
          }}>
            Hilinggua
          </span>
        </Link>

        {/* Hamburger for mobile */}
        <div className="nav-hamburger" style={{ display: 'none', marginLeft: 18 }}>
          <button
            aria-label="Open menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: 48,
              width: 48,
            }}
            onClick={() => setMenuOpen(m => !m)}
          >
            <span style={{
              width: 32,
              height: 4,
              background: '#fff57e',
              borderRadius: 2,
              marginBottom: 6,
              display: 'block',
              transition: '0.3s',
            }} />
            <span style={{
              width: 32,
              height: 4,
              background: '#fff57e',
              borderRadius: 2,
              marginBottom: 6,
              display: 'block',
              transition: '0.3s',
            }} />
            <span style={{
              width: 32,
              height: 4,
              background: '#fff57e',
              borderRadius: 2,
              display: 'block',
              transition: '0.3s',
            }} />
          </button>
        </div>

        {/* Desktop nav links */}
        <div className="nav-links" style={{ display: 'flex', gap: '18px', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
          <Link 
            to="/vocabulary"
            style={{
              color: location.pathname === '/vocabulary' ? '#fff57e' : 'white',
              fontWeight: location.pathname === '/vocabulary' ? '700' : '600',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              fontSize: '1.08em',
              padding: '8px 18px',
              borderRadius: '10px',
              border: location.pathname === '/vocabulary' ? '2px solid #fff57e' : '2px solid transparent',
              background: location.pathname === '/vocabulary' ? 'rgba(255,245,126,0.18)' : 'transparent',
              boxShadow: location.pathname === '/vocabulary' ? '0 1px 4px #fff57e33' : 'none',
            }}
          >
            Vocabulary
          </Link>
          <Link 
            to="/markers"
            style={{
              color: location.pathname === '/markers' ? '#fff57e' : 'white',
              fontWeight: location.pathname === '/markers' ? '700' : '600',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              fontSize: '1.08em',
              padding: '8px 18px',
              borderRadius: '10px',
              border: location.pathname === '/markers' ? '2px solid #fff57e' : '2px solid transparent',
              background: location.pathname === '/markers' ? 'rgba(255,245,126,0.18)' : 'transparent',
              boxShadow: location.pathname === '/markers' ? '0 1px 4px #fff57e33' : 'none',
            }}
          >
            Markers
          </Link>
          <Link 
            to="/quiz"
            style={{
              color: location.pathname === '/quiz' ? '#fff57e' : 'white',
              fontWeight: location.pathname === '/quiz' ? '700' : '600',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              fontSize: '1.08em',
              padding: '8px 18px',
              borderRadius: '10px',
              border: location.pathname === '/quiz' ? '2px solid #fff57e' : '2px solid transparent',
              background: location.pathname === '/quiz' ? 'rgba(255,245,126,0.18)' : 'transparent',
              boxShadow: location.pathname === '/quiz' ? '0 1px 4px #fff57e33' : 'none',
            }}
          >
            Quiz
          </Link>
        </div>

        {/* Mobile nav menu as modal */}
        {menuOpen && (
          <div className="mobile-menu-modal" onClick={() => setMenuOpen(false)}>
            <div className="mobile-menu-dropdown" onClick={e => e.stopPropagation()}>
              <Link to="/vocabulary" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>Vocabulary</Link>
              <Link to="/markers" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>Markers</Link>
              <Link to="/quiz" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>Quiz</Link>
            </div>
          </div>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vocabulary" element={<Vocabulary key={vocabIndex} initialIndex={vocabIndex} onIndexChange={setVocabIndex} />} />
        <Route path="/markers" element={<Markers />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* Responsive hamburger logic */}
      <style>{`
        @media (max-width: 900px) {
          .nav-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 901px) {
          .mobile-nav-menu { display: none !important; }
        }
      `}</style>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;