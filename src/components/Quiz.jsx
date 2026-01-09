import React, { useState } from 'react';
import markersSentences from '../data/markersSentences';

function shuffleArray(array) {
  // Fisher-Yates shuffle
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function Quiz() {
  const [quizIndex, setQuizIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  // Only use Hiligaynon sentences
  const quizData = markersSentences.filter(q => q.sentence && q.sentence.trim().length > 0);
  const totalQuestions = quizData.length;
  const current = quizData[quizIndex];
  const scrambled = current ? shuffleArray(current.sentence.split(' ')).join(' ') : '';

  const handlePrevious = () => {
    setQuizIndex(prev => (prev === 0 ? totalQuestions - 1 : prev - 1));
    setUserAnswer('');
    setFeedback('');
    setShowAnswer(false);
  };

  const handleNext = () => {
    setQuizIndex(prev => (prev === totalQuestions - 1 ? 0 : prev + 1));
    setUserAnswer('');
    setFeedback('');
    setShowAnswer(false);
  };

  const handleCheck = () => {
    if (!current) return;
    if (userAnswer.trim() === current.sentence.trim()) {
      setFeedback('✅ Correct!');
    } else {
      setFeedback('❌ Try again or show answer.');
    }
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
    setFeedback('');
  };

  return (
    <main style={{ paddingTop: '70px' }}>
      <div style={{ textAlign: 'center', marginBottom: '1.2rem' }}>
        <h1 style={{ margin: 0 }}>Scrambled Sentences</h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '18px', marginTop: '1rem', flexWrap: 'wrap' }}>
          <button
            onClick={handlePrevious}
            style={{
              padding: '8px 12px',
              fontSize: '0.95em',
              borderRadius: '6px',
              border: '2px solid #FFE05D',
              background: '#FFE05D',
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
              e.target.style.background = '#FFE05D';
              e.target.style.boxShadow = 'none';
            }}
          >
            ←
          </button>
          <span style={{ color: '#FFE05D', fontWeight: '700', minWidth: '50px', textAlign: 'center' }}>{quizIndex + 1}/{totalQuestions}</span>
          <button
            onClick={handleNext}
            style={{
              padding: '8px 12px',
              fontSize: '0.95em',
              borderRadius: '6px',
              border: '2px solid #FFE05D',
              background: '#FFE05D',
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
              e.target.style.background = '#FFE05D';
              e.target.style.boxShadow = 'none';
            }}
          >
            →
          </button>
        </div>
      </div>
      <p style={{ padding: '1rem', color: 'white', textAlign: 'center' }}>
        Unscramble the words to form the correct Hiligaynon sentence.
      </p>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1rem' }}>
        <div className="card" style={{ marginBottom: '2rem' }}>
          {current ? (
            <>
              {current.image && (
                <img
                  src={current.image}
                  alt={current.sentence}
                  style={{ width: '100%', maxHeight: '300px', borderRadius: '6px', objectFit: 'contain', marginBottom: '0.75rem', display: 'block' }}
                />
              )}
              {/* Pronunciation audio only after show answer */}
              {showAnswer && (
                <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
                  <audio controls style={{ width: '100%', maxWidth: '400px' }}>
                    <source
                      src={
                        current.pronunciation
                          ? current.pronunciation
                          : `/asset/word-sent-hil/${current.sentence.replace(/[?.]/g, '').replace(/\s+/g, ' ').trim().replace(/ /g, ' ').replace(/’/g, '').replace(/_/g, '').replace(/,/g, '').replace(/:/g, '').replace(/;/g, '').replace(/-/, '').replace(/…/g, '').replace(/“|”/g, '').replace(/'/g, '')}.m4a`
                      }
                      type="audio/mpeg"
                    />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}
              <h3 style={{ color: '#FFE05D', marginTop: 0 }}>Scrambled:</h3>
              <p style={{ color: '#E2852E', fontWeight: 'bold', fontSize: '1.2em', marginBottom: '1.5rem' }}>{scrambled}</p>
              <input
                type="text"
                value={userAnswer}
                onChange={e => setUserAnswer(e.target.value)}
                placeholder="Type the correct sentence..."
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '6px',
                  border: '2px solid #FFE05D',
                  fontSize: '1em',
                  marginBottom: '1rem',
                  color: '#26ccc2',
                  background: 'white',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <button
                  onClick={handleCheck}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '6px',
                    border: '2px solid #FFE05D',
                    background: '#FFE05D',
                    color: '#26ccc2',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={e => {
                    e.target.style.background = 'white';
                    e.target.style.boxShadow = '0 4px 12px rgba(255,255,255,0.3)';
                  }}
                  onMouseLeave={e => {
                    e.target.style.background = '#FFE05D';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Check
                </button>
                <button
                  onClick={handleShowAnswer}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '6px',
                    border: '2px solid #E2852E',
                    background: '#E2852E',
                    color: '#26ccc2',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={e => {
                    e.target.style.background = 'white';
                    e.target.style.boxShadow = '0 4px 12px rgba(255,183,108,0.3)';
                  }}
                  onMouseLeave={e => {
                    e.target.style.background = '#E2852E';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Show Answer
                </button>
              </div>
              {feedback && <p style={{ color: feedback.startsWith('✅') ? '#6aece1' : '#E2852E', fontWeight: 'bold' }}>{feedback}</p>}
              {showAnswer && (
                <div style={{ marginTop: '1rem', background: 'rgba(106,236,225,0.08)', padding: '0.75rem', borderRadius: '4px' }}>
                  <span style={{ color: '#6aece1', fontWeight: 'bold' }}>Answer: </span>
                  <span style={{ color: 'white' }}>{current.sentence}</span>
                </div>
              )}
            </>
          ) : (
            <p style={{ color: 'white' }}>No quiz data available.</p>
          )}
        </div>
      </div>
    </main>
  );
}

export default Quiz;