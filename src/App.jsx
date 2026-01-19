import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import MarkerDetailPage from './components/MarkerDetailPage';

import StartScreen from './components/StartScreen';
import Vocabulary from './components/Vocabulary';
import Markers from './components/Markers';
import Quiz from './components/Quiz';
import QuizMenu from './components/QuizMenu';
import QuizFillBlank from './components/QuizFillBlank';
import QuizMultipleChoice from './components/QuizMultipleChoice';
import QuizSentenceConstruction from './components/QuizSentenceConstruction';
import QuizPictureMatching from './components/QuizPictureMatching';
import Login from './components/Login';
import Register from './components/Register';
import VocabularyDetailPage from './components/VocabularyDetailPage';
import './App.css';

function AppContent() {
  const musicRef = useRef(null);
  const [musicStarted, setMusicStarted] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(true);
  const [vocabIndex, setVocabIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const totalWords = 15;

  const toggleMusic = () => {
    if (musicPlaying) {
      if (musicRef.current) {
        musicRef.current.pause();
      }
      setMusicPlaying(false);
    } else {
      if (musicRef.current) {
        musicRef.current.play();
      }
      setMusicPlaying(true);
    }
  };

  useEffect(() => {
    let hasPlayedMusic = false;

    const playMusic = () => {
      if (musicRef.current && !hasPlayedMusic) {
        musicRef.current.volume = 1;
        musicRef.current.play().then(() => {
          hasPlayedMusic = true;
          setMusicPlaying(true);
          // Remove listeners after successful play
          document.removeEventListener('click', playMusic);
          document.removeEventListener('touchstart', playMusic);
        }).catch(() => {
          // Silently handle play error
        });
      }
    };

    // Fallback: play on user interaction
    document.addEventListener('click', playMusic);
    document.addEventListener('touchstart', playMusic);

    return () => {
      document.removeEventListener('click', playMusic);
      document.removeEventListener('touchstart', playMusic);
    };
  }, []);

  useEffect(() => {
    if (musicRef.current) {
      if (musicPlaying) {
        musicRef.current.play().catch(() => {});
      } else {
        musicRef.current.pause();
      }
    }
  }, [musicPlaying])



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
      <audio ref={musicRef} loop style={{ display: 'none' }}>
        <source src="/asset/ref/music.mp3" type="audio/mpeg" />
      </audio>
      <button
        onClick={toggleMusic}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          background: musicPlaying ? '#fff57e' : '#26ccc2',
          color: musicPlaying ? '#26ccc2' : '#fff',
          border: '2px solid #fff57e',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          fontSize: '24px',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'all 0.3s',
          boxShadow: '0 0 12px rgba(255, 183, 108, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
        }}
        title={musicPlaying ? 'Pause music' : 'Play music'}
      >
        {musicPlaying ? '🔊' : '🔇'}
      </button>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/vocabulary" element={<Vocabulary key={vocabIndex} initialIndex={vocabIndex} onIndexChange={setVocabIndex} />} />
        <Route path="/vocabulary/:vocabId" element={<VocabularyDetailPage />} />
        <Route path="/markers" element={<Markers />} />

        <Route path="/marker/:markerId" element={<MarkerDetailPage />} />
        <Route path="/quiz-menu" element={<QuizMenu />} />
        <Route path="/quiz-fill-blank" element={<QuizFillBlank />} />
        <Route path="/quiz-multiple-choice" element={<QuizMultipleChoice />} />
        <Route path="/quiz-sentence-construction" element={<QuizSentenceConstruction />} />
        <Route path="/quiz-picture-matching" element={<QuizPictureMatching />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
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