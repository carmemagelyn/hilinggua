import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function StartScreen() {
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
  const [showFly, setShowFly] = useState(false);
  const [showBlink, setShowBlink] = useState(false);
  const [blinkAlways, setBlinkAlways] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowStart(true), 6000); // 6s delay for GIF
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
        <button
          onClick={handleStart}
          style={{
            background: "none",
            border: "none",
            outline: "none",
            cursor: "pointer",
            zIndex: 2,
            margin: "auto"
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
      )}
      {/* Show flyright.gif when start button appears */}
      {showFly && (
        <img
          src="/asset/ref/flyright.gif"
          alt="Fly right"
          style={{
            position: 'fixed',
            top: '20%',
            left: 0,
            width: 'min(100vw, 900px)',
            height: 'auto',
            zIndex: 100,
            pointerEvents: 'none',
            display: 'block',
            maxHeight: '40vh',
          }}
        />
      )}
      {/* Show blinkhappy.gif after start is clicked */}
      {(showBlink || blinkAlways) && (
        <img
          src="/asset/ref/blinkhappy.gif"
          alt="Blink happy"
          style={{
            position: 'fixed',
            top: '20%',
            left: 0,
            width: 'min(100vw, 900px)',
            height: 'auto',
            zIndex: 200,
            pointerEvents: 'none',
            display: 'block',
            maxHeight: '40vh',
          }}
        />
      )}
      {/* Peekaboo GIF for mobile at the bottom, only show before start button */}
      {!showStart && (
        <img
          src="/asset/ref/peekaboo.gif"
          alt="Peekaboo"
          style={{
            width: '150vw',
            maxWidth: '150%',
            height: 'auto',
            position: 'fixed',
            left: '-25vw',
            bottom: 0,
            zIndex: 3,
            pointerEvents: 'none',
            display: 'block',
            minHeight: '756px',
            maxHeight: '100vh',
          }}
        />
      )}
    </div>
  );
}
