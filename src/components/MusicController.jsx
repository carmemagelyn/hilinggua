import React, { useContext } from 'react';
import { MusicContext } from '../context/MusicContext';

export default function MusicController() {
  const context = useContext(MusicContext);
  
  if (!context) {
    return null; // Don't render if context is not available
  }

  const {
    musicPlaying,
    musicVolume,
    toggleMusic,
    handleVolumeChange,
  } = context;

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <button
          onClick={toggleMusic}
          style={{
            background: musicPlaying ? '#fff57e' : 'transparent',
            color: musicPlaying ? '#26ccc2' : '#26ccc2',
            border: '2px solid #fff57e',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.3s',
            
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
          }}
          title={musicPlaying ? 'Pause music' : 'Play music'}
        >
          <img 
            src="/asset/ref/speaker.png" 
            alt={musicPlaying ? 'Speaker' : 'Muted'} 
            style={{ 
              width: '25px', 
              height: '15px',
              opacity: musicPlaying ? 1 : 0.6,
            }} 
          />
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={musicVolume}
          onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
          style={{
            width: '8px',
            height: '100px',
            cursor: 'pointer',
            background: 'linear-gradient(to bottom, #26ccc2 0%, #26ccc2 ' + (musicVolume * 100) + '%, #ddd ' + (musicVolume * 100) + '%, #ddd 100%)',
            borderRadius: '5px',
            border: '2px solid #fff57e',
            outline: 'none',
            transition: 'all 0.2s',
            writingMode: 'vertical-lr',
            direction: 'rtl',
          }}
          title={`Volume: ${Math.round(musicVolume * 100)}%`}
        />
      </div>
    </>
  );
}
