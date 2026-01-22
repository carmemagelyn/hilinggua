import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main style={{ position: 'relative', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1.2em', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: isMobile ? '95vw' : '90%',
        maxWidth: 600,
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '16px',
        padding: '2em',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)'
      }}>
        {/* Left arrow back button */}
        <button
          onClick={() => navigate("/home")}
          style={{
            position: 'fixed',
            top: '24px',
            left: '18px',
            zIndex: 200,
            background: 'rgba(255,255,255,0.85)',
            border: 'none',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 16px 4px #fff, 0 0 32px 8px #fff57e88',
            cursor: 'pointer',
            padding: 0,
            outline: 'none',
            transition: 'box-shadow 0.2s',
          }}
          aria-label="Back to Home"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="14,5 7,11 14,17" stroke="#222" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </button>

        {/* Title */}
        <h1 style={{
          fontSize: isMobile ? '1.8em' : '2.2em',
          color: '#26ccc2',
          textAlign: 'center',
          marginTop: '1em',
          fontWeight: 900,
          fontFamily: 'Montserrat, Arial, sans-serif',
          textShadow: '0 2px 4px rgba(38, 204, 194, 0.1)'
        }}>
          About Us
        </h1>

        {/* Content */}
        <div style={{
          fontSize: isMobile ? '1.1em' : '1.1em',
          color: '#000',
          lineHeight: '1.8em',
          textAlign: 'center',
          fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        }}>
          <p style={{ marginBottom: '2em', color: '#000' }}>
            Hilinggua is a web application developed as a thesis project entitled “Developing a Web Application as a Learning Aid for Hiligaynon Vocabulary Acquisition Among Foreign Learners” by the senior high school students of Hua Siong College of Iloilo, Grade 12 – Socrates, Batch 2025–2026, in partial fulfillment of their academic requirements. While the thesis has been completed, the application remains under continuous development to further enhance its functionality, performance and overall user experience.
</p>
          
          <p style={{ marginBottom: '.5em', color: '#000' }}>
            The application was designed, developed, managed and is owned by the project developer, ensuring that all content, features and functionalities accurately reflect the objectives, academic standards and collective efforts of the students in successfully completing the project.          </p>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '2em',
          paddingTop: '1.5em',
          borderTop: '2px solid #fff57e',
          width: '100%',
          textAlign: 'center',
          fontSize: '0.9em',
          color: '#666',
          fontStyle: 'italic'
        }}>
          Thank you for using Hilinggua!
        </div>
      </div>

      {/* Animated GIF */}
      <div 
        style={{ 
          position: 'fixed', 
          bottom: '-10vw', 
          right: '-35vw', 
          zIndex: 1, 
          pointerEvents: 'none'
        }}
      >
        <img 
          src="/asset/ref/blinkhappy.gif" 
          alt="Animated character blinking happily" 
          style={{ 
            width: '400px', 
            maxWidth: '300vw', 
            height: 'auto', 
            display: 'inline-block', 
            transform: 'scaleX(-1)', 
            filter: 'drop-shadow(0 0 24px #fff57e88)' 
          }} 
        />
      </div>
    </main>
  );
}

export default About;
