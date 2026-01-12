import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function StartScreen() {
    useEffect(() => {
      // Remove beebg background from body when StartScreen is shown
      const originalBg = document.body.style.background;
      document.body.style.background = 'none';
      return () => {
        document.body.style.background = originalBg;
      };
    }, []);
  const navigate = useNavigate();
  const [showStart, setShowStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowStart(true), 4500); // 5s delay for GIF
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: "0 !important",
        background: `url('/asset/ref/huasiong.png') center center/cover no-repeat`,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
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
            width: '200vw',
            maxWidth: '100%',
            height: 'auto',
            position: 'fixed',
            left: 0,
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
