import React, { useEffect, useState } from 'react';
import { Link,useNavigate  } from 'react-router-dom';

function Menu() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  return (
    
    <main style={{ position: 'relative', minHeight: isMobile ? '100vh' : undefined, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2em', justifyContent: 'center', alignItems: 'center', width: isMobile ? '80vw' : 340, maxWidth: 400 }}>
          <img
            src="/asset/ref/pickcategory.png"
            alt="Pick a Category"
            style={{ width: isMobile ? 300 : 180, height: 'auto', marginBottom: '0.5em', marginTop: '-2.5em' }}
          />
          <Link to="/quiz-fill-blank" style={{ width: '100%' }}>
            <button style={{
              width: '100%',
              maxWidth: '320px',
              height: '120px',
              backgroundImage: 'url(/asset/ref/fill_textbox.png)',
              backgroundSize: '90%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
             
              border: 'none',
              
              marginBottom: '0em',
              letterSpacing: '1px',
              filter: 'drop-shadow(0 0 8px #fff)',
              transition: 'all 0.3s',
              outline: 'none',
              cursor: 'pointer',
              fontFamily: 'Archivo Black, sans-serif',
            }}>
              
            </button>
          </Link>
          <Link to="/quiz-multiple-choice" style={{ width: '100%' }}>
            <button style={{
              width: '100%',
              maxWidth: '320px',
              height: '120px',
              backgroundImage: 'url(/asset/ref/multiple_textbox.png)',
              backgroundSize: '90%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              color: 'black',
             
              border: 'none',
              
              marginBottom: '0em',
              letterSpacing: '1px',
              filter: 'drop-shadow(0 0 8px #fff)',
              transition: 'all 0.3s',
              outline: 'none',
              cursor: 'pointer',
              fontFamily: 'Archivo Black, sans-serif',
            }}>
              
            </button>
          </Link>
          <Link to="/quiz-sentence-construction" style={{ width: '100%' }}>
            <button style={{
              width: '100%',
              maxWidth: '320px',
              height: '120px',
              backgroundImage: 'url(/asset/ref/sentence_textbox.png)',
              backgroundSize: '90%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              color: 'black',
              textTransform: 'uppercase',
              fontWeight: 900,
              fontSize: '1.5em',
              border: 'none',
             
              marginBottom: '0em',
              letterSpacing: '1px',
              filter: 'drop-shadow(0 0 8px #fff)',
              transition: 'all 0.3s',
              outline: 'none',
              cursor: 'pointer',
              fontFamily: 'Archivo Black, sans-serif',
            }}>
             
            </button>
          </Link>
           <Link to="/quiz-picture-matching" style={{ width: '100%' }}>
            <button style={{
              width: '100%',
              maxWidth: '320px',
              height: '120px',
              backgroundImage: 'url(/asset/ref/picture_textbox.png)',
              backgroundSize: '90%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              color: 'black',
              textTransform: 'uppercase',
              fontWeight: 900,
              fontSize: '1.5em',
              border: 'none',
             
              marginBottom: '0em',
              letterSpacing: '1px',
              filter: 'drop-shadow(0 0 8px #fff)',
              transition: 'all 0.3s',
              outline: 'none',
              cursor: 'pointer',
              fontFamily: 'Archivo Black, sans-serif',
            }}>
              
            </button>
          </Link>
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