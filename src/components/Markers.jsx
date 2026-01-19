import React from "react";
import { useNavigate } from "react-router-dom";

// Marker button labels (should match MarkerDetailPage order)
const markerButtons = [
  "ANG + VERB",
  "SANG + VERB/OBJECT",
  "SA + VERB/LOCATION/ RECIPIENT",
  "KAY + VERB/PERSON",
  "NGA + VERB/DESCRIPTION",
  "PA / MAN + VERB",
  "NI + VERB/POSSESSION",
  "NA / NA LANG + VERB",
  "LANG + VERB",
  "GIHAPON + VERB",
  "PA + VERB",
  "DAW + VERB",
  "SI",
  "SANDAY",
  "SILA",
  "AMO",
];

export default function Markers() {
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
      <div style={{ position: 'fixed', top: '70px', left: '-150px', zIndex: 100, pointerEvents: 'none' }}>
        <img
          src="/asset/ref/blinkhappy.gif"
          alt="Animated character blinking happily"
          style={{
            width: "420px",
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
          marginTop: "8vw",
           marginLeft: "calc(40px + 0.2vw)",
          width: "50%",
          maxWidth: 800,
        }}
      >
        <img
          src="/asset/ref/markerquote.png"
          alt="Marker callout quote"
          style={{
            width: "350px",
            maxWidth: "85vw",
            height: "auto",
            display: "block",
            marginTop: "0.5em"
          }}
        />
      </div>
      {/* Responsive button below callout */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5em', gap: '1.5em', paddingBottom: '3em' }}>
        {markerButtons.map((label, idx) => (
          <button
            key={idx}
            style={{
              background: '#fafeaa',
              color: '#222',
              fontWeight: 700,
              fontSize: 'clamp(1.4em, 4vw, 2.2em)',
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
            onClick={() => navigate(`/marker/${idx}`)}
          >
            {label}
          </button>
        ))}
        </div>
    </div>
    );
    }   