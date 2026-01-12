              // Audio playback handler for marker sentences
              const playAudio = () => {
                // Map markerIndex to audio file paths
                let audioPath = '';
                if (markerIndex === 0) {
                  audioPath = '/asset/word-sent-hil/Ang bata nagakaon.m4a';
                } else {
                  const audioFiles = [
                    '', // 0 handled above
                    'Nagbasa siya sang libro',
                    'Kamusta ka sa eskwelahan',
                    'Ginhatag ko ini kay Maria',
                    'Ang bata nga malipayon naga hampang',
                    'Hatagi pa siya sang tubig',
                    'Balay ni Tatay',
                    'Gab-e na, halong kamo',
                    'Saging lang gin kaon ko',
                    'Nagahulat siya gihapon bisan init',
                    'Hatagi pa ako sang tubig, palihog',
                    'Daw masadya siya subong',
                    'Si Maria nagkanta',
                    'Sanday Ana kag Juan naghampang sa mga sapat',
                    'Sila amo ang nagahampang',
                    'Siya amo ang nagdaog sa patimpalak',
                  ];
                  const fileBase = audioFiles[markerIndex];
                  if (!fileBase) return;
                  audioPath = `/asset/marker-voice/${fileBase}.m4a`;
                }
                const audio = new window.Audio(audioPath);
                audio.onerror = () => {
                  // Fallback to .mp3 in marker-voice for non-marker 0
                  if (markerIndex !== 0) {
                    const audioFiles = [
                      '',
                      'Nagbasa siya sang libro',
                      'Kamusta ka sa eskwelahan',
                      'Ginhatag ko ini kay Maria',
                      'Ang bata nga malipayon naga hampang',
                      'Hatagi pa siya sang tubig',
                      'Balay ni Tatay',
                      'Gab-e na, halong kamo',
                      'Saging lang gin kaon ko',
                      'Nagahulat siya gihapon bisan init',
                      'Hatagi pa ako sang tubig, palihog',
                      'Daw masadya siya subong',
                      'Si Maria nagkanta',
                      'Sanday Ana kag Juan naghampang sa mga sapat',
                      'Sila amo ang nagahampang',
                      'Siya amo ang nagdaog sa patimpalak',
                    ];
                    const fileBase = audioFiles[markerIndex];
                    if (!fileBase) return;
                    const fallback = new window.Audio(`/asset/marker-voice/${fileBase}.mp3`);
                    fallback.play();
                  }
                };
                audio.play();
              };
            <img
              src="/asset/img-sentence/Nagbasa siya sang libro_.png"
              alt="Nagbasa siya sang libro sentence"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '32%',
                height: 'auto',
                pointerEvents: 'none',
                zIndex: 2,
              }}
            />
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Button data for title lookup
const markerButtons = [
  "ANG + VERB – Marks the subject/topic of the sentence.",
  "SANG + VERB/OBJECT – Marks the object being acted upon.",
  "SA + VERB/LOCATION/ RECIPIENT – Marks location, direction, or indirect object.",
  "KAY + VERB/PERSON – Marks the person receiving the action.",
  "NGA + VERB/DESCRIPTION – Connects adjectives, nouns, or clauses (“that,” “which,” “who”).",
  "PA / MAN + VERB – Adds emphasis, politeness, or continuation.",
  "NI + VERB/POSSESSION – Marks possession or “belonging to.”",
  "NA / NA LANG + VERB – Indicates completion or “already.” / Indicates a decision or choice, often meaning “just” or “might as well.”",
  "LANG + VERB – Indicates limitation, restriction, or “only / just.”",
  "GIHAPON + VERB – Indicates continuation, “still” or “anyway.”",
  "PA + VERB– Indicates request or polite emphasis.",
  "DAW + VERB – Indicates appearance or uncertainty (“seems,” “appears,” “looks like”).",
  "SI – marks a singular personal name as the subject",
  "SANDAY – marks plural personal names as the subject",
  "SILA  - plural subject pronoun meaning “they.”",
  "AMO - (used for emphasis / “the one(s) who”)",
];

export default function MarkerDetailPage() {
  const { markerId } = useParams();
  const navigate = useNavigate();
  const markerIndex = parseInt(markerId, 10);
  const title = markerButtons[markerIndex] || "Marker Detail";

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
        padding: "0",
        position: "relative"
      }}
    >
      {/* Back arrow button to Markers Front Page */}
      <button
        onClick={() => navigate("/markers")}
        style={{
          position: 'fixed',
          top: 55,
          left: 18,
          zIndex: 200,
          background: 'rgba(255,255,255,0.85)',
          border: 'none',
          borderRadius: '50%',
          width: 48,
          height: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 16px 4px #fff, 0 0 32px 8px #fff57e88',
          cursor: 'pointer',
          padding: 0,
          outline: 'none',
          transition: 'box-shadow 0.2s',
        }}
        aria-label="Back to Markers"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline points="14,5 7,11 14,17" stroke="#222" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </button>
      {/* Title at the top */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2em', gap: '1.5em', paddingBottom: '0' }}>
        <h1 style={{
          fontSize: 'clamp(1.3em, 4vw, 2.2em)',
          color: '#222',
          background: '#fafeaa',
          borderRadius: '12px',
          padding: '0.5em 1.5em',
          marginBottom: '1.5em',
          fontWeight: 900,
          textAlign: 'center',
          boxShadow: '0 4px 18px #7b8457',
          maxWidth: '95vw',
          width: 'clamp(220px, 80vw, 700px)'
        }}>{title}</h1>
        <div style={{
          position: 'relative',
          width: 'clamp(600px, 90vw, 1200px)',
          maxWidth: '150vw',
          margin: '0 0 1.5em 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img
            src="/asset/ref/cloud.png"
            alt="Cloud decoration"
            style={{
              width: '100%',
              height: 'auto',
              filter: 'drop-shadow(0 4px 18px #7b8457aa)',
              display: 'block',
            }}
          />
          {markerIndex === 0 && (
            <img
              src="/asset/img-sentence/Ang bata nagakaon_.png"
              alt="Ang bata nagakaon sentence"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '32%',
                height: 'auto',
                pointerEvents: 'none',
                zIndex: 2,
              }}
            />
          )}
          {markerIndex === 1 && (
            <img
              src="/asset/img-sentence/Nagbasa siya sang libro_.png"
              alt="Nagbasa siya sang libro sentence"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '32%',
                height: 'auto',
                pointerEvents: 'none',
                zIndex: 2,
              }}
            />
          )}
          {/* Speaker button for audio playback */}
          <button
            onClick={playAudio}
            style={{
              position: 'absolute',
              left: '50%',
              top: '100%',
              transform: 'translate(-50%, 0)',
              background: 'rgba(255,255,255,0.85)',
              border: '2px solid #fff57e',
              borderRadius: '50%',
              width: 64,
              height: 64,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 16px 4px #fff, 0 0 32px 8px #fff57e88',
              cursor: 'pointer',
              padding: 0,
              outline: 'none',
              transition: 'box-shadow 0.2s',
              zIndex: 10,
            }}
            aria-label="Play pronunciation"
          >
            <img src="/asset/ref/speaker.png" alt="Speaker" style={{ width: 70, height: 38 }} />
          </button>
           {markerIndex === 2 && (
            <img
              src="/asset/img-sentence/Nagbasa siya sang libro_.png"
              alt="Nagbasa siya sang libro sentence"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '32%',
                height: 'auto',
                pointerEvents: 'none',
                zIndex: 2,
              }}
            />
          )}
           {markerIndex === 3 && (
            <img
              src="/public/asset/img-sentence/Ginhatag ko ini kay Maria_.png"
              alt="Nagbasa siya sang libro sentence"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '32%',
                height: 'auto',
                pointerEvents: 'none',
                zIndex: 2,
              }}
            />
          )}
           {markerIndex === 4 && (
            <img
              src="/public/asset/img-sentence/Ang bata nga malipayon nagahampang_.png"
              alt="Ang bata nga malipayon nagahampang sentence"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '32%',
                height: 'auto',
                pointerEvents: 'none',
                zIndex: 2,
              }}
            />
          )}
           {markerIndex === 5 && (
            <img
              src="/public/asset/img-sentence/Hatagi pa siya sang tubig_.png"
              alt="Hatagi pa siya sang tubig sentence"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '32%',
                height: 'auto',
                pointerEvents: 'none',
                zIndex: 2,
              }}
            />
          )}
           {markerIndex === 6 && (
            <img
              src="/public/asset/img-sentence/Balay ni Tatay_.png"
              alt="Balay ni Tatay sentence"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '32%',
                height: 'auto',
                pointerEvents: 'none',
                zIndex: 2,
              }}
            />
          )}
           {markerIndex === 7 && (
            <img
              src="/public/asset/img-sentence/Gab-e na, halong kamo. (It’s night already, take care).png"
              alt="Gab-e na, halong kamo sentence"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '32%',
                height: 'auto',
                pointerEvents: 'none',
                zIndex: 2,
              }}
            />
          )}
           {markerIndex === 8 && (
            <img
              src="/public/asset/img-sentence/Saging lang gin kaon ko  (I only ate banana.).png"
              alt="Saging lang gin kaon ko sentence"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '32%',
                height: 'auto',
                pointerEvents: 'none',
                zIndex: 2,
              }}
            />
          )}
           {markerIndex === 9 && (
            <img
              src="/public/asset/img-sentence/Nagahulat siya gihapon bisan init. (He_She is still waiting even if its hot.).png"
              alt="Nagahulat siya gihapon bisan init sentence"
              style={{
                position: 'absolute',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '30%',
                height: '70%',
                pointerEvents: 'none',
                zIndex: 2,
              }}
            />
          )}
           {markerIndex === 10 && (
            <img
              src="/public/asset/img-sentence/Hatagi pa ako sang tubig, palihog..png"
              alt="Hatagi pa ako sang tubig, palihog sentence"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '32%',
                height: 'auto',
                pointerEvents: 'none',
                zIndex: 2,
              }}
            />
          )}
           {markerIndex === 11 && (
            <img
              src="/public/asset/img-sentence/Daw masadya siya subong. (He_She seems happy now.).png"
              alt="Daw masadya siya subong sentence"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '32%',
                height: 'auto',
                pointerEvents: 'none',
                zIndex: 2,
              }}
            />
          )}
           {markerIndex === 12 && (
            <img
              src="/public/asset/img-sentence/Si Maria nagkanta.  (Maria sang.).png"
              alt="Si Maria nagkanta sentence"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '32%',
                height: 'auto',
                pointerEvents: 'none',
                zIndex: 2,
              }}
            />
          )}
           {markerIndex === 13 && (
            <img
              src="/public/asset/img-sentence/Sanday Ana kag Juan naghampang sa mga sapat. (Ana and Juan played with the animals.).png"
              alt="Sanday Ana kag Juan naghampang sa mga sapat sentence"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '32%',
                height: 'auto',
                pointerEvents: 'none',
                zIndex: 2,
              }}
            />
          )}
           {markerIndex === 14 && (
            <img
              src="/public/asset/img-sentence/Sila amo ang nagahampang (They are the ones who are playing.).png"
              alt="Sila amo ang nagahampang sentence"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '32%',
                height: 'auto',
                pointerEvents: 'none',
                zIndex: 2,
              }}
            />
          )}
           {markerIndex === 15 && (
            <img
              src="/public/asset/img-sentence/Siya amo ang nagdaog sa patimpalak. (He_She is the one who won the contest.).png"
              alt="Siya ang nagdaog sa patimpalak sentence"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '32%',
                height: 'auto',
                pointerEvents: 'none',
                zIndex: 2,
              }}
            />
          )}
        </div>
        
        <div style={{ position: 'fixed', top: '300px', left: '-120px', zIndex: 300, pointerEvents: 'none', width: 'auto', height: 'auto' }}>
          <img
            src="/asset/ref/blinkhappy.gif"
            alt="Animated character blinking happily"
            style={{
              width: 'clamp(320px, 40vw, 600px)',
              maxWidth: '90vw',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>
        {/* Example sentence for each marker */}
          {(() => {
            const markerLabel = <div style={{ fontSize: '0.7em', color: '#555', marginTop: '2px', textAlign: 'center' }}>marker</div>;
            const subjectLabel = <div style={{ fontSize: '0.7em', color: '#555', marginTop: '2px', textAlign: 'center' }}>subject</div>;
            const verbLabel = <div style={{ fontSize: '0.7em', color: '#555', marginTop: '2px', textAlign: 'center' }}>verb</div>;
            const examples = [
              <><span style={{ display: 'inline-block' }}><b>Ang</b>{markerLabel}</span> <span style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }}>bata</span>{subjectLabel}</span> <span style={{ display: 'inline-block' }}><i>naga-kaon</i>{verbLabel}</span>.</>,
              <><span style={{ display: 'inline-block' }}><b>Nagbasa</b>{markerLabel}</span> <span style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }}>siya</span>{subjectLabel}</span> <span style={{ display: 'inline-block' }}><i>sang libro</i>{verbLabel}</span>.</>,
              <><span style={{ display: 'inline-block' }}><b>Kamusta</b>{markerLabel}</span> <span style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }}>ka</span>{subjectLabel}</span> <span style={{ display: 'inline-block' }}><i>sa eskwelahan</i>{verbLabel}</span>?</>,
              <><span style={{ display: 'inline-block' }}><b>Ginhatag</b>{markerLabel}</span> <span style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }}>ko ini</span>{subjectLabel}</span> <span style={{ display: 'inline-block' }}><i>kay Maria</i>{verbLabel}</span>.</>,
              <><span style={{ display: 'inline-block' }}><b>Ang bata nga malipayon</b>{markerLabel}</span> <span style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }}></span>{subjectLabel}</span> <span style={{ display: 'inline-block' }}><i>naga hampang</i>{verbLabel}</span>.</>,
              <><span style={{ display: 'inline-block' }}><b>Hatagi pa siya sang tubig</b>{markerLabel}</span> <span style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }}></span>{subjectLabel}</span> <span style={{ display: 'inline-block' }}><i></i>{verbLabel}</span>.</>,
              <><span style={{ display: 'inline-block' }}><b>Balay ni Tatay</b>{markerLabel}</span> <span style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }}></span>{subjectLabel}</span> <span style={{ display: 'inline-block' }}><i></i>{verbLabel}</span>.</>,
              <><span style={{ display: 'inline-block' }}><b>Gab-e na, halong kamo</b>{markerLabel}</span> <span style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }}></span>{subjectLabel}</span> <span style={{ display: 'inline-block' }}><i></i>{verbLabel}</span>.</>,
              <><span style={{ display: 'inline-block' }}><b>Saging lang gin kaon ko</b>{markerLabel}</span> <span style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }}></span>{subjectLabel}</span> <span style={{ display: 'inline-block' }}><i></i>{verbLabel}</span>.</>,
              <><span style={{ display: 'inline-block' }}><b>Nagahulat siya gihapon bisan init</b>{markerLabel}</span> <span style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }}></span>{subjectLabel}</span> <span style={{ display: 'inline-block' }}><i></i>{verbLabel}</span>.</>,
              <><span style={{ display: 'inline-block' }}><b>Hatagi pa ako sang tubig, palihog</b>{markerLabel}</span> <span style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }}></span>{subjectLabel}</span> <span style={{ display: 'inline-block' }}><i></i>{verbLabel}</span>.</>,
              <><span style={{ display: 'inline-block' }}><b>Daw masadya siya subong</b>{markerLabel}</span> <span style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }}></span>{subjectLabel}</span> <span style={{ display: 'inline-block' }}><i></i>{verbLabel}</span>.</>,
              <><span style={{ display: 'inline-block' }}><b>Si Maria nagkanta</b>{markerLabel}</span> <span style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }}></span>{subjectLabel}</span> <span style={{ display: 'inline-block' }}><i></i>{verbLabel}</span>.</>,
              <><span style={{ display: 'inline-block' }}><b>Sanday Ana kag Juan naghampang sa mga sapat</b>{markerLabel}</span> <span style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }}></span>{subjectLabel}</span> <span style={{ display: 'inline-block' }}><i></i>{verbLabel}</span>.</>,
              <><span style={{ display: 'inline-block' }}><b>Sila amo ang nagahampang</b>{markerLabel}</span> <span style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }}></span>{subjectLabel}</span> <span style={{ display: 'inline-block' }}><i></i>{verbLabel}</span>.</>,
              <><span style={{ display: 'inline-block' }}><b>Siya amo ang nagdaog sa patimpalak</b>{markerLabel}</span> <span style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }}></span>{subjectLabel}</span> <span style={{ display: 'inline-block' }}><i></i>{verbLabel}</span>.</>,
            ];
            return (
              <div style={{ marginTop: '1.5em', marginBottom: '0.5em', textAlign: 'center', width: '100%' }}>
                <span style={{ fontWeight: 700, fontSize: '.8em', color: '#222', letterSpacing: '1px', marginLeft: '2vw' }}>EXAMPLE SENTENCES</span>
                <div style={{
                  background: 'rgba(255,255,255,0.45)',
                  borderRadius: '14px',
                  boxShadow: '0 2px 18px #7b8457',
                  padding: '1.2em 2.2em',
                  marginTop: '0.7em',
                  fontSize: 'clamp(1.1em, 2vw, 1.5em)',
                  color: '#222',
                  fontWeight: 600,
                  textAlign: 'center',
                  maxWidth: '700px',
                  width: '90vw',
                  backdropFilter: 'blur(4px)',
                  display: 'inline-block',
                  fontFamily: 'Montserrat, Arial, sans-serif',
                }}>
                  {examples[markerIndex]}
                </div>
                <br /><br /><br />
                <span style={{ fontWeight: 700, fontSize: '.8em', color: '#222', letterSpacing: '1px', marginLeft: '2vw' }}>ENGLISH TRANSLATION</span>
                <div style={{
                  background: 'rgba(255,255,255,0.35)',
                  borderRadius: '14px',
                  boxShadow: '0 2px 12px #7b8457',
                  padding: '1em 2em',
                  marginTop: '1em',
                  fontSize: 'clamp(1em, 1.7vw, 1.2em)',
                  color: '#222',
                  fontWeight: 500,
                  textAlign: 'center',
                  maxWidth: '700px',
                  width: '90vw',
                  backdropFilter: 'blur(2px)',
                  display: 'inline-block',
                  fontFamily: 'Montserrat, Arial, sans-serif',
                }}>
                  <span style={{ color: '#555' }}>
                    <i>{
                      markerIndex === 0 ? 'The child is eating.' :
                      markerIndex === 1 ? 'He/She read a book.' :
                      markerIndex === 2 ? 'How are you at school?' :
                      markerIndex === 3 ? 'I gave this to Maria.' :
                      markerIndex === 4 ? 'The happy child is playing.' :
                      markerIndex === 5 ? 'Give him/her some more water.' :
                      markerIndex === 6 ? 'Dad’s house.' :
                      markerIndex === 7 ? 'It’s night already, take care.' :
                      markerIndex === 8 ? 'I only ate a banana.' :
                      markerIndex === 9 ? 'He/She is still waiting even if it’s hot.' :
                      markerIndex === 10 ? 'Give me some more water, please.' :
                      markerIndex === 11 ? 'He/She seems happy now.' :
                      markerIndex === 12 ? 'Maria sang / She sang.' :
                      markerIndex === 13 ? 'Ana and Juan played with the animals.' :
                      markerIndex === 14 ? 'They are the ones who are playing.' :
                      markerIndex === 15 ? 'He/She is the one who won the contest.' :
                      ''
                    }</i>
                  </span>
                </div>
              </div>
            );
          })()}
      </div>
    </div>
  );
}
