import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Example placeholder data for vocabulary details
const vocabularyDetails = {
  Balay: { word: "Balay", pronunciation: "ba-lay", meaning: "a place where a person lives", translation: "house / home" },
  Bata: { word: "Bata", pronunciation: "ba-ta", meaning: "a young person", translation: "child" },
  Bulig: { word: "Bulig", pronunciation: "bu-lig", meaning: "assistance or support", translation: "help" },
  Dako: { word: "Dako", pronunciation: "da-ko", meaning: "large in size or amount", translation: "big" },
  Eskwelahan: { word: "Eskwelahan", pronunciation: "es-kwe-la-han", meaning: "a place for learning", translation: "school" },
  Gabe: { word: "Gab-e", pronunciation: "gab-e", meaning: "the time after sunset", translation: "night" },
  Ginhatag: { word: "Ginhatag", pronunciation: "gin-ha-tag", meaning: "something that was given to someone", translation: "was given" },
  Ginhimo: { word: "Ginhimo", pronunciation: "gin-hi-mo", meaning: "something that was made or done", translation: "made / did" },
  Halong: { word: "Halong", pronunciation: "ha-long", meaning: "a warning to be careful or take care", translation: "take care / be careful" },
  Hatagi: { word: "Hatagi", pronunciation: "ha-ta-gi", meaning: "a command asking someone to give", translation: "give (imperative: give someone)" },
  Init: { word: "Init", pronunciation: "ee-nit", meaning: "having a high temperature", translation: "hot" },
  Isda: { word: "Isda", pronunciation: "ees-da", meaning: "an animal that lives in water", translation: "fish" },
  Kamusta: { word: "Kamusta", pronunciation: "ka-mus-ta", meaning: "a greeting asking about someone’s condition", translation: "how are you" },
  Libro: { word: "Libro", pronunciation: "leeb-ro", meaning: "a set of written or printed pages", translation: "book" },
  Madamo: { word: "Madamo", pronunciation: "ma-da-mo", meaning: "a large number or amount", translation: "many / plenty" },
  Manok: { word: "Manok", pronunciation: "ma-nok", meaning: "a domesticated bird", translation: "chicken" },
  Masadya: { word: "Masadya", pronunciation: "ma-sa-dya", meaning: "feeling joy or happiness", translation: "happy" },
  Matamis: { word: "Matam-is", pronunciation: "ma-tam-is", meaning: "having a sugary taste", translation: "sweet" },
  Matulog: { word: "Matulog", pronunciation: "ma-tu-log", meaning: "to rest by sleeping", translation: "to sleep" },
  Nagahulat: { word: "Nagahulat", pronunciation: "na-ga-hu-lat", meaning: "the act of staying and waiting for someone or something)", translation: "is waiting" },
  Nagakaon: { word: "Nagakaon", pronunciation: "na-ga-ka-on", meaning: "the act of eating food", translation: "is eating" },
  Nagalupad: { word: "Nagalupad", pronunciation: "na-ga-lu-pad", meaning: "moving in the air", translation: "is flying" },
  Nagbasa: { word: "Nagbasa", pronunciation: "nag-ba-sa", meaning: "the act of reading written words", translation: "read / was reading" },
  Nagbulig: { word: "Nagbulig", pronunciation: "nag-boo-lig", meaning: "gave help or assistance", translation: "helped" },
  Nagdaog: { word: "Nagdaog", pronunciation: "nag-da-og", meaning: "became the winner", translation: "won" },
  Nagkanta: { word: "Nagkanta", pronunciation: "nag-kan-ta", meaning: "made music using the voice", translation: "sang" },
  Naglakat: { word: "Naglakat", pronunciation: "nag-la-kat", meaning: "moved by foot", translation: "walked" },
  Nageskwela: { word: "Nag-eskwela", pronunciation: "nag-es-kwe-la", meaning: "attended school", translation: "went to school" },
  Nakadakop: { word: "Nakadakop", pronunciation: "na-ka-da-kop", meaning: "successfully caught something", translation: "caught / was able to catch" },
  Nagsulat: { word: "Nagsulat", pronunciation: "nag-su-lat", meaning: "made letters or words", translation: "wrote / was writing" },
  Nagtuon: { word: "Nagtuon", pronunciation: "nag-tu-on", meaning: "learned or reviewed lessons", translation: "studied" },
  Pagpauli: { word: "Pagpauli", pronunciation: "pag-pa-u-li", meaning: "the act of going back home", translation: "going home / returning home" },
  Prutas: { word: "Prutas", pronunciation: "proo-tas", meaning: "edible food that comes from plants", translation: "fruit" },
  Saging: { word: "Saging", pronunciation: "sa-ging", meaning: "a long yellow fruit", translation: "banana" },
  Sapat: { word: "Sapat", pronunciation: "sa-pat", meaning: "a living creature, not a human", translation: "animal" },
  Tubig: { word: "Tubig", pronunciation: "too-big", meaning: "a clear liquid used for drinking", translation: "water" },
  Tugnaw: { word: "Tugnaw", pronunciation: "toog-now", meaning: "having low temperature", translation: "cold" },
};

export default function VocabularyDetailPage() {
  const { vocabId } = useParams();
  const navigate = useNavigate();
  const details = vocabularyDetails[vocabId] || {};

  // Audio playback logic
  const [audioError, setAudioError] = React.useState(false);
  const audioRef = React.useRef(null);

  // Try both .m4a and .mp3
  const audioBase = `/asset/word-voice/${details.word || vocabId}`;
  const audioSources = [`${audioBase}.m4a`, `${audioBase}.mp3`];

  const playAudio = () => {
    setAudioError(false);
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play().catch(() => setAudioError(true));
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "url('/asset/ref/beebg.jpg') center center/cover no-repeat",
        backgroundAttachment: "fixed",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 0,
        position: "relative"
      }}
    >
      {/* Back arrow button */}
      <button
        onClick={() => navigate("/vocabulary")}
        style={{
          position: 'fixed',
          top: 24,
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
        aria-label="Back to Vocabulary"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline points="14,5 7,11 14,17" stroke="#222" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </button>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2em', gap: '1.5em', paddingBottom: '0' }}>
        {/* Word image for Balay overlaying the cloud */}
        {details.word === 'Balay' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(11em + 2vw)', // moved down a bit
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/balay.png"
              alt="Balay"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Bata' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(11em + 2vw)', // moved down a bit
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/bata.png"
              alt="Bata"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Bulig' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved down a bit
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/bulig.png"
              alt="Bulig"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Dako' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved down a bit
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/dako.png"
              alt="Dako"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Eskwelahan' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved down a bit
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/eskwelahan.png"
              alt="Eskwelahan"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Gab-e' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(11.5em + 2vw)', // moved down a bit
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/gab e.png"
              alt="Gabe"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Ginhatag' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved down a bit
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/Gin hatag.png"
              alt="Ginhatag"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Ginhimo' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved down a bit
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/Ginhimo.png"
              alt="Ginhimo"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Halong' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved down a bit
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/halong kamo.png"
              alt="Halong"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Hatagi' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(11em + 2vw)', // moved down a bit
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/Hatagi.png"
              alt="Hatagi"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Init' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved down a bit
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/init.png"
              alt="Init"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Isda' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved down a bit
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/isda.png"
              alt="Isda"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Kamusta' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved down a bit
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/kumusta.png"
              alt="Kamusta"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Libro' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved down a bit
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/libro.png"
              alt="Libro"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
         {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Madamo' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(10.5em + 2vw)', // moved down a bit
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/madamo.png"
              alt="Madamo"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
         {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Manok' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved down a bit
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/manok.png"
              alt="Manok"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
         {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Masadya' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved down a bit
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/masadya.png"
              alt="Masadya"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Matam-is' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved down a bit
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/matam is.png"
              alt="Matam-is"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Matulog' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved down a bit
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/Matulog.png"
              alt="Matulog"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Nagahulat' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved down a bit
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/Naga hulat.png"
              alt="Nagahulat"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Nagakaon' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved down a bit
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/Naga_kaon.png"
              alt="Nagakaon"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Nagalupad' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved down a bit
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/Naga_lupad.png"
              alt="Nagalupad"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Nagbasa' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved up to overlay cloud
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/Nagbasa.png"
              alt="Nagbasa"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Nagbulig' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved up to overlay cloud
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/Nag bulig.png"
              alt="Nagbulig"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Nagdaog' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved up to overlay cloud
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/Nag daog.png"
              alt="Nagdaog"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Nagkanta' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved up to overlay cloud
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/Nag kanta.png"
              alt="Nagkanta"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Naglakat' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved up to overlay cloud
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/Nag lakat.png"
              alt="Naglakat"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Nag-eskwela' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved up to overlay cloud
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/Nag eskwela.png"
              alt="Nag-eskwela"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Nakadakop' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved up to overlay cloud
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/Nakadakop.png"
              alt="Nakadakop"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Nagsulat' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved up to overlay cloud
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/Nag sulat.png"
              alt="Nagsulat"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Nagtuon' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved up to overlay cloud
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/Nag tuon.png"
              alt="Nagtuon"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Pagpauli' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(11em + 2vw)', // moved up to overlay cloud
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/pagpauli.png"
              alt="Pagpauli"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Prutas' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved up to overlay cloud
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/prutas.png"
              alt="Prutas"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Saging' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved up to overlay cloud
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/saging.png"
              alt="Saging"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Sapat' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved up to overlay cloud
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/sapat.png"
              alt="Sapat"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Tubig' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved up to overlay cloud
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/tubig.png"
              alt="Tubig"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        {/* Word image for Bata overlaying the cloud */}
        {details.word === 'Tugnaw' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 'calc(12em + 2vw)', // moved up to overlay cloud
            transform: 'translate(-50%, -60%)',
            zIndex: 120,
            pointerEvents: 'none',
          }}>
            <img
              src="/asset/img-word/tugnaw.png"
              alt="Tugnaw"
              style={{
                width: 'clamp(180px, 30vw, 320px)',
                maxWidth: '90vw',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 2px 12px #7b8457aa)',
              }}
            />
          </div>
        )}
        <div style={{
          position: 'relative',
          width: 'clamp(900px, 98vw, 1800px)',
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
          {/* Speaker button below cloud */}
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
            }}
            aria-label="Play pronunciation"
          >
            <img src="/asset/ref/speaker.png" alt="Speaker" style={{ width: 70, height: 38 }} />
          </button>
          <audio ref={audioRef} preload="auto">
            {audioSources.map((src, i) => (
              <source key={src} src={src} type={src.endsWith('.m4a') ? 'audio/mp4' : 'audio/mpeg'} />
            ))}
            Your browser does not support the audio element.
          </audio>
        </div>
        {audioError && (
          <div style={{ color: 'red', fontWeight: 600, marginTop: '0.5em' }}>
            Audio not available for this word.
          </div>
        )}
        <div style={{ position: 'fixed', top: '170px', left: '-120px', zIndex: 300, pointerEvents: 'none', width: 'auto', height: 'auto' }}>
          <img
            src="/asset/ref/blinkhappy.gif"
            alt="Animated character blinking happily"
            style={{
              width: 'clamp(350px, 40vw, 600px)',
              maxWidth: '90vw',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>
        <div style={{ marginTop: '2.5em', marginBottom: '0.5em', textAlign: 'center', width: '100%' }}>
          {/* Show the word above the translation */}
          <div style={{
            background: 'rgba(255,255,255,0.35)',
            borderRadius: '14px',
            boxShadow: '0 2px 12px #7b8457',
            padding: '1em 2em',
            marginTop: '1em',
            fontSize: 'clamp(1.5em, 1.7vw, 1.2em)',
            color: '#222',
            fontWeight: 900,
            textAlign: 'center',
            maxWidth: '700px',
            width: '90vw',
            backdropFilter: 'blur(2px)',
            display: 'inline-block',
            fontFamily: 'Montserrat, Arial, sans-serif',
          }}>
            <div>{details.word || vocabId}</div>
            {details.pronunciation && (
              <div style={{
                fontWeight: 600,
                fontSize: 'clamp(1.1em, 2vw, 1.5em)',
                color: '#26ccc2',
                marginTop: '0.3em',
                marginBottom: '0',
                fontFamily: 'Montserrat, Arial, sans-serif',
                letterSpacing: '1.5px',
                textShadow: '0 2px 12px #fff57e44',
              }}>
                {details.pronunciation}
              </div>
            )}
          </div>
      <div>
       <div style={{ height: '2.5em' }} />
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
              <i>{details.translation || 'No translation.'}</i>
            </span>
        </div>
        <div style={{ height: '2.5em' }} />
          <span style={{ fontWeight: 700, fontSize: '.8em', color: '#222', letterSpacing: '1px', marginLeft: '2vw' }}>MEANING</span>
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
              <i>{details.meaning || 'No meaning.'}</i>
            </span>
        </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}
