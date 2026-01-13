import React, { useState } from "react";
import markersSentences from "../data/markersSentences";
import "../style.css";
import { useNavigate } from "react-router-dom";

// This is a placeholder for picture matching. In a real app, each quiz item would have an image URL.
// For now, we'll use a static image and match to the sentence/word.
const demoImages = [
  "/asset/ref/quizcallout.png",
  "/asset/ref/blinkhappy.gif",
  "/asset/ref/markerquote.png"
];

export default function QuizPictureMatching() {
  const navigate = useNavigate();
  const quizData = markersSentences.filter(q => q.sentence && q.sentence.trim().length > 0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  // For demo: cycle through demoImages, match to sentence index
  const image = demoImages[quizIndex % demoImages.length];
  const correct = quizData[quizIndex]?.sentence || "";
  // For demo: pick 3 random other sentences as distractors
  const distractors = quizData
    .filter((q, i) => i !== quizIndex)
    .map(q => q.sentence)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
  const choices = [correct, ...distractors].sort(() => 0.5 - Math.random());

  const handleNext = () => {
    setQuizIndex((prev) => (prev + 1) % quizData.length);
    setSelected(null);
    setFeedback("");
    setShowAnswer(false);
  };

  const handleCheck = () => {
    if (selected === correct) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Try again or show answer.");
    }
  };

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "url('/asset/ref/beebg.jpg') center center/cover no-repeat" }}>
      <div style={{ background: "rgba(255,255,255,0.8)", borderRadius: 24, padding: 32, boxShadow: "0 4px 24px rgba(0,0,0,0.08)", textAlign: "center", maxWidth: 600 }}>
        <h2 style={{ color: "#26ccc2", fontWeight: 800, fontSize: 28, marginBottom: 24 }}>Picture Matching</h2>
        <img src={image} alt="Quiz visual" style={{ width: 220, height: 'auto', marginBottom: 24, borderRadius: 16, boxShadow: '0 2px 12px #0002' }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 16 }}>
          {choices.map((choice, idx) => (
            <button
              key={idx}
              className="tab-button"
              style={{
                background: selected === choice ? '#fff57e' : 'rgba(255,255,255,0.7)',
                color: selected === choice ? '#26ccc2' : '#222',
                fontWeight: 700,
                fontSize: 20,
                border: '2px solid #26ccc2',
                borderRadius: 12,
                padding: '10px 0',
                cursor: 'pointer',
                transition: 'background 0.2s, color 0.2s',
              }}
              onClick={() => setSelected(choice)}
              disabled={!!feedback}
            >
              {choice}
            </button>
          ))}
        </div>
        <div style={{ marginBottom: 16 }}>
          <button className="tab-button" style={{ marginRight: 16 }} onClick={handleCheck} disabled={selected === null}>Check</button>
          <button className="tab-button" onClick={() => setShowAnswer(true)}>Show Answer</button>
        </div>
        {feedback && <div style={{ fontSize: 18, color: feedback.startsWith("✅") ? "#26ccc2" : "#ff4d4f", marginBottom: 8 }}>{feedback}</div>}
        {showAnswer && <div style={{ fontSize: 18, color: "#ffb76c" }}>Answer: <b>{correct}</b></div>}
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
