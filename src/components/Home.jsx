import React from 'react';

function Home() {
  return (
    <main>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <img 
          src="/asset/ref/logo.png" 
          alt="Hilinggua Logo" 
          style={{
            maxWidth: '200px',
            height: 'auto',
            borderRadius: '12px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            marginBottom: '20px'
          }}
        />
      </div>
      <h1>Welcome to Hilinggua</h1>
      <div className="card">
        <p>Master the Hiligaynon language through our interactive learning platform.</p>
        <p>Explore vocabulary, learn linguistic markers, and test your knowledge with our comprehensive quiz system.</p>
        <p>Start by exploring the Vocabulary section to learn new words, or jump into the Quiz to test your skills!</p>
      </div>
    </main>
  );
}

export default Home;