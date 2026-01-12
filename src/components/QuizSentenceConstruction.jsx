import React, { useState } from "react";
import markersSentences from "../data/markersSentences";
import "../style.css";
import { useNavigate } from "react-router-dom";

// Utility to shuffle words in a sentence
function shuffleArray(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function QuizSentenceConstruction() {
  const navigate = useNavigate();
  const quizData = markersSentences.filter(q => q.sentence && q.sentence.trim().length > 0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  if (quizData.length === 0) return <div>No quiz data available.</div>;

  const sentence = quizData[quizIndex].sentence;
  const words = sentence.split(" ");
  const scrambled = shuffleArray(words);

  const handleWordClick = (word, idx) => {
    if (selectedWords.includes(idx)) return;
    setSelectedWords([...selectedWords, idx]);
    setFeedback("");
  };

  const handleCheck = () => {
    const constructed = selectedWords.map(i => scrambled[i]).join(" ");
    if (constructed.trim() === sentence.trim()) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Try again or show answer.");
    }
  };

  const handleNext = () => {
    setQuizIndex((prev) => (prev + 1) % quizData.length);
    setSelectedWords([]);
    setFeedback("");
    setShowAnswer(false);
  };

  const handleShowAnswer = () => setShowAnswer(true);

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "url('/asset/ref/beebg.jpg') center center/cover no-repeat" }}>
      <div style={{ background: "rgba(255,255,255,0.8)", borderRadius: 24, padding: 32, boxShadow: "0 4px 24px rgba(0,0,0,0.08)", textAlign: "center", maxWidth: 600 }}>
        <h2 style={{ color: "#26ccc2", fontWeight: 800, fontSize: 28, marginBottom: 24 }}>Sentence Construction</h2>
        <div style={{ fontSize: 22, marginBottom: 24, color: "#222", fontWeight: 600 }}>Arrange the words to form the correct sentence:</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 24, justifyContent: "center" }}>
          {scrambled.map((word, idx) => (
            <button
              key={idx}
              className="tab-button"
              style={{
                opacity: selectedWords.includes(idx) ? 0.3 : 1,
                pointerEvents: selectedWords.includes(idx) ? 'none' : 'auto',
                fontSize: 20,
                borderRadius: 10,
                padding: '8px 18px',
                border: '2px solid #26ccc2',
                background: '#fff',
                color: '#26ccc2',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'opacity 0.2s',
              }}
              onClick={() => handleWordClick(word, idx)}
            >
              {word}
            </button>
          ))}
        </div>
        <div style={{ fontSize: 22, marginBottom: 16, color: '#222', fontWeight: 600, minHeight: 32 }}>
          {selectedWords.length > 0 && selectedWords.map(i => scrambled[i]).join(' ')}
        </div>
        <div style={{ marginBottom: 16 }}>
          <button className="tab-button" style={{ marginRight: 16 }} onClick={handleCheck} disabled={selectedWords.length !== words.length}>Check</button>
          <button className="tab-button" onClick={handleShowAnswer}>Show Answer</button>
        </div>
        {feedback && <div style={{ fontSize: 18, color: feedback.startsWith("✅") ? "#26ccc2" : "#ff4d4f", marginBottom: 8 }}>{feedback}</div>}
        {showAnswer && <div style={{ fontSize: 18, color: "#ffb76c" }}>Answer: <b>{sentence}</b></div>}
        <button className="tab-button" style={{ marginTop: 32 }} onClick={handleNext}>Next</button>
      {/* Left arrow back button */}
      <button
        onClick={() => navigate("/quiz-menu")}
        style={{
          position: 'fixed',
          top: 24,
          left: 18,
          zIndex: 200,
          background: 'rgba(255,255,255,0.85)',
          border: 'none',
          borderRadius: '50%',
          width: 48,
          height: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 16px 4px #fff, 0 0 32px 8px #fff57e88',
          cursor: 'pointer',
          padding: 0,
          outline: 'none',
          transition: 'box-shadow 0.2s',
        }}
        aria-label="Back to Home"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline points="14,5 7,11 14,17" stroke="#222" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </button>
      </div>
    </main>
  );
}
