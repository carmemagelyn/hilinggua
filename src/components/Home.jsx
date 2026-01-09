import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main style={{ position: 'relative', minHeight: isMobile ? '100vh' : undefined }}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <img 
          src="/asset/ref/logo.png" 
          alt="Hilinggua Logo" 
          style={{
            maxWidth: '120px',
            height: 'auto',
            marginBottom: '18px',
            filter: 'drop-shadow(0 4px 16px #26ccc299)'
          }}
        />
        <h1 style={{ fontWeight: 800, color: 'FFE05D', margin: 0, fontSize: '2.2em', letterSpacing: '1px' }}>
          Hilinggua
        </h1>
        <p style={{ color: 'white', fontSize: '1.15em', margin: '10px 0 0 0' }}>
          Learn Hiligaynon the fun way! 
        </p>
      </div>
      <div className="card" style={{ textAlign: 'center', margin: '0 auto', maxWidth: 420 }}>
        <p style={{ fontSize: '1.1em', marginBottom: '1.5em' }}>
          Start your journey: choose a mode below!
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.2em', flexWrap: 'wrap', marginBottom: '1.2em' }}>
          <Link to="/vocabulary">
            <button style={{ fontSize: '1em', padding: '0.7em 1.5em', borderRadius: '8px', border: '2px solid FFE05D', background: 'FFE05D', color: '#26ccc2', fontWeight: 700, cursor: 'pointer', marginBottom: '0.5em' }}>
              Vocabulary
            </button>
          </Link>
          <Link to="/markers">
            <button style={{ fontSize: '1em', padding: '0.7em 1.5em', borderRadius: '8px', border: '2px solid #E2852E', background: '#E2852E', color: 'white', fontWeight: 700, cursor: 'pointer', marginBottom: '0.5em' }}>
              Markers
            </button>
          </Link>
          <Link to="/quiz">
            <button style={{ fontSize: '1em', padding: '0.7em 1.5em', borderRadius: '8px', border: '2px solid #6aece1', background: '#6aece1', color: '#26ccc2', fontWeight: 700, cursor: 'pointer', marginBottom: '0.5em' }}>
              Quiz
            </button>
          </Link>
        </div>
        <p style={{ color: '#E2852E', fontWeight: 600, fontSize: '1em', margin: 0 }}>
          Practice, play, and master Hiligaynon every day!
        </p>
      </div>
      {/* Responsive GIF at bottom on mobile, normal flow on desktop */}
      {isMobile ? (
        <div style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          maxWidth: '100vw',
          textAlign: 'center',
          zIndex: 100,
          background: 'linear-gradient(180deg, rgba(255,245,126,0) 0%, rgba(255,245,126,0.12) 100%)',
        }}>
          <img
            src="/asset/ref/peekaboolook.gif"
            alt="Animated character peeking"
            style={{
              width: '100vw',
              maxWidth: '100vw',
              height: 'auto',
              display: 'block',
              margin: 0,
              borderRadius: 0,
              boxShadow: '0 4px 24px rgba(38,204,194,0.12)'
            }}
          />
        </div>
      ) : (
        <div style={{ width: '50vw', maxWidth: '100vw', margin: '40px auto 0 auto', textAlign: 'center' }}>
          <img
            src="/asset/ref/peekaboolook.gif"
            alt="Animated character peeking"
            style={{ width: '50vw', maxWidth: '100vw', height: 'auto', display: 'block', margin: 0, borderRadius: 0, boxShadow: '0 4px 24px rgba(38,204,194,0.12)' }}
          />
        </div>
      )}
    </main>
  );
}

export default Home;