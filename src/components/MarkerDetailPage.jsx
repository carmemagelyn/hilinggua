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
              <><span style={{ display: 'inline-block' }}><b>Kay</b>{markerLabel}</span> <span style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }}>Juan</span>{subjectLabel}</span> <span style={{ display: 'inline-block' }}><i>ginhatag</i>{verbLabel}</span> ang libro.</>,
              <><span style={{ display: 'inline-block' }}><b>Nga</b>{markerLabel}</span> <span style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }}>bata</span>{subjectLabel}</span> <span style={{ display: 'inline-block' }}><i>maalam</i>{verbLabel}</span>.</>,
              <><span style={{ display: 'inline-block' }}><b>Pa</b>{markerLabel}</span> <span style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }}>palihog</span>{subjectLabel}</span> <span style={{ display: 'inline-block' }}><i>kuha</i>{verbLabel}</span> sang tubig.</>,
              <><span style={{ display: 'inline-block' }}><b>Ni</b>{markerLabel}</span> <span style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }}>Maria</span>{subjectLabel}</span> <span style={{ display: 'inline-block' }}><i>ginbakal</i>{verbLabel}</span> ang tinapay.</>,
              <><span style={{ display: 'inline-block' }}><b>Na</b>{markerLabel}</span> <span style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }}>tapos</span>{subjectLabel}</span> <span style={{ display: 'inline-block' }}><i>na</i>{verbLabel}</span> ang obra.</>,
              <><span style={{ display: 'inline-block' }}><b>Lang</b>{markerLabel}</span> <span style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }}>isa</span>{subjectLabel}</span> <span style={{ display: 'inline-block' }}><i>ka</i>{verbLabel}</span> piraso.</>,
              <><span style={{ display: 'inline-block' }}><b>Gihapon</b>{markerLabel}</span> <span style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }}>siya</span>{subjectLabel}</span> <span style={{ display: 'inline-block' }}><i>nagahulat</i>{verbLabel}</span>.</>,
              <><span style={{ display: 'inline-block' }}><b>Pa</b>{markerLabel}</span> <span style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }}>bata</span>{subjectLabel}</span> <span style={{ display: 'inline-block' }}><i>palihog</i>{verbLabel}</span> kuhaa.</>,
              <><span style={{ display: 'inline-block' }}><b>Daw</b>{markerLabel}</span> <span style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }}>ulan</span>{subjectLabel}</span> <span style={{ display: 'inline-block' }}><i>mag-abot</i>{verbLabel}</span>.</>,
              <><span style={{ display: 'inline-block' }}><b>Si</b>{markerLabel}</span> <span style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }}>Ana</span>{subjectLabel}</span> <span style={{ display: 'inline-block' }}><i>nagapanikasog</i>{verbLabel}</span>.</>,
              <><span style={{ display: 'inline-block' }}><b>Sanday</b>{markerLabel}</span> <span style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }}>Pedro kag Juan</span>{subjectLabel}</span> <span style={{ display: 'inline-block' }}><i>nagapananom</i>{verbLabel}</span>.</>,
              <><span style={{ display: 'inline-block' }}><b>Sila</b>{markerLabel}</span> <span style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }}>nagahalin</span>{subjectLabel}</span> <span style={{ display: 'inline-block' }}><i>subong</i>{verbLabel}</span>.</>,
              <><span style={{ display: 'inline-block' }}><b>Amo</b>{markerLabel}</span> <span style={{ display: 'inline-block' }}><span style={{ textDecoration: 'underline' }}>ang</span>{subjectLabel}</span> <span style={{ display: 'inline-block' }}><i>nagdaog</i>{verbLabel}</span> sa kompetisyon.</>,
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
                    <i>{markerIndex === 0 ? 'The child is eating.' : 'Translation goes here.'}</i>
                  </span>
                </div>
              </div>
            );
          })()}
      </div>
    </div>
  );
}
