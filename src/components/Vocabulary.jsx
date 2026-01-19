import React from "react";
import { useNavigate } from "react-router-dom";

// Vocabulary button labels (Hiligaynon words only)
const vocabularyButtons = [
  "Balay",
  "Bata",
  "Bulig",
  "Dako",
  "Eskwelahan",
  "Gabe",
  "Ginhatag",
  "Ginhimo",
  "Halong",
  "Hatagi",
  "Init",
  "Isda",
  "Kamusta",
  "Libro",
  "Madamo",
  "Manok",
  "Masadya",
  "Matamis",
  "Matulog",
  "Nagahulat",
  "Nagakaon",
  "Nagalupad",
  "Nagbasa",
  "Nagbulig",
  "Nagdaog",
  "Nagkanta",
  "Naglakat",
  "Nageskwela",
  "Nakadakop",
  "Nagsulat",
  "Nagtuon",
  "Pagpauli",
  "Prutas",
  "Saging",
  "Sapat",
  "Tubig",
  "Tugnaw"
];

export default function Vocabulary() {
  const navigate = useNavigate();
                                                                                            
                                                                                    
                                                                            
                                                            
                                                    
                                            
                                    
                        
  return (
    <div
     
    >
      {/* Left arrow back button */}
      <button
        onClick={() => navigate("/home")}
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
      {/* Top section with GIF and callout */}
      {/* Overlay GIF at top left */}
      <div style={{ position: 'fixed', top: '80px', right: '-150px', zIndex: 100, pointerEvents: 'none' }}>
        <img
          src="/asset/ref/blinkhappy.gif"
          alt="Animated character blinking happily"
          style={{
            width: "420px",
            height: "auto",
            maxWidth: "120vw",
            margin: 0,
            display: "block",
            transform: "scaleX(-1)",
          }}
        />
      </div>
      {/* Callout to the right of GIF */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          marginTop: "8vw",
          marginLeft: "-0px",
          width: "80%",
          maxWidth: 900,
        }}
      >
        <img
          src="/asset/ref/vocabcallout.png"
          alt="Vocabulary callout"
          style={{
            width: "520px",
            maxWidth: "88vw",
            height: "auto",
            display: "block",
            marginTop: "0.5em"
          }}
        />
      </div>
      {/* Responsive button below callout */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5em', gap: '1.5em', paddingBottom: '3em' }}>
        {vocabularyButtons.map((label, idx) => (
          <button
            key={idx}
            style={{
              background: '#fafeaa',
              color: '#222',
              fontWeight: 700,
              fontSize: 'clamp(1.7em, 4vw, 2.2em)',
              border: 'none',
              borderRadius: '12px',
              boxShadow: '0 4px 18px #7b8457',
              padding: 'clamp(0.5em, 1.2vw, 0.7em) clamp(0.7em, 3vw, 1.2em)',
              letterSpacing: '1px',
              outline: 'none',
              cursor: 'pointer',
              width: 'clamp(220px, 80vw, 520px)',
              maxWidth: '75vw',
              whiteSpace: 'normal',
              textAlign: 'center',
              lineHeight: 1.25
            }}
            onClick={() => navigate(`/vocabulary/${label}`)}
          >
            {label[0]}-{label}
          </button>
        ))}
        </div>
    </div>
    );
    }