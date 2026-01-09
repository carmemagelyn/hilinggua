import React, { useState, useEffect } from 'react';
import { vocabularyData } from '../data/vocabulary';

function Vocabulary({ initialIndex = 0, onIndexChange }) {
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  const totalWords = vocabularyData.length;
  const selectedWord = vocabularyData[selectedIndex];

  useEffect(() => {
    setSelectedIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (onIndexChange) {
      onIndexChange(selectedIndex);
    }
  }, [selectedIndex, onIndexChange]);


  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? totalWords - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === totalWords - 1 ? 0 : prev + 1));
  };

  return (
    <main style={{ paddingTop: '70px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '18px', marginBottom: '1.2rem', flexWrap: 'wrap' }}>
        <h1 style={{ margin: 0 }}>Vocabularies</h1>
        <button
          onClick={handlePrevious}
          style={{
            padding: '8px 12px',
            fontSize: '0.95em',
            borderRadius: '6px',
            border: '2px solid #fff57e',
            background: '#fff57e',
            color: '#26ccc2',
            cursor: 'pointer',
            fontWeight: '700',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={e => {
            e.target.style.background = 'white';
            e.target.style.boxShadow = '0 4px 12px rgba(255,255,255,0.3)';
          }}
          onMouseLeave={e => {
            e.target.style.background = '#fff57e';
            e.target.style.boxShadow = 'none';
          }}
        >
          ←
        </button>
        <span style={{ color: '#fff57e', fontWeight: '700', minWidth: '50px', textAlign: 'center' }}>
          {selectedIndex + 1}/{totalWords}
        </span>
        <button
          onClick={handleNext}
          style={{
            padding: '8px 12px',
            fontSize: '0.95em',
            borderRadius: '6px',
            border: '2px solid #fff57e',
            background: '#fff57e',
            color: '#26ccc2',
            cursor: 'pointer',
            fontWeight: '700',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={e => {
            e.target.style.background = 'white';
            e.target.style.boxShadow = '0 4px 12px rgba(255,255,255,0.3)';
          }}
          onMouseLeave={e => {
            e.target.style.background = '#fff57e';
            e.target.style.boxShadow = 'none';
          }}
        >
          →
        </button>
      </div>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="card">
          {/* Word Image */}
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img 
              src={selectedWord.image} 
              alt={selectedWord.word}
              style={{
                maxWidth: '100%',
                maxHeight: '250px',
                borderRadius: '8px',
                objectFit: 'contain'
              }}
            />
          </div>
          {/* Word Title */}
          <h2 style={{ marginBottom: '20px', color: '#fff57e', textAlign: 'center', fontSize: 'clamp(1.3em, 5vw, 1.8em)' }}>
            {selectedWord.word}
          </h2>
          {/* Pronunciation Section */}
          <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '2px solid rgba(255, 255, 255, 0.2)' }}>
            <h3 style={{ color: '#fff57e', marginBottom: '10px', fontSize: 'clamp(1em, 3vw, 1.2em)' }}>🔊 Pronunciation</h3>
            <p style={{ fontSize: 'clamp(0.95em, 2.5vw, 1.1em)', marginBottom: '10px' }}>
              <strong>{selectedWord.pronunciation}</strong>
            </p>
            <audio 
              controls 
              style={{ width: '100%', maxWidth: '300px' }}
              controlsList="nodownload"
            >
              <source src={selectedWord.audio} type="audio/mp4" />
              Your browser does not support the audio element.
            </audio>
          </div>
          {/* Meaning Section */}
          <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '2px solid rgba(255, 255, 255, 0.2)' }}>
            <h3 style={{ color: '#ffb76c', marginBottom: '10px', fontSize: 'clamp(1em, 3vw, 1.2em)' }}>📖 English Meaning</h3>
            <p style={{ fontSize: 'clamp(1em, 2.5vw, 1.2em)', color: '#ffb76c', fontWeight: '600' }}>
              {selectedWord.meaning}
            </p>
          </div>
          {/* Example Sentence Section */}
          <div>
            <h3 style={{ color: '#6aece1', marginBottom: '10px', fontSize: 'clamp(1em, 3vw, 1.2em)' }}>✍️ Example Sentences</h3>
            {/* First Example */}
            <div style={{ 
              padding: '15px',
              background: 'rgba(255, 245, 126, 0.1)',
              borderRadius: '8px',
              borderLeft: '4px solid #fff57e',
              marginBottom: '15px'
            }}>
              <p style={{ marginBottom: '5px', color: '#fff57e', fontWeight: '600', fontSize: 'clamp(0.85em, 2vw, 0.95em)' }}>Hiligaynon:</p>
              <p style={{ margin: '0', fontSize: 'clamp(0.9em, 2.2vw, 1.05em)' }}>
                {selectedWord.exampleSentence}
              </p>
            </div>
            <div style={{ 
              padding: '15px',
              background: 'rgba(255, 181, 108, 0.1)',
              borderRadius: '8px',
              borderLeft: '4px solid #ffb76c',
              marginBottom: '15px'
            }}>
              <p style={{ marginBottom: '5px', color: '#ffb76c', fontWeight: '600', fontSize: 'clamp(0.85em, 2vw, 0.95em)' }}>English:</p>
              <p style={{ margin: '0', fontSize: 'clamp(0.9em, 2.2vw, 1.05em)' }}>
                {selectedWord.exampleTranslation}
              </p>
            </div>
            {/* Example Sentence Image */}
            {selectedWord.exampleImage && (
              <div style={{ 
                marginTop: '15px',
                padding: '15px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <img 
                  src={selectedWord.exampleImage} 
                  alt="Example sentence visual"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '300px',
                    borderRadius: '6px',
                    objectFit: 'contain'
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Vocabulary;

  