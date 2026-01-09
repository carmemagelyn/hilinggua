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
  const location = useLocation();
  const totalWords = 15;

  const handlePrevious = () => {
    setVocabIndex(prev => prev === 0 ? totalWords - 1 : prev - 1);
  };

  const handleNext = () => {
    setVocabIndex(prev => prev === totalWords - 1 ? 0 : prev + 1);
  };

  const isVocabularyPage = location.pathname === '/vocabulary';

  return (
    <div className="App">
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '15px 20px',
        background: 'linear-gradient(135deg, #26ccc2 0%, #6aece1 100%)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
      }}>
        <Link to="/">
          <img 
            src="/asset/ref/logo.png" 
            alt="Logo" 
            style={{ 
              height: '64px', 
              width: '64px'
            }} 
          />
        </Link>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
          <Link 
            to="/vocabulary"
            style={{
              color: location.pathname === '/vocabulary' ? '#fff57e' : 'white',
              fontWeight: location.pathname === '/vocabulary' ? '700' : '600',
              transition: 'all 0.3s ease',
              textDecoration: 'none'
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
              textDecoration: 'none'
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
              textDecoration: 'none'
            }}
          >
            Quiz
          </Link>
          {/* 
          <Link 
            to="/login"
            style={{
              color: location.pathname === '/login' ? '#fff57e' : 'white',
              fontWeight: location.pathname === '/login' ? '700' : '600',
              transition: 'all 0.3s ease',
              textDecoration: 'none'
            }}
          >
            Login
          </Link>
          <Link 
            to="/register"
            style={{
              color: location.pathname === '/register' ? '#fff57e' : 'white',
              fontWeight: location.pathname === '/register' ? '700' : '600',
              transition: 'all 0.3s ease',
              textDecoration: 'none'
            }}
          >
            Register
          </Link>
           */}
        </div>

       
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vocabulary" element={<Vocabulary key={vocabIndex} initialIndex={vocabIndex} onIndexChange={setVocabIndex} />} />
        <Route path="/markers" element={<Markers />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
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