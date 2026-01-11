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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2em', justifyContent: 'center', alignItems: 'center', width: isMobile ? '90vw' : 340, maxWidth: 400 }}>
          <Link to="/vocabulary" style={{ width: '100%' }}>
            <button style={{
              width: '100%',
              maxWidth: '420px',
              height: '120px',
              background: 'white',
              color: 'black',
              textTransform: 'uppercase',
                fontWeight: 900,
                fontSize: '2em',
              border: 'none',
              boxShadow: '0 0 12px 2px white',
              marginBottom: '1.2em',
              letterSpacing: '1px',
              filter: 'drop-shadow(0 0 8px #fff)',
              transition: 'all 0.3s',
              outline: 'none',
              cursor: 'pointer',
              fontFamily: 'Archivo Black, sans-serif',
            }}>
              Vocabulary
            </button>
          </Link>
          <Link to="/markers-frontpage" style={{ width: '100%' }}>
            <button style={{
              width: '100%',
              maxWidth: '420px',
              height: '120px',
              background: 'white',
              color: 'black',
              textTransform: 'uppercase',
                fontWeight: 900,
                fontSize: '2em',
              border: 'none',
              boxShadow: '0 0 12px 2px white',
              marginBottom: '1.2em',
              letterSpacing: '1px',
              filter: 'drop-shadow(0 0 8px #fff)',
              transition: 'all 0.3s',
              outline: 'none',
              cursor: 'pointer',
              fontFamily: 'Archivo Black, sans-serif',
            }}>
              Markers
            </button>
          </Link>
          <Link to="/quiz" style={{ width: '100%' }}>
            <button style={{
              width: '100%',
              maxWidth: '420px',
              height: '120px',
              background: 'white',
              color: 'black',
              textTransform: 'uppercase',
              fontWeight: 900,
              fontSize: '2em',
              border: 'none',
              boxShadow: '0 0 12px 2px white',
              marginBottom: '1.2em',
              letterSpacing: '1px',
              filter: 'drop-shadow(0 0 8px #fff)',
              transition: 'all 0.3s',
              outline: 'none',
              cursor: 'pointer',
              fontFamily: 'Archivo Black, sans-serif',
            }}>
              Quiz
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
                width: '580px', 
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