import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import MarkerDetailPage from './components/MarkerDetailPage';

import StartScreen from './components/StartScreen';
import Vocabulary from './components/Vocabulary';
import Markers from './components/Markers';
import Quiz from './components/Quiz';
import Login from './components/Login';
import Register from './components/Register';
import VocabularyDetailPage from './components/VocabularyDetailPage';
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
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/vocabulary" element={<Vocabulary key={vocabIndex} initialIndex={vocabIndex} onIndexChange={setVocabIndex} />} />
        <Route path="/vocabulary/:vocabId" element={<VocabularyDetailPage />} />
        <Route path="/markers" element={<Markers />} />

        <Route path="/marker/:markerId" element={<MarkerDetailPage />} />
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