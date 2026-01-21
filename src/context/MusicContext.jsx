import React, { createContext, useState, useRef, useEffect } from 'react';

export const MusicContext = createContext();

export function MusicProvider({ children }) {
  const musicRef = useRef(null);
  const [musicPlaying, setMusicPlaying] = useState(true);
  const [musicVolume, setMusicVolume] = useState(0.5);

  useEffect(() => {
    let hasPlayedMusic = false;

    const playMusic = () => {
      if (musicRef.current && !hasPlayedMusic) {
        musicRef.current.volume = musicVolume;
        musicRef.current.currentTime = 0;
        musicRef.current.play().then(() => {
          hasPlayedMusic = true;
          setMusicPlaying(true);
          document.removeEventListener('click', playMusic);
          document.removeEventListener('touchstart', playMusic);
        }).catch(() => {
          // Silently handle play error
        });
      }
    };

    document.addEventListener('click', playMusic);
    document.addEventListener('touchstart', playMusic);

    return () => {
      document.removeEventListener('click', playMusic);
      document.removeEventListener('touchstart', playMusic);
    };
  }, [musicVolume]);

  useEffect(() => {
    if (musicRef.current) {
      if (musicPlaying) {
        musicRef.current.play().catch(() => {});
      } else {
        musicRef.current.pause();
      }
    }
  }, [musicPlaying]);

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
  };

  const handleVolumeChange = (newVolume) => {
    setMusicVolume(newVolume);
    if (musicRef.current) {
      musicRef.current.volume = newVolume;
    }
  };

  return (
    <MusicContext.Provider
      value={{
        musicRef,
        musicPlaying,
        musicVolume,
        toggleMusic,
        handleVolumeChange,
      }}
    >
      <audio ref={musicRef} loop style={{ display: 'none' }}>
        <source src="/asset/ref/music.mp3" type="audio/mpeg" />
      </audio>
      {children}
    </MusicContext.Provider>
  );
}
