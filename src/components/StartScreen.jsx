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

  useEffect(() => {
    const timer = setTimeout(() => setShowStart(true), 6000); // 5s delay for GIF
    return () => clearTimeout(timer);
  }, []);

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
          onClick={() => navigate("/home")}
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
            // Make bigger on mobile
              minHeight: '756px',
              maxHeight: '100vh',
          }}
        />
      )}
    </div>
  );
}
