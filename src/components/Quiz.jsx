import React, { useState } from 'react';

function Quiz() {
  const [activeTab, setActiveTab] = useState('scrambled');

  return (
    <main>
      <h1>Quiz</h1>
      <div className="tabs">
        <button 
          className={`tab-button ${activeTab === 'scrambled' ? 'active' : ''}`}
          onClick={() => setActiveTab('scrambled')}
        >
          Scrambled Words
        </button>
        <button 
          className={`tab-button ${activeTab === 'questions' ? 'active' : ''}`}
          onClick={() => setActiveTab('questions')}
        >
          Question Form
        </button>
      </div>
      <div className="card">
        {activeTab === 'scrambled' && (
          <div>
            <h2>Scrambled Words Quiz</h2>
            <p>Unscramble the words to form correct Hiligaynon sentences.</p>
            <p>Quiz questions will be added here.</p>
          </div>
        )}
        {activeTab === 'questions' && (
          <div>
            <h2>Question Form Quiz</h2>
            <p>Answer questions in Hiligaynon to practice the language.</p>
            <p>Quiz questions will be added here.</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Quiz;