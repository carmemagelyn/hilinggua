import React, { useState } from "react";
import markersSentences from "../data/markersSentences";
import "../style.css";
import { useNavigate } from "react-router-dom";

// Utility to generate a multiple choice question
function makeMultipleChoice(sentence, allSentences) {
  const words = sentence.split(" ");
  if (words.length < 3) return { question: sentence, answer: sentence, choices: [sentence] };
  // Hide a random word (not first or last)
  const blankIndex = Math.floor(Math.random() * (words.length - 2)) + 1;
  const answer = words[blankIndex];
  const question = words.map((w, i) => (i === blankIndex ? "______" : w)).join(" ");
  // Collect distractors from other sentences
  const distractors = allSentences
    .map(s => s.split(" ")[blankIndex])
    .filter(w => w && w !== answer && w.length > 2)
    .slice(0, 10);
  // Shuffle and pick 3 distractors
  const shuffled = distractors.sort(() => 0.5 - Math.random());
  const choices = [answer, ...shuffled.filter((w, i, arr) => arr.indexOf(w) === i).slice(0, 3)];
  // Shuffle choices
  for (let i = choices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [choices[i], choices[j]] = [choices[j], choices[i]];
  }
  return { question, answer, choices };
}

export default function QuizMultipleChoice() {
  const navigate = useNavigate();
  const quizData = markersSentences.filter(q => q.sentence && q.sentence.trim().length > 0);
  const allSentences = quizData.map(q => q.sentence);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  if (quizData.length === 0) return <div>No quiz data available.</div>;

  const { question, answer, choices } = makeMultipleChoice(quizData[quizIndex].sentence, allSentences);

  const handleNext = () => {
    setQuizIndex((prev) => (prev + 1) % quizData.length);
    setSelected(null);
    setFeedback("");
    setShowAnswer(false);
  };

  const handleCheck = () => {
    if (selected === answer) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Try again or show answer.");
    }
  };

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "url('/asset/ref/beebg.jpg') center center/cover no-repeat" }}>
      <div style={{ background: "rgba(255,255,255,0.8)", borderRadius: 24, padding: 32, boxShadow: "0 4px 24px rgba(0,0,0,0.08)", textAlign: "center", maxWidth: 500 }}>
        <h2 style={{ color: "#26ccc2", fontWeight: 800, fontSize: 28, marginBottom: 24 }}>Multiple Choice</h2>
        <div style={{ fontSize: 22, marginBottom: 24, color: "#222", fontWeight: 600 }}>{question}</div>
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
          <button className="tab-button" 
          style={{ marginRight: 16,
          background: '#26ccc2',
          color: '#222',
          fontWeight: 700,
          fontSize: 11,
           }} 
          onClick={handleCheck} disabled={selected === null}>Check</button>

          <button className="tab-button" 
          style={{ marginRight: 16,
          background: '#ff4d4f',
          color: '#fff',
          fontWeight: 700,
          fontSize: 11,
           }} 
          onClick={() => setShowAnswer(true)}>Show Answer</button>
        </div>
        
        {feedback && <div style={{ fontSize: 18, color: feedback.startsWith("✅") ? "#26ccc2" : "#ff4d4f", marginBottom: 8 }}>{feedback}</div>}

        {showAnswer && <div style={{ fontSize: 18, color: "#000000ff" }}>Answer: <b>{answer}</b></div>}
        <div style={{ fontSize: 12, color: '#888', marginTop: 50 }}>ENGLISH TRANSLATION:</div>
        <div style={{ fontSize: 17, color: '#888', marginTop: 10 }}><b>{quizData[quizIndex].translation}</b></div>


        <button className="tab-button" 
        style={{ marginTop: 32,
        background: '#fff57e',
        color: '#222',
        fontWeight: 700,
        fontSize: 11,
           }} 
        onClick={handleNext}>Next</button>
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
