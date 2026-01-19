import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function StartScreen() {
  // PWA install prompt state
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowInstall(false);
      setDeferredPrompt(null);
    }
  };
  useEffect(() => {
    // Remove beebg background and prevent scroll when StartScreen is shown
    const originalBg = document.body.style.background;
    const originalOverflow = document.body.style.overflow;
    document.body.style.background = 'none';
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.background = originalBg;
      document.body.style.overflow = originalOverflow;
    };
  }, []);
  const navigate = useNavigate();
  const [showStart, setShowStart] = useState(false);
  const [showWink, setShowWink] = useState(false);
  const [showBorder, setShowBorder] = useState(false);
  const [showFly, setShowFly] = useState(false);
  const [showBlink, setShowBlink] = useState(false);
  const [blinkAlways, setBlinkAlways] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWink(true);
      setShowBorder(true);
    }, 4200); // Show wink and border after peekaboo
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowStart(true), 4200); // Start button appears with wink gif
    return () => clearTimeout(timer);
  }, []);

  // Show flyright.gif when start button appears
  useEffect(() => {
    if (showStart) {
      setShowFly(true);
      // After 1.2s, show blinkhappy and hide flyright
      setTimeout(() => {
        setShowFly(false);
        setShowBlink(true);
        setBlinkAlways(true);
      }, 1200);
    }
  }, [showStart]);

  // Handler for Start button click
  const handleStart = () => {
    // Only navigate after a short delay, keep blinkhappy showing
    setTimeout(() => {
      navigate("/home");
    }, 1200);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', minWidth: '100vw', width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          background: `url('/asset/ref/huasiong.png') center center/cover no-repeat`,
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Start button (delayed) */}
      {showStart && (
        <>
          <button
            onClick={handleStart}
            style={{
              background: "none",
              border: "none",
              outline: "none",
              cursor: "pointer",
              zIndex: 2,
              margin: "auto",
              marginTop: "600px",
              marginLeft: "80px",
              animation: 'fadeIn 2s ease-in-out forwards'
            }}
            aria-label="Start"
          >
            <img
              src="/asset/ref/start.png"
              alt="Start"
              style={{
                width: "180px",
                maxWidth: "60vw",
                display: "block"
              }}
            />
          </button>
          {/* PWA Install App Button */}
          {showInstall && (
            <button
              onClick={handleInstallClick}
              style={{
                marginTop: 24,
                background: '#fff57e',
                color: '#26ccc2',
                border: '2px solid #fff57e',
                borderRadius: 12,
                fontWeight: 900,
                fontSize: 22,
                padding: '0.7em 2.2em',
                boxShadow: '0 2px 16px #fff57e44',
                cursor: 'pointer',
                zIndex: 3,
                fontFamily: 'Archivo Black, sans-serif',
                transition: 'background 0.2s, color 0.2s',
              }}
            >
              Install App
            </button>
          )}
        </>
      )}


      {/* Peekaboo GIF for mobile at the bottom, only show before wink */}
      {!showWink && (
        <img
          src="/asset/ref/peekaboo.gif"
          alt="Peekaboo"
          style={{
            width: '250vw',
            maxWidth: '150%',
            height: 'auto',
            position: 'fixed',
            left: '-27vw',
            bottom: '310px',
            zIndex: 3,
            pointerEvents: 'none',
            display: 'block',
            minHeight: '50px',
            maxHeight: '500vh',
            animation: 'fadeOutEnd 4.5s ease-in-out forwards'
          }}
        />
      )}
      {/* Wink GIF appears after peekaboo */}
      {showWink && (
        <img
          src="/asset/ref/wink.gif"
          alt="Wink"
          style={{
            width: '250vw',
            maxWidth: '150%',
            height: 'auto',
            position: 'fixed',
            left: '-110px',
            bottom: '310px',
            zIndex: 3,
            pointerEvents: 'none',
            display: 'block',
            minHeight: '150px',
            maxHeight: '600vh',            animation: 'fadeIn 2s ease-in-out forwards',          }}
        />
      )}
      {/* Border appears with fade transition */}
      {showBorder && (
        <img
          src="/asset/ref/border.png"
          alt="Border"
          style={{
            position: 'fixed',
            top: '160px',
            left: '-35px',
            width: '115vw',
            height: '52vh',
            zIndex: 1,
            pointerEvents: 'none',
            animation: 'fadeIn 2s ease-in-out forwards',
          }}
        />
      )}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
        @keyframes fadeOutEnd {
          0% {
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
