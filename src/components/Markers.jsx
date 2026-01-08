import React from 'react';

function Markers() {
  const markers = [
    {
      id: 1,
      marker: "Ang + verb",
      usage: "Marks the subject/topic of the sentence",
      examples: [
        { 
          sentence: "Ang bata nagakaon.", 
          translation: "The child is eating.",
          image: "/asset/img-sentence/The child is eating..png"
        },
        { 
          sentence: "Ang manok nagalupad.", 
          translation: "The chicken is flying.",
          image: "/asset/img-sentence/The chicken is flying..png"
        }
      ]
    }
  ];

  return (
    <main>
      <h1>Hiligaynon Markers</h1>
      <p style={{ padding: '1rem', color: 'white', textAlign: 'center' }}>
        Learn about the various markers used in Hiligaynon grammar
      </p>
      
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1rem' }}>
        {markers.map((marker) => (
          <div
            key={marker.id}
            className="card"
            style={{ marginBottom: '2rem' }}
          >
            <h3 style={{ color: '#fff57e', marginTop: 0 }}>{marker.marker}</h3>
            <p style={{ color: 'white', fontSize: '1.05em', marginBottom: '1.5rem' }}>
              {marker.usage}
            </p>
            
            <h4 style={{ color: '#ffb76c', marginBottom: '1rem' }}>Example sentences:</h4>
            {marker.examples.map((example, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: '1rem',
                  padding: '0.75rem',
                  background: 'rgba(255, 181, 108, 0.1)',
                  borderLeft: '3px solid #ffb76c',
                  borderRadius: '4px'
                }}
              >
                {example.image && (
                  <img 
                    src={example.image} 
                    alt={example.sentence}
                    style={{
                      width: '100%',
                      maxHeight: '300px',
                      borderRadius: '6px',
                      objectFit: 'contain',
                      marginBottom: '0.75rem',
                      display: 'block'
                    }}
                  />
                )}
                <p style={{ color: '#fff57e', margin: '0 0 0.3rem 0', fontWeight: 'bold' }}>
                  {example.sentence}
                </p>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', margin: 0, fontStyle: 'italic' }}>
                  {example.translation}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}

export default Markers;