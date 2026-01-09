import React, { useState } from 'react';

function Markers() {
  const [markerIndex, setMarkerIndex] = useState(0);

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
    },
    {
      id: 2,
      marker: "Sang + verb/object",
      usage: "Marks the object being acted upon",
      examples: [
        { 
          sentence: "Nagbasa siya sang libro.", 
          translation: "He/She read a book.",
          image: "/asset/img-sentence/He_She read a book..png"
        },
        { 
          sentence: "Nagkuha niya sang tubig.", 
          translation: "He/She took the water.",
          image: "/asset/img-sentence/He_She took the water..png"
        }
      ]
    },
    {
      id: 3,
      marker: "Sa + verb/location/recipient",
      usage: "Marks location, direction, or indirect object.",
      examples: [
        {
          sentence: "Nagpadulong siya sa eskwelahan.",
          translation: "He/She went to school.",
          image: "/asset/img-sentence/He_She went to school..png"
        },
        {
          sentence: "Ginhatag niya ang regalo sa bata.",
          translation: "He/She gave the gift to the child.",
          image: "/asset/img-sentence/He_She gave the gift to the child..png"
        }
      ]
    },
    {
      id: 4,
      marker: "Kay + verb/person",
      usage: "Marks the person receiving the action.",
      examples: [
        {
          sentence: "Ginhatag ko ini kay Maria.",
          translation: "I gave this to Maria.",
          image: "/asset/img-sentence/I gave this to Maria..png"
        },
        {
          sentence: "Nagsulat siya para kay tatay.",
          translation: "He/She wrote a letter to Dad.",
          image: "/asset/img-sentence/He_She wrote a letter to Dad..png"
        }
      ]
    },
    {
      id: 5,
      marker: "Ni / Nina + verb/possession",
      usage: "Marks ownership.",
      examples: [
        {
          sentence: "Libro ni Juan.",
          translation: "Juan’s book.",
          image: "/asset/img-sentence/Juan’s book..png"
        },
        {
          sentence: "Sapatos nina Ana kag Maria.",
          translation: "Ana and Maria’s shoes.",
          image: "/asset/img-sentence/Ana and Maria’s shoes..png"
        }
      ]
    },
    {
      id: 6,
      marker: "Nga + verb/description",
      usage: "Connects adjectives, nouns, or clauses ('that', 'which', 'who').",
      examples: [
        {
          sentence: "Ang bata nga malipayon nagahampang.",
          translation: "The happy child is playing.",
          image: "/asset/img-sentence/The happy child is playing..png"
        },
        {
          sentence: "May balay siya nga daku.",
          translation: "He/She has a house that is big.",
          image: "/asset/img-sentence/He_She has a house that is big..png"
        }
      ]
    },
    {
      id: 7,
      marker: "Pa / Man + verb",
      usage: "Adds emphasis, politeness, or continuation.",
      examples: [
        {
          sentence: "Hatagi pa siya sang tubig.",
          translation: "Give him/her some more water.",
          image: "/asset/img-sentence/Give him_her some more water..png"
        },
        {
          sentence: "Ginhimo man niya ini.",
          translation: "He/She did this too.",
          image: "/asset/img-sentence/He_She did this too..png"
        }
      ]
    },
    {
      id: 8,
      marker: "Ni + verb/possession",
      usage: "Marks possession or 'belonging to.'",
      examples: [
        {
          sentence: "Balay ni Tatay.",
          translation: "Dad’s house.",
          image: "/asset/img-sentence/Dad’s house..png"
        },
        {
          sentence: "Sapatos ni Juan.",
          translation: "Juan’s shoes.",
          image: "/asset/img-sentence/Juan’s shoes..png"
        }
      ]
    },
    {
      id: 9,
      marker: "Na / Na lang + verb",
      usage: "Indicates completion or 'already.'",
      examples: [
        {
          sentence: "Nakakaon na ikaw?",
          translation: "Have you eaten?",
          image: "/asset/img-sentence/Have you eaten.png"
        },
        {
          sentence: "Matulog na lang ko.",
          translation: "I’ll just sleep.",
          image: "/asset/img-sentence/I’ll just sleep..png"
        }
      ]
    },
    {
      id: 10,
      marker: "Lang + verb",
      usage: "Indicates limitation or 'only.'",
      examples: [
        {
          sentence: "Mag una ka lang tulog.",
          translation: "Just sleep first.",
          image: "/asset/img-sentence/Just  sleep first..png"
        },
        {
          sentence: "Magtuon ka lang anay.",
          translation: "Just study.",
          image: "/asset/img-sentence/just study..png"
        }
      ]
    },
    {
      id: 11,
      marker: "Gani / Gani man + verb",
      usage: "Indicates reason or result ('therefore/so').",
      examples: [
        {
          sentence: "Malain ang panahon, gani indi kita makalakat.",
          translation: "The weather is bad, so we won’t go.",
          image: "/asset/img-sentence/The weather is bad, so we won’t go..png"
        },
        {
          sentence: "Temprano siya magtuon, gani maayo ang iya grado sa exam.",
          translation: "He/She studies early, so he/she gets good grades in the exam.",
          image: "/asset/img-sentence/He:She studies early, so he:she gets good grades in the exam.png"
        }
      ]
    },
    {
      id: 12,
      marker: "Paagi sa + verb",
      usage: "Indicates 'through' or 'by means of.'",
      examples: [
        {
          sentence: "Nakita ko siya paagi sa internet.",
          translation: "I saw him/her through the internet.",
          image: "/asset/img-sentence/I saw him_her through the internet..png"
        },
        {
          sentence: "Ginhimo ini paagi sa teamwork.",
          translation: "This was done through teamwork.",
          image: "/asset/img-sentence/This was done through teamwork..png"
        }
      ]
    },
    {
      id: 13,
      marker: "Sa gihapon + verb",
      usage: "Indicates continuation, 'still' or 'anyway.'",
      examples: [
        {
          sentence: "Nagahulat siya sa gihapon.",
          translation: "He/She is still waiting.",
          image: "/asset/img-sentence/He_She is still waiting..png"
        },
        {
          sentence: "Biskan malain ang panahon, naglakat siya sa gihapon.",
          translation: "Despite the bad weather, he/she still walked.",
          image: "/asset/img-sentence/Even though the weather is bad, he_she is still going..png"
        }
      ]
    },
    {
      id: 14,
      marker: "Biskan / Maski + verb",
      usage: "Indicates 'even if' or 'although.'",
      examples: [
        {
          sentence: "Biskan gutom, naghulat siya.",
          translation: "Even if hungry, he/she waited.",
          image: "/asset/img-sentence/Even if hungry, he_she waited..png"
        },
        {
          sentence: "Maski malayo, naglakat siya.",
          translation: "Even though it’s far, he/she went.",
          image: "/asset/img-sentence/Even though it’s far, he_she went..png"
        }
      ]
    },
    {
      id: 15,
      marker: "Pa / Pa man + verb",
      usage: "Indicates request or polite emphasis.",
      examples: [
        {
          sentence: "Hatagi pa ako sang tubig, palihog.",
          translation: "Give me some more water, please.",
          image: "/asset/img-sentence/Give him_her some more water..png"
        },
        {
          sentence: "Tudloi man ako magluto.",
          translation: "Teach me to cook too.",
          image: "/asset/img-sentence/Teach me to cook too..png"
        }
      ]
    },
    {
      id: 16,
      marker: "Daw / Daw lang + verb",
      usage: "Indicates approximation, 'like' or 'seems.'",
      examples: [
        {
          sentence: "Daw masadya siya subong.",
          translation: "He/She seems happy now.",
          image: "/asset/img-sentence/He_She seems happy now..png"
        },
        {
          sentence: "Daw matam-is ini nga prutas.",
          translation: "It looks like a sweet fruit.",
          image: "/asset/img-sentence/This fruit seems sweet..png"
        }
      ]
    }
  ];

  const currentMarker = markers[markerIndex];
  const totalMarkers = markers.length;

  const handlePrevious = () => {
    setMarkerIndex((prevIndex) => 
      prevIndex === 0 ? totalMarkers - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setMarkerIndex((prevIndex) => 
      prevIndex === totalMarkers - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <main style={{ paddingTop: '70px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '18px', marginBottom: '1.2rem', flexWrap: 'wrap' }}>
        <h1 style={{ margin: 0 }}>Hiligaynon Markers</h1>
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
        <span style={{ color: '#fff57e', fontWeight: '700', minWidth: '50px', textAlign: 'center' }}>{markerIndex + 1}/{totalMarkers}</span>
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
      <p style={{ padding: '1rem', color: 'white', textAlign: 'center' }}>
        Learn about the various markers used in Hiligaynon grammar
      </p>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1rem' }}>
        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#fff57e', marginTop: 0 }}>{currentMarker.marker}</h3>
          <p style={{ color: 'white', fontSize: '1.05em', marginBottom: '1.5rem' }}>{currentMarker.usage}</p>
          <h4 style={{ color: '#ffb76c', marginBottom: '1rem' }}>Example sentences:</h4>
          {currentMarker.examples.map((example, idx) => (
            <div key={idx} style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(255, 181, 108, 0.1)', borderLeft: '3px solid #ffb76c', borderRadius: '4px' }}>
              {example.image && (
                <img src={example.image} alt={example.sentence} style={{ width: '100%', maxHeight: '300px', borderRadius: '6px', objectFit: 'contain', marginBottom: '0.75rem', display: 'block' }} />
              )}
              <p style={{ color: '#fff57e', margin: '0 0 0.3rem 0', fontWeight: 'bold' }}>{example.sentence}</p>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', margin: 0, fontStyle: 'italic' }}>{example.translation}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Markers;