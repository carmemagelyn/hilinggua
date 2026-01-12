import React, { useState } from "react";
import markersSentences from "../data/markersSentences";
import "../style.css";
import { useNavigate } from "react-router-dom";


// Utility to create a fill-in-the-blank version of a sentence
function makeFillBlank(sentence) {
  const words = sentence.split(" ");
  if (words.length < 3) return sentence;
  // Hide a random word (not first or last)
  const blankIndex = Math.floor(Math.random() * (words.length - 2)) + 1;
  const answer = words[blankIndex];
  const display = words.map((w, i) => (i === blankIndex ? "______" : w)).join(" ");
  return { display, answer };
}

export default function QuizFillBlank() {
  const navigate = useNavigate();
  const quizData = markersSentences.filter(q => q.sentence && q.sentence.trim().length > 0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  if (quizData.length === 0) return <div>No quiz data available.</div>;

  const { display, answer } = makeFillBlank(quizData[quizIndex].sentence);

  const handleNext = () => {
    setQuizIndex((prev) => (prev + 1) % quizData.length);
    setUserAnswer("");
    setFeedback("");
    setShowAnswer(false);
  };

  const handleCheck = () => {
    if (userAnswer.trim().toLowerCase() === answer.trim().toLowerCase()) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Try again or show answer.");
    }
  };

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "url('/asset/ref/beebg.jpg') center center/cover no-repeat" }}>
      <div style={{ background: "rgba(255,255,255,0.8)", borderRadius: 24, padding: 32, boxShadow: "0 4px 24px rgba(0,0,0,0.08)", textAlign: "center", maxWidth: 500 }}>
        <h2 style={{ color: "#26ccc2", fontWeight: 800, fontSize: 28, marginBottom: 24 }}>Fill in the Blank</h2>
        <div style={{ fontSize: 22, marginBottom: 24, color: "#222", fontWeight: 600 }}>{display}</div>
        <input
          type="text"
          value={userAnswer}
          onChange={e => setUserAnswer(e.target.value)}
          placeholder="Type the missing word"
          style={{ fontSize: 20, padding: "10px 18px", borderRadius: 12, border: "2px solid #26ccc2", outline: "none", marginBottom: 16, width: "70%" }}
        />
        <div style={{ marginBottom: 16 }}>
          <button className="tab-button" style={{ marginRight: 16 }} onClick={handleCheck}>Check</button>
          <button className="tab-button" onClick={() => setShowAnswer(true)}>Show Answer</button>
        </div>
        {feedback && <div style={{ fontSize: 18, color: feedback.startsWith("✅") ? "#26ccc2" : "#ff4d4f", marginBottom: 8 }}>{feedback}</div>}
        {showAnswer && <div style={{ fontSize: 18, color: "#ffb76c" }}>Answer: <b>{answer}</b></div>}
        <button className="tab-button" style={{ marginTop: 32 }} onClick={handleNext}>Next</button>

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
