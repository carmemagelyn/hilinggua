import React from "react";

export default function VocabularyFrontPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "url('/asset/ref/beebg.jpg') center center/cover no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 0,
        position: "relative"
      }}
    >
      <h1 style={{
        marginTop: '2.5em',
        fontFamily: 'Archivo Black, Arial Black, sans-serif',
        fontSize: 'clamp(2em, 5vw, 3em)',
        color: '#222',
        fontWeight: 900,
        letterSpacing: '0.5px',
        textShadow: '0 2px 12px #fff57e99, 0 1px 0 #fff',
        zIndex: 200,
        background: 'rgba(255,255,255,0.95)',
        borderRadius: '18px',
        padding: '0.5em 2em',
        boxShadow: '0 4px 18px #7b8457',
        position: 'relative',
      }}>
        Vocabulary
      </h1>
      <img
        src="/asset/ref/vocabcallout.png"
        alt="Vocabulary Callout"
        style={{
          marginTop: '2em',
          width: 'clamp(320px, 60vw, 700px)',
          maxWidth: '90vw',
          height: 'auto',
          display: 'block',
          filter: 'drop-shadow(0 4px 18px #7b8457aa)',
          background: 'rgba(255,255,255,0.85)',
          borderRadius: '18px',
          padding: '1em',
          position: 'relative',
          zIndex: 100,
        }}
      />
      <div style={{
        marginTop: '2.5em',
        background: 'rgba(255,255,255,0.92)',
        borderRadius: '16px',
        boxShadow: '0 2px 12px #7b8457',
        padding: '1.5em 2em',
        maxWidth: '600px',
        width: '90vw',
        textAlign: 'center',
        fontFamily: 'Montserrat, Arial, sans-serif',
        color: '#222',
        fontSize: '1.2em',
        zIndex: 100,
        position: 'relative',
      }}>
        Welcome to the Hilinggua Vocabulary section!<br />
        <span style={{ fontSize: '0.95em', color: '#444' }}>
          Explore, learn, and master Hiligaynon words with pronunciation, meanings, and example sentences.
        </span>
        <br /><br />
        <button style={{
          background: '#fff57e',
          color: '#26ccc2',
          border: 'none',
          borderRadius: '10px',
          fontWeight: 700,
          fontSize: '1.1em',
          padding: '0.7em 2.2em',
          marginTop: '1em',
          boxShadow: '0 2px 8px #ffb76c88',
          cursor: 'pointer',
          fontFamily: 'Archivo Black, sans-serif',
          letterSpacing: '1px',
          transition: 'background 0.2s, color 0.2s',
        }}>
          Start Learning
        </button>
      </div>
      {/* Speaker button for VocabularyFrontPage (example usage) */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2em 0 1em 0' }}>
        <button
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            outline: 'none',
            display: 'flex',
            alignItems: 'center',
          }}
          aria-label="Play pronunciation for Balay"
          onClick={() => {
            const audioPath = '/asset/word-voice/balay.mp3';
            fetch(audioPath, { method: 'HEAD' })
              .then(res => {
                if (res.ok) {
                  const audio = new Audio(audioPath);
                  audio.play();
                } else {
                  alert('Pronunciation audio not found for this word.');
                }
              })
              .catch(() => {
                alert('Pronunciation audio not found for this word.');
              });
          }}
        >
          <img
            src="/asset/ref/speaker.png"
            alt="Speaker icon"
            style={{ width: 72, height: 72, marginRight: 8 }}
          />
          <span style={{ fontSize: '1.1em', color: '#222', fontWeight: 600 }}>
            Listen
          </span>
        </button>
      </div>
      {/* Example: Add speaker for Bata on front page */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2em 0 1em 0' }}>
        <button
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            outline: 'none',
            display: 'flex',
            alignItems: 'center',
          }}
          aria-label="Play pronunciation for Bata"
          onClick={() => {
            const audioPath = '/asset/word-voice/Bata.m4a';
            fetch(audioPath, { method: 'HEAD' })
              .then(res => {
                if (res.ok) {
                  const audio = new Audio(audioPath);
                  audio.play();
                } else {
                  alert('Pronunciation audio not found for Bata.');
                }
              })
              .catch(() => {
                alert('Pronunciation audio not found for Bata.');
              });
          }}
        >
          <img
            src="/asset/ref/speaker.png"
            alt="Speaker icon"
            style={{ width: 72, height: 72, marginRight: 8 }}
          />
          <span style={{ fontSize: '1.1em', color: '#222', fontWeight: 600 }}>
            Listen to "Bata"
          </span>
        </button>
      </div>
      {/* Add more content or navigation here as needed */}
    </div>
  );
}
