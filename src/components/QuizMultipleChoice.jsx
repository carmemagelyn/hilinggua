import React, { useState, useEffect } from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";

const quizData = [
  { sentence: "Ang bata nagakaon.", marker: "ang", options: ["sang", "sa", "ang", "kay"], image: "/asset/img-sentence/Ang bata nagakaon_.png", translation: "The child is eating." },
  { sentence: "Nagbasa siya sang libro.", marker: "sang", options: ["sang", "ang", "sa", "kay"], image: "/asset/img-sentence/Nagbasa siya sang libro_.png", translation: "He/She read a book." },
  { sentence: "Kamusta ka sa eskwelahan?", marker: "sa", options: ["sa", "sang", "ang", "kay"], image: "/asset/img-sentence/Kamusta ka sa eskwelahan__.png", translation: "How are you at school?" },
  { sentence: "Ginhatag ko ini kay Maria.", marker: "kay", options: ["kay", "sa", "sang", "ang"], image: "/asset/img-sentence/Ginhatag ko ini kay Maria_.png", translation: "I gave this to Maria." },
  { sentence: "Ang bata nga malipayon nagahampang.", marker: "nga", options: ["nga", "pa", "lang", "na"], image: "/asset/img-sentence/Ang bata nga malipayon nagahampang_.png", translation: "The happy child is playing." },
  { sentence: "Hatagi pa siya sang tubig.", marker: "pa", options: ["pa", "sang", "sa", "lang"], image: "/asset/img-sentence/Hatagi pa siya sang tubig_.png", translation: "Please give him/her water." },
  { sentence: "Balay ni Tatay.", marker: "ni", options: ["ni", "ang", "na", "daw"], image: "/asset/img-sentence/Balay ni Tatay_.png", translation: "Father's house." },
  { sentence: "Gab-e na, halong kamo.", marker: "na", options: ["na", "lang", "pa", "gihapon"], image: "/asset/img-sentence/Gab-e na, halong kamo. (It's night already, take care).png", translation: "It's night already, take care." },
  { sentence: "Saging lang gin kaon ko.", marker: "lang", options: ["lang", "pa", "na", "gihapon"], image: "/asset/img-sentence/Naglakat lang siya sa plaza (He_She just walked to the plaza.).png", translation: "I only ate a banana." },
  { sentence: "Nagahulat siya gihapon bisan init.", marker: "gihapon", options: ["gihapon", "lang", "daw", "pa"], image: "/asset/img-sentence/Nagahulat siya gihapon bisan init. (He_She is still waiting even if its hot.).png", translation: "He/She is still waiting even if it's hot." },
  { sentence: "Hatagi pa ako sang tubig.", marker: "pa", options: ["pa", "sang", "lang", "na"], image: "/asset/img-sentence/Hatagi pa ako sang tubig, palihog..png", translation: "Please give me water." },
  { sentence: "Daw masadya siya subong.", marker: "daw", options: ["daw", "si", "sila", "sanday"], image: "/asset/img-sentence/Daw masadya siya subong. (He_She seems happy now.).png", translation: "He/She seems happy now." },
  { sentence: "Si Maria nagkanta.", marker: "si", options: ["si", "sanday", "sila", "daw"], image: "/asset/img-sentence/Si Maria nagkanta.  (Maria sang.).png", translation: "Maria sang." },
  { sentence: "Sanday Ana kag Juan naghampang sa mga sapat.", marker: "sanday", options: ["sanday", "si", "sila", "amo"], image: "/asset/img-sentence/Sanday Ana kag Juan naghampang sa mga sapat. (Ana and Juan played with the animals.).png", translation: "Ana and Juan played with the animals." },
  { sentence: "Sila amo ang nagahampang.", marker: "sila", options: ["sila", "si", "sanday", "amo"], image: "/asset/img-sentence/Sila amo ang nagahampang (They are the ones who are playing.).png", translation: "They are the ones who are playing." },
  { sentence: "Siya amo ang nagdaog sa patimpalak.", marker: "amo", options: ["amo", "sila", "si", "sanday"], image: "/asset/img-sentence/Siya amo ang nagdaog sa patimpalak. (He_She is the one who won the contest.).png", translation: "He/She is the one who won the contest." },
];

function shuffleArray(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function QuizMultipleChoice() {
  const navigate = useNavigate();
  const [quizIndex, setQuizIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [shuffledOrder, setShuffledOrder] = useState([]);

  useEffect(() => {
    const shuffled = [...quizData].sort(() => 0.5 - Math.random());
    setShuffledOrder(shuffled);
  }, []);

  if (shuffledOrder.length === 0) return <div>Loading...</div>;

  const current = shuffledOrder[quizIndex % shuffledOrder.length];
  const choices = shuffleArray(current.options);

  const handleCheck = () => {
    if (selected === current.marker) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Wrong answer. Try again or show answer.");
    }
  };

  const handleTryAgain = () => {
    setSelected(null);
    setFeedback("");
    setShowAnswer(false);
  };

  const handleNext = () => {
    setQuizIndex((prev) => (prev + 1) % shuffledOrder.length);
    setSelected(null);
    setFeedback("");
    setShowAnswer(false);
  };

  const handleShowAnswer = () => setShowAnswer(true);

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "url('/asset/ref/beebg.jpg') center center/cover no-repeat" }}>
      <div style={{ background: "rgba(255,255,255,0.8)", borderRadius: 24, padding: 32, boxShadow: "0 4px 24px rgba(0,0,0,0.08)", textAlign: "center", maxWidth: 600 }}>
        <h2 style={{ color: "#26ccc2", fontWeight: 800, fontSize: 28, marginBottom: 24 }}>Multiple Choice</h2>
        
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
        
        {/* English Translation */}
        {current.translation && (
          <div style={{ fontSize: 14, color: "#888", marginBottom: 16, fontStyle: "italic", padding: "8px", background: "rgba(38, 204, 194, 0.05)", borderRadius: 8 }}>
            {current.translation}
          </div>
        )}
        
        <div style={{ fontSize: 18, marginBottom: 24, color: "#666", fontWeight: 600 }}>Which is the marker in the sentence?</div>
        
        <div style={{ fontSize: 20, marginBottom: 24, color: "#222", fontWeight: 600, padding: "16px", background: "rgba(38, 204, 194, 0.1)", borderRadius: 12 }}>
          "{current.sentence}"
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 16 }}>
          {choices.map((choice, idx) => (
            <button
              key={idx}
              style={{
                background: selected === choice ? '#fff57e' : 'rgba(255,255,255,0.7)',
                color: selected === choice ? '#26ccc2' : '#222',
                fontWeight: 700,
                fontSize: 18,
                border: '2px solid #26ccc2',
                borderRadius: 12,
                padding: '12px 24px',
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
            disabled={selected === null}
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
            Answer: <b>{current.marker}</b>
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
