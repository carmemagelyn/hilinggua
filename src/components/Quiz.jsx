import React from "react";
import { useNavigate } from "react-router-dom";

// Marker button labels (should match MarkerDetailPage order)
const markerButtons = [
  "ANG + VERB – Marks the subject/topic of the sentence.",
  "SANG + VERB/OBJECT – Marks the object being acted upon.",
  "SA + VERB/LOCATION/ RECIPIENT – Marks location, direction, or indirect object.",
  "KAY + VERB/PERSON – Marks the person receiving the action.",
  "NGA + VERB/DESCRIPTION – Connects adjectives, nouns, or clauses (“that,” “which,” “who”).",
  "PA / MAN + VERB – Adds emphasis, politeness, or continuation.",
  "NI + VERB/POSSESSION – Marks possession or “belonging to.”",
  "NA / NA LANG + VERB – Indicates completion or “already.” / Indicates a decision or choice, often meaning “just” or “might as well.”",
  "LANG + VERB – Indicates limitation, restriction, or “only / just.”",
  "GIHAPON + VERB – Indicates continuation, “still” or “anyway.”",
  "PA + VERB– Indicates request or polite emphasis.",
  "DAW + VERB – Indicates appearance or uncertainty (“seems,” “appears,” “looks like”).",
  "SI – marks a singular personal name as the subject",
  "SANDAY – marks plural personal names as the subject",
  "SILA  - plural subject pronoun meaning “they.”",
  "AMO - (used for emphasis / “the one(s) who”)",
];

export default function Markers() {
  const navigate = useNavigate();
                                                                                            
                                                                                    
                                                                            
                                                            
                                                    
                                            
                                    
                        
  return (
    <div
     
    >
      {/* Left arrow back button */}
      <button
        onClick={() => navigate("/quiz-menu")}
        style={{
          position: 'fixed',
          top: 470,
          left: 300,
          zIndex: 200,
          background: 'rgba(255,255,255,0.85)',
          border: 'none',
          borderRadius: '50%',
          width: 60,
          height: 60,
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
        <svg width="36" height="36" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scaleX(-1)', display: 'block' }}>
          <polyline points="14,5 7,11 14,17" stroke="#222" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <polyline points="20,5 13,11 20,17" stroke="#222" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </button>
      {/* Top section with GIF and callout */}
      {/* Overlay GIF at top left */}
      <div style={{ position: 'fixed', top: '370px', left: '-130px', zIndex: 100, pointerEvents: 'none' }}>
        <img
          src="/asset/ref/starryeyes.gif"
          alt="Animated character blinking happily"
          style={{
            width: "400px",
            height: "auto",
            maxWidth: "120vw",
            margin: 0,
            display: "block"
          }}
        />
      </div>
      {/* Callout to the right of GIF */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          marginTop: "75vw",
          marginLeft: "calc(90px + 0.5vw)",
          width: "60%",
          maxWidth: 900,
        }}
      >
        <img
          src="/asset/ref/quizcallout.png"
          alt="Quiz callout quote"
          style={{
            width: "250px",
            maxWidth: "85vw",
            height: "auto",
            display: "block",
            marginTop: "0.5em"
          }}
        />
      </div>
      
       
    </div>
    );
    }   