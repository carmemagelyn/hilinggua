import React, { useState, useEffect } from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";

// Word data with image paths from public/asset/img-word
const wordData = [
  { word: "balay", image: "/asset/img-word/balay.png", translation: "house" },
  { word: "bata", image: "/asset/img-word/bata.png", translation: "child" },
  { word: "bulig", image: "/asset/img-word/bulig.png", translation: "help" },
  { word: "dako", image: "/asset/img-word/dako.png", translation: "big" },

  { word: "gabe", image: "/asset/img-word/gab e.png", translation: "night" },
  { word: "ginhatag", image: "/asset/img-word/Gin hatag.png", translation: "was given" },
  { word: "ginhimo", image: "/asset/img-word/Ginhimo.png", translation: "made" },
  { word: "halong", image: "/asset/img-word/halong kamo.png", translation: "take care" },
  { word: "hatagi", image: "/asset/img-word/Hatagi.png", translation: "give" },
  { word: "init", image: "/asset/img-word/init.png", translation: "hot" },
  { word: "isda", image: "/asset/img-word/isda.png", translation: "fish" },
  { word: "kamusta", image: "/asset/img-word/kumusta.png", translation: "how are you" },
  { word: "libro", image: "/asset/img-word/libro.png", translation: "book" },
  { word: "madamo", image: "/asset/img-word/madamo.png", translation: "many" },
  { word: "manok", image: "/asset/img-word/manok.png", translation: "chicken" },
  { word: "masadya", image: "/asset/img-word/masadya.png", translation: "happy" },
  { word: "matamis", image: "/asset/img-word/matam is.png", translation: "sweet" },
  { word: "matulog", image: "/asset/img-word/Matulog.png", translation: "to sleep" },
  { word: "nagahulat", image: "/asset/img-word/Naga hulat.png", translation: "is waiting" },
  { word: "nagakaon", image: "/asset/img-word/Naga_kaon.png", translation: "is eating" },
  { word: "nagalupad", image: "/asset/img-word/Naga_lupad.png", translation: "is flying" },
  { word: "nagbasa", image: "/asset/img-word/Nagbasa.png", translation: "read" },
  { word: "nagbulig", image: "/asset/img-word/Nag bulig.png", translation: "helped" },
  { word: "nagdaog", image: "/asset/img-word/Nag daog.png", translation: "won" },
  { word: "nagkanta", image: "/asset/img-word/Nag kanta.png", translation: "sang" },
  { word: "naglakat", image: "/asset/img-word/Nag lakat.png", translation: "walked" },
  { word: "nageskwela", image: "/asset/img-word/Nag eskwela.png", translation: "went to school" },
  { word: "nakadakop", image: "/asset/img-word/Nakadakop.png", translation: "caught" },
  { word: "nagsulat", image: "/asset/img-word/Nag sulat.png", translation: "wrote" },
  { word: "nagtuon", image: "/asset/img-word/Nag tuon.png", translation: "studied" },
  { word: "pagpauli", image: "/asset/img-word/pagpauli.png", translation: "going home" },
  { word: "prutas", image: "/asset/img-word/prutas.png", translation: "fruit" },
  { word: "regalo", image: "/asset/img-word/regalo.png", translation: "gift" },
  { word: "saging", image: "/asset/img-word/saging.png", translation: "banana" },
  { word: "sapat", image: "/asset/img-word/sapat.png", translation: "animal" },


  { word: "tubig", image: "/asset/img-word/Tubig.png", translation: "water" },
  { word: "tugnaw", image: "/asset/img-word/tugnaw.png", translation: "cold" },

];

export default function QuizPictureMatching() {
  const navigate = useNavigate();
  const [quizIndex, setQuizIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [shuffledOrder, setShuffledOrder] = useState([]);

  useEffect(() => {
    // Shuffle the questions on component mount
    const shuffled = [...wordData].sort(() => 0.5 - Math.random());
    setShuffledOrder(shuffled);
  }, []);

  const current = shuffledOrder[quizIndex % shuffledOrder.length] || {};
  const correct = current.word;
  const image = current.image;
  const translation = current.translation;

  // Pick 3 random other words as distractors
  const distractors = shuffledOrder
    .filter((w) => w.word !== correct)
    .map(w => w.word)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
  const choices = [correct, ...distractors].sort(() => 0.5 - Math.random());

  const handleNext = () => {
    setQuizIndex((prev) => (prev + 1) % wordData.length);
    setSelected(null);
    setFeedback("");
    setShowAnswer(false);
    setIsWrong(false);
  };

  const handleTryAgain = () => {
    setSelected(null);
    setFeedback("");
    setShowAnswer(false);
    setIsWrong(false);
  };

  const handleSelectOption = (choice) => {
    if (feedback) return; // Prevent selection after answer is locked
    
    setSelected(choice);

    if (choice === correct) {
      setFeedback("✅ Correct!");
      setIsWrong(false);
    } else {
      setFeedback("❌ Wrong answer.");
      setIsWrong(true);
    }
  };

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "url('/asset/ref/beebg.jpg') center center/cover no-repeat" }}>
      <div style={{ background: "rgba(255,255,255,0.8)", borderRadius: 24, padding: 32, boxShadow: "0 4px 24px rgba(0,0,0,0.08)", textAlign: "center", maxWidth: 600 }}>
        <h2 style={{ color: "#26ccc2", fontWeight: 800, fontSize: 28, marginBottom: 24 }}>Picture Matching</h2>
        <img src={image} alt="Quiz visual" style={{ width: 220, height: 'auto', marginBottom: 24, borderRadius: 16, boxShadow: '0 2px 12px #0002' }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
          {choices.map((choice, idx) => (
            <button
              key={idx}
              style={{
                background: selected === choice ? (feedback.startsWith("✅") ? '#26ccc2' : '#ff4d4f') : 'rgba(255,255,255,0.7)',
                color: selected === choice ? '#fff' : '#222',
                fontWeight: 700,
                fontSize: 18,
                border: '2px solid #26ccc2',
                borderRadius: 12,
                padding: '12px 16px',
                cursor: isWrong ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                opacity: isWrong ? 0.5 : 1,
              }}
              onClick={() => handleSelectOption(choice)}
              disabled={isWrong}
            >
              {choice}
            </button>
          ))}
        </div>
        {feedback && <div style={{ fontSize: 18, color: feedback.startsWith("✅") ? "#26ccc2" : "#ff4d4f", marginBottom: 16, fontWeight: 700 }}>{feedback}</div>}
        {(feedback.startsWith("✅") || showAnswer) && translation && (
          <div style={{ fontSize: 14, color: "#888", marginBottom: 16, fontStyle: "italic", padding: "8px", background: "rgba(38, 204, 194, 0.05)", borderRadius: 8 }}>
            {translation}
          </div>
        )}
        {isWrong && feedback && (
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
        {showAnswer && <div style={{ fontSize: 18, color: "#ffb76c", marginBottom: 16, fontWeight: 700 }}>Answer: <b>{correct}</b></div>}
        {!feedback && (
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
              transition: 'all 0.2s',
            }}
            onClick={() => setShowAnswer(true)}
          >
            Show Answer
          </button>
        )}
        {(feedback && feedback.startsWith("✅")) || showAnswer ? (
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
        ) : null}
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
