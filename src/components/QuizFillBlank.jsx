import React, { useState } from "react";
// import markersSentences from "../data/markersSentences";
import "../style.css";
import { useNavigate } from "react-router-dom";



// Static contextual fill-in-the-blank questions
const fillBlankQuestions = [
  {
    sentence: "___ bata naga kaon sang saging.",
    options: ["Ang", "Sang", "Sa"],
    answer: "Ang",
    translation: "The child is eating a banana."
  },
  {
    sentence: "Naga ___ ang manok sa kahoy.",
    options: ["kaon", "lupad", "tulog"],
    answer: "lupad",
    translation: "The chicken is flying in the tree."
  }
];


export default function QuizFillBlank() {
  const navigate = useNavigate();
  const [quizIndex, setQuizIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const current = fillBlankQuestions[quizIndex];

  const handleNext = () => {
    setQuizIndex((prev) => (prev + 1) % fillBlankQuestions.length);
    setSelected(null);
    setFeedback("");
    setShowAnswer(false);
  };

  const handleCheck = () => {
    if (selected === current.answer) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Try again or show answer.");
    }
  };

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "url('/asset/ref/beebg.jpg') center center/cover no-repeat" }}>
      <div style={{ background: "rgba(255,255,255,0.8)", borderRadius: 24, padding: 32, boxShadow: "0 4px 24px rgba(0,0,0,0.08)", textAlign: "center", maxWidth: 500 }}>
        <h2 style={{ color: "#26ccc2", fontWeight: 800, fontSize: 28, marginBottom: 24 }}>Fill in the Blank (Contextual)</h2>
        <div style={{ fontSize: 22, marginBottom: 24, color: "#222", fontWeight: 600 }}>{current.sentence}</div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 16, marginBottom: 24 }}>
          {current.options.map((option, idx) => (
            <button
              key={idx}
              className="tab-button"
              style={{
                background: selected === option ? '#fff57e' : 'rgba(255,255,255,0.7)',
                color: selected === option ? '#26ccc2' : '#222',
                fontWeight: 700,
                fontSize: 20,
                border: '2px solid #26ccc2',
                borderRadius: 12,
                padding: '10px 18px',
                cursor: 'pointer',
                transition: 'background 0.2s, color 0.2s',
              }}
              onClick={() => setSelected(option)}
              disabled={!!feedback}
            >
              {option}
            </button>
          ))}
        </div>
        <div style={{ marginBottom: 16 }}>
          <button className="tab-button" style={{ marginRight: 16 }} onClick={handleCheck} disabled={selected === null}>Check</button>
          <button className="tab-button" onClick={() => setShowAnswer(true)}>Show Answer</button>
        </div>
        {feedback && <div style={{ fontSize: 18, color: feedback.startsWith("✅") ? "#26ccc2" : "#ff4d4f", marginBottom: 8 }}>{feedback}</div>}
        {showAnswer && <div style={{ fontSize: 18, color: "#ffb76c" }}>Answer: <b>{current.answer}</b></div>}
        <div style={{ fontSize: 16, color: '#888', marginTop: 12 }}>English: {current.translation}</div>
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
