import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main style={{ position: 'relative', minHeight: isMobile ? '100vh' : undefined, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2em', justifyContent: 'center', alignItems: 'center', width: isMobile ? '80vw' : 340, maxWidth: 400 }}>
          <Link to="/quiz-fill-blank" style={{ width: '100%' }}>
            <button style={{
              width: '100%',
              maxWidth: '420px',
              height: '100px',
              background: 'white',
              color: 'black',
              textTransform: 'uppercase',
                fontWeight: 900,
                fontSize: '1.5em',
              border: 'none',
              boxShadow: '0 0 12px 2px white',
              marginBottom: '1em',
              letterSpacing: '1px',
              filter: 'drop-shadow(0 0 8px #fff)',
              transition: 'all 0.3s',
              outline: 'none',
              cursor: 'pointer',
              fontFamily: 'Archivo Black, sans-serif',
            }}>
              Fill in the Blank
            </button>
          </Link>
          <Link to="/quiz-multiple-choice" style={{ width: '100%' }}>
            <button style={{
              width: '100%',
              maxWidth: '420px',
              height: '100px',
              background: 'white',
              color: 'black',
              textTransform: 'uppercase',
                fontWeight: 900,
                fontSize: '1.5em',
              border: 'none',
              boxShadow: '0 0 12px 2px white',
              marginBottom: '1em',
              letterSpacing: '1px',
              filter: 'drop-shadow(0 0 8px #fff)',
              transition: 'all 0.3s',
              outline: 'none',
              cursor: 'pointer',
              fontFamily: 'Archivo Black, sans-serif',
            }}>
              Multiple Choice
            </button>
          </Link>
          <Link to="/quiz-sentence-construction" style={{ width: '100%' }}>
            <button style={{
              width: '100%',
              maxWidth: '420px',
              height: '100px',
              background: 'white',
              color: 'black',
              textTransform: 'uppercase',
              fontWeight: 900,
              fontSize: '1.5em',
              border: 'none',
              boxShadow: '0 0 12px 2px white',
              marginBottom: '1em',
              letterSpacing: '1px',
              filter: 'drop-shadow(0 0 8px #fff)',
              transition: 'all 0.3s',
              outline: 'none',
              cursor: 'pointer',
              fontFamily: 'Archivo Black, sans-serif',
            }}>
              Sentence Construction
            </button>
          </Link>
           <Link to="/quiz-picture matching" style={{ width: '100%' }}>
            <button style={{
              width: '100%',
              maxWidth: '420px',
              height: '100px',
              background: 'white',
              color: 'black',
              textTransform: 'uppercase',
              fontWeight: 900,
              fontSize: '1.5em',
              border: 'none',
              boxShadow: '0 0 12px 2px white',
              marginBottom: '1em',
              letterSpacing: '1px',
              filter: 'drop-shadow(0 0 8px #fff)',
              transition: 'all 0.3s',
              outline: 'none',
              cursor: 'pointer',
              fontFamily: 'Archivo Black, sans-serif',
            }}>
              Picture Matching
            </button>
          </Link>


          {/* Animated GIF below buttons */}
          <div 
            className="desktop-gif-overlay"
            style={{ 
              position: 'fixed', 
              bottom: '-10vw', 
              right: '-50vw', 
              zIndex: 200, 
              pointerEvents: 'none'
            }}
          >
            <img 
              src="/asset/ref/blinkhappy.gif" 
              alt="Animated character blinking happily" 
              style={{ 
                width: '500px', 
                maxWidth: '300vw', 
                height: 'auto', 
                display: 'inline-block', 
                transform: 'scaleX(-1)', 
                filter: 'drop-shadow(0 0 24px #fff57e88)' 
              }} 
            />
          </div>
      </div>
   
        {/* Animated character peeking GIF removed */}
    </main>
  );
}

export default Menu;