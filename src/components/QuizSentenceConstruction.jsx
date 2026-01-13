import React, { useState, useEffect } from "react";
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
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [shuffledOrder, setShuffledOrder] = useState([]);

  useEffect(() => {
    // Shuffle the sentences on component mount
    const shuffled = [...quizData].sort(() => 0.5 - Math.random());
    setShuffledOrder(shuffled);
  }, []);

  if (shuffledOrder.length === 0) return <div>Loading...</div>;

  const current = shuffledOrder[quizIndex % shuffledOrder.length];
  const correctSentence = current.sentence.trim();
  const words = correctSentence.split(" ");
  const scrambled = shuffleArray(words);

  const handleCheck = () => {
    if (userInput.trim() === correctSentence) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Wrong answer. Try again or show the answer.");
    }
  };

  const handleTryAgain = () => {
    setUserInput("");
    setFeedback("");
    setShowAnswer(false);
  };

  const handleNext = () => {
    setQuizIndex((prev) => (prev + 1) % shuffledOrder.length);
    setUserInput("");
    setFeedback("");
    setShowAnswer(false);
  };

  const handleShowAnswer = () => setShowAnswer(true);

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "url('/asset/ref/beebg.jpg') center center/cover no-repeat" }}>
      <div style={{ background: "rgba(255,255,255,0.8)", borderRadius: 24, padding: 32, boxShadow: "0 4px 24px rgba(0,0,0,0.08)", textAlign: "center", maxWidth: 600 }}>
        <h2 style={{ color: "#26ccc2", fontWeight: 800, fontSize: 28, marginBottom: 24 }}>Sentence Construction</h2>
        
        {/* Image */}
        {current.image && (
          <div style={{ marginBottom: 24, display: "flex", justifyContent: "center" }}>
            <img 
              src={current.image} 
              alt="sentence illustration" 
              style={{ maxWidth: "100%", maxHeight: 300, borderRadius: 12, objectFit: "cover" }}
            />
          </div>
        )}
        
      
        
        <div style={{ fontSize: 18, marginBottom: 24, color: "#666", fontWeight: 600 }}>Arrange the words to form the correct sentence:</div>
        
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 24, justifyContent: "center", padding: "16px", background: "rgba(38, 204, 194, 0.1)", borderRadius: 12 }}>
          {scrambled.map((word, idx) => (
            <button
              key={idx}
              style={{
                fontSize: 16,
                borderRadius: 8,
                padding: '8px 14px',
                border: '2px solid #26ccc2',
                background: '#fff',
                color: '#26ccc2',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onClick={() => setUserInput(prev => prev ? prev + " " + word : word)}
            >
              {word}
            </button>
          ))}
        </div>

        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type the sentence here or click words above"
          style={{
            width: "100%",
            fontSize: 16,
            padding: "12px 16px",
            border: "2px solid #fff57e",
            borderRadius: 12,
            marginBottom: 16,
            boxSizing: "border-box",
            fontFamily: "inherit",
          }}
        />

        <div style={{ marginBottom: 16, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button 
            style={{
              background: '#26ccc2',
              color: '#fff',
              fontWeight: 700,
              fontSize: 16,
              border: '2px solid #26ccc2',
              borderRadius: 12,
              padding: '10px 24px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onClick={handleCheck}
            disabled={!userInput.trim()}
          >
            Check
          </button>
          <button 
            style={{
              background: '#fff57e',
              color: '#222',
              fontWeight: 700,
              fontSize: 16,
              border: '2px solid #fff57e',
              borderRadius: 12,
              padding: '10px 24px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onClick={handleShowAnswer}
            disabled={showAnswer}
          >
            Show Answer
          </button>
        </div>

        {feedback && (
          <div style={{ fontSize: 18, color: feedback.startsWith("✅") ? "#26ccc2" : "#ff4d4f", marginBottom: 16, fontWeight: 700 }}>
            {feedback}
          </div>
        )}

        {feedback.startsWith("❌") && (
          <button 
            style={{
              background: '#fff57e',
              color: '#222',
              fontWeight: 700,
              fontSize: 16,
              border: '2px solid #fff57e',
              borderRadius: 12,
              padding: '10px 24px',
              cursor: 'pointer',
              marginRight: 12,
              marginBottom: 16,
              transition: 'all 0.2s',
            }}
            onClick={handleTryAgain}
          >
            Try Again
          </button>
        )}

        {showAnswer && (
          <div style={{ fontSize: 16, color: "#ffb76c", marginBottom: 16, fontWeight: 700, padding: "12px", background: "rgba(255, 183, 108, 0.1)", borderRadius: 8 }}>
            Answer: <b>{correctSentence}</b>
            <div style={{ fontSize: 14, color: "#666", marginTop: 8, fontWeight: 500 }}>{current.translation}</div>
          </div>
        )}

        {(feedback.startsWith("✅") || showAnswer) && (
          <button 
            style={{
              background: '#26ccc2',
              color: '#fff',
              fontWeight: 700,
              fontSize: 16,
              border: '2px solid #26ccc2',
              borderRadius: 12,
              padding: '10px 24px',
              cursor: 'pointer',
              marginTop: 16,
              transition: 'all 0.2s',
            }}
            onClick={handleNext}
          >
            Next
          </button>
        )}
      </div>
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
    </main>
  );
}
