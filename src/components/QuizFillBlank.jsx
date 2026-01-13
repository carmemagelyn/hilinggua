import React, { useState } from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";

const markerOptions = ["ang", "sang", "sa", "kay", "nga", "pa", "ni", "na", "lang", "gihapon", "daw", "si", "sanday", "sila", "amo"];

const shuffleArray = (arr) => [...arr].sort(() => 0.5 - Math.random());

const getRandomOptions = (correctMarker, allOptions) => {
  const wrongOptions = allOptions.filter(m => m !== correctMarker);
  const randomWrong = shuffleArray(wrongOptions).slice(0, 3);
  return shuffleArray([correctMarker, ...randomWrong]);
};

export default function QuizFillBlank() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);

  const quizData = [
    {
      sentence: "Ang bata _________.",
      marker: "nagakaon",
      image: "/asset/img-sentence/Ang bata nagakaon_.png",
      translation: "The child is eating."
    },
    {
      sentence: "Nagbasa siya _____ libro.",
      marker: "sang",
      image: "/asset/img-sentence/Nagbasa siya sang libro_.png",
      translation: "He/She read a book."
    },
    {
      sentence: "Kamusta ka _____ eskwelahan?",
      marker: "sa",
      image: "/asset/img-sentence/Kamusta ka sa eskwelahan__.png",
      translation: "How are you at school?"
    },
    {
      sentence: "Ginhatag ko ini ____ Maria.",
      marker: "kay",
      image: "/asset/img-sentence/Ginhatag ko ini kay Maria_.png",
      translation: "I gave this to Maria."
    },
    {
      sentence: "Ang bata _____ malipayon naga hampang.",
      marker: "nga",
      image: "/asset/img-sentence/Ang bata nga malipayon nagahampang_.png",
      translation: "The happy child is playing."
    },
    {
      sentence: "Hatagi ____ siya sang tubig.",
      marker: "pa",
      image: "/asset/img-sentence/Hatagi pa siya sang tubig_.png",
      translation: "Please give him/her water."
    },
    {
      sentence: "Balay ____ Tatay.",
      marker: "ni",
      image: "/asset/img-sentence/Balay ni Tatay_.png",
      translation: "Father's house."
    },
    {
      sentence: "Gab-e ___, halong kamo.",
      marker: "na",
      image: "/asset/img-sentence/Gab-e na, halong kamo. (It's night already, take care).png",
      translation: "It's night already, take care."
    },
    {
      sentence: "Saging ____ gin kaon ko.",
      marker: "lang",
      image: "/asset/img-sentence/Naglakat lang siya sa plaza (He_She just walked to the plaza.).png",
      translation: "I only ate a banana."
    },
    {
      sentence: "Nagahulat siya ____ bisan init.",
      marker: "gihapon",
      image: "/asset/img-sentence/Nagahulat siya gihapon bisan init. (He_She is still waiting even if its hot.).png",
      translation: "He/She is still waiting even if it's hot."
    },
    {
      sentence: "Hatagi ____ ako sang tubig.",
      marker: "pa",
      image: "/asset/img-sentence/Hatagi pa ako sang tubig, palihog..png",
      translation: "Please give me water."
    },
    {
      sentence: "____ masadya siya subong.",
      marker: "daw",
      image: "/asset/img-sentence/Daw masadya siya subong. (He_She seems happy now.).png",
      translation: "He/She seems happy now."
    },
    {
      sentence: "____ Maria nagkanta.",
      marker: "si",
      image: "/asset/img-sentence/Si Maria nagkanta.  (Maria sang.).png",
      translation: "Maria sang."
    },
    {
      sentence: "_____ Ana kag Juan naghampang sa mga sapat.",
      marker: "sanday",
      image: "/asset/img-sentence/Sanday Ana kag Juan naghampang sa mga sapat. (Ana and Juan played with the animals.).png",
      translation: "Ana and Juan played with the animals."
    },
    {
      sentence: "_____ amo ang nagahampang.",
      marker: "sila",
      image: "/asset/img-sentence/Sila amo ang nagahampang (They are the ones who are playing.).png",
      translation: "They are the ones who are playing."
    },
    {
      sentence: "_____ amo ang nagdaog sa patimpalak.",
      marker: "amo",
      image: "/asset/img-sentence/Siya amo ang nagdaog sa patimpalak. (He_She is the one who won the contest.).png",
      translation: "He/She is the one who won the contest."
    }
  ];

  const [currentOptions, setCurrentOptions] = useState(() => 
    getRandomOptions(quizData[0].marker, markerOptions)
  );

  const current = quizData[quizIndex];

  const handleCheck = () => {
    if (selected === current.marker) {
      setFeedback("✅ Correct!");
      setShowAnswer(false);
    } else {
      setFeedback("❌ Try again or show answer.");
    }
  };

  const handleTryAgain = () => {
    setSelected(null);
    setFeedback("");
    setShowAnswer(false);
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleNext = () => {
    if (quizIndex < quizData.length - 1) {
      setQuizIndex(quizIndex + 1);
      setSelected(null);
      setFeedback("");
      setShowAnswer(false);
      setCurrentOptions(getRandomOptions(quizData[quizIndex + 1].marker, markerOptions));
    }
  };

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "url('/asset/ref/beebg.jpg') center center/cover no-repeat", paddingBottom: 48 }}>
      <div style={{ background: "rgba(255,255,255,0.85)", borderRadius: 24, padding: 32, boxShadow: "0 4px 24px rgba(0,0,0,0.08)", textAlign: "center", maxWidth: 600 }}>
        <h2 style={{ color: "#26ccc2", fontWeight: 800, fontSize: 28, marginBottom: 24 }}>Fill in the Blank</h2>
        
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
        
        {/* Sentence with Blank */}
        <div style={{ marginBottom: 24, textAlign: "center" }}>
          <div style={{ fontSize: 20, fontWeight: 600, color: "#222", lineHeight: 1.6 }}>
            {current.sentence}
          </div>
        </div>

        {/* Marker Options */}
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
          {currentOptions.map((option, idx) => (
            <button
              key={idx}
              className="tab-button"
              style={{
                background: selected === option ? '#fff57e' : 'rgba(255,255,255,0.7)',
                color: selected === option ? '#26ccc2' : '#222',
                fontWeight: 700,
                fontSize: 16,
                border: '2px solid #26ccc2',
                borderRadius: 10,
                padding: '8px 14px',
                cursor: 'pointer',
                transition: 'background 0.2s, color 0.2s',
              }}
              onClick={() => setSelected(option)}
              disabled={feedback.startsWith("✅")}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Check Button */}
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

        {/* Feedback */}
        {feedback && (
          <div>
            <div style={{ fontSize: 18, color: feedback.startsWith("✅") ? "#26ccc2" : "#ff4d4f", marginBottom: 12, fontWeight: 600 }}>
              {feedback}
            </div>
            {feedback.startsWith("❌") && (
              <button 
                onClick={handleTryAgain}
                style={{
                  background: '#ffb76c',
                  color: '#222',
                  fontWeight: 700,
                  fontSize: 16,
                  border: '2px solid #ffb76c',
                  borderRadius: 12,
                  padding: '10px 24px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                Try Again
              </button>
            )}
          </div>
        )}

        {/* Show Answer */}
        {showAnswer && (
          <div style={{ fontSize: 18, color: "#ffb76c", marginBottom: 12, fontWeight: 600 }}>
            Answer: <b>{current.marker}</b>
          </div>
        )}

        {/* Next Button - Only show after correct answer */}
        {feedback.startsWith("✅") && (
          <button 
            onClick={handleNext}
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
              marginTop: 12,
            }}
          >
            {quizIndex < quizData.length - 1 ? "Next" : "Complete"}
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
