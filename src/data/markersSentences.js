// Hiligaynon Marker Sentences Database
// Each entry: { marker, sentence, translation, image }

const markersSentences = [
  // Ang + verb
  {
    marker: "Ang + verb",
    sentence: "Ang bata nagakaon.",
    translation: "The child is eating.",
    image: "/asset/img-sentence/The child is eating..png"
  },
  {
    marker: "Ang + verb",
    sentence: "Ang manok nagalupad.",
    translation: "The chicken is flying.",
    image: "/asset/img-sentence/The chicken is flying..png"
  },
  // Sang + verb/object
  {
    marker: "Sang + verb/object",
    sentence: "Nagbasa siya sang libro.",
    translation: "He/She read a book.",
    image: "/asset/img-sentence/He_She read a book..png"
  },
  {
    marker: "Sang + verb/object",
    sentence: "Nagkuha niya sang tubig.",
    translation: "He/She took the water.",
    image: "/asset/img-sentence/He_She took the water..png"
  },
  // Sa + verb/location/recipient
  {
    marker: "Sa + verb/location/recipient",
    sentence: "Nagpadulong siya sa eskwelahan.",
    translation: "He/She went to school.",
    image: "/asset/img-sentence/He_She went to school..png"
  },
  {
    marker: "Sa + verb/location/recipient",
    sentence: "Ginhatag niya ang regalo sa bata.",
    translation: "He/She gave the gift to the child.",
    image: "/asset/img-sentence/He_She gave the gift to the child..png"
  },
  // Kay + verb/person
  {
    marker: "Kay + verb/person",
    sentence: "Ginhatag ko ini kay Maria.",
    translation: "I gave this to Maria.",
    image: "/asset/img-sentence/I gave this to Maria..png"
  },
  {
    marker: "Kay + verb/person",
    sentence: "Nagsulat siya para kay tatay.",
    translation: "He/She wrote a letter to Dad.",
    image: "/asset/img-sentence/He_She wrote a letter to Dad..png"
  },
  // Ni / Nina + verb/possession
  {
    marker: "Ni / Nina + verb/possession",
    sentence: "Libro ni Juan.",
    translation: "Juan’s book.",
    image: "/asset/img-sentence/Juan’s book..png"
  },
  {
    marker: "Ni / Nina + verb/possession",
    sentence: "Sapatos nina Ana kag Maria.",
    translation: "Ana and Maria’s shoes.",
    image: "/asset/img-sentence/Ana and Maria’s shoes..png"
  },
  // Nga + verb/description
  {
    marker: "Nga + verb/description",
    sentence: "Ang bata nga malipayon nagahampang.",
    translation: "The happy child is playing.",
    image: "/asset/img-sentence/The happy child is playing..png"
  },
  {
    marker: "Nga + verb/description",
    sentence: "May balay siya nga daku.",
    translation: "He/She has a house that is big.",
    image: "/asset/img-sentence/He_She has a house that is big..png"
  },
  // Pa / Man + verb
  {
    marker: "Pa / Man + verb",
    sentence: "Hatagi pa siya sang tubig.",
    translation: "Give him/her some more water.",
    image: "/asset/img-sentence/Give him_her some more water..png"
  },
  {
    marker: "Pa / Man + verb",
    sentence: "Ginhimo man niya ini.",
    translation: "He/She did this too.",
    image: "/asset/img-sentence/He_She did this too..png"
  },
  // Ni + verb/possession
  {
    marker: "Ni + verb/possession",
    sentence: "Balay ni Tatay.",
    translation: "Dad’s house.",
    image: "/asset/img-sentence/Dad’s house..png"
  },
  {
    marker: "Ni + verb/possession",
    sentence: "Sapatos ni Juan.",
    translation: "Juan’s shoes.",
    image: "/asset/img-sentence/Juan’s shoes..png"
  },
  // Na / Na lang + verb
  {
    marker: "Na / Na lang + verb",
    sentence: "Nakakaon na ikaw?",
    translation: "Have you eaten?",
    image: "/asset/img-sentence/Have you eaten.png"
  },
  {
    marker: "Na / Na lang + verb",
    sentence: "Matulog na lang ko.",
    translation: "I’ll just sleep.",
    image: "/asset/img-sentence/I’ll just sleep..png"
  },
  // Lang + verb
  {
    marker: "Lang + verb",
    sentence: "Mag una ka lang tulog.",
    translation: "Just sleep first.",
    image: "/asset/img-sentence/Just  sleep first..png"
  },
  {
    marker: "Lang + verb",
    sentence: "Magtuon ka lang anay.",
    translation: "Just study.",
    image: "/asset/img-sentence/just study..png"
  },
  // Gani / Gani man + verb
  {
    marker: "Gani / Gani man + verb",
    sentence: "Malain ang panahon, gani indi kita makalakat.",
    translation: "The weather is bad, so we won’t go.",
    image: "/asset/img-sentence/The weather is bad, so we won’t go..png"
  },
  {
    marker: "Gani / Gani man + verb",
    sentence: "Temprano siya magtuon, gani maayo ang iya grado sa exam.",
    translation: "He/She studies early, so he/she gets good grades in the exam.",
    image: "/asset/img-sentence/He:She studies early, so he:she gets good grades in the exam.png"
  },
  // Paagi sa + verb
  {
    marker: "Paagi sa + verb",
    sentence: "Nakita ko siya paagi sa internet.",
    translation: "I saw him/her through the internet.",
    image: "/asset/img-sentence/I saw him_her through the internet..png"
  },
  {
    marker: "Paagi sa + verb",
    sentence: "Ginhimo ini paagi sa teamwork.",
    translation: "This was done through teamwork.",
    image: "/asset/img-sentence/This was done through teamwork..png"
  },
  // Sa gihapon + verb
  {
    marker: "Sa gihapon + verb",
    sentence: "Nagahulat siya sa gihapon.",
    translation: "He/She is still waiting.",
    image: "/asset/img-sentence/He_She is still waiting..png"
  },
  {
    marker: "Sa gihapon + verb",
    sentence: "Biskan malain ang panahon, naglakat siya sa gihapon.",
    translation: "Despite the bad weather, he/she still walked.",
    image: "/asset/img-sentence/Even though the weather is bad, he_she is still going..png"
  },
  // Biskan / Maski + verb
  {
    marker: "Biskan / Maski + verb",
    sentence: "Biskan gutom, naghulat siya.",
    translation: "Even if hungry, he/she waited.",
    image: "/asset/img-sentence/Even if hungry, he_she waited..png"
  },
  {
    marker: "Biskan / Maski + verb",
    sentence: "Maski malayo, naglakat siya.",
    translation: "Even though it’s far, he/she went.",
    image: "/asset/img-sentence/Even though it’s far, he_she went..png"
  },
  // Pa / Pa man + verb
  {
    marker: "Pa / Pa man + verb",
    sentence: "Hatagi pa ako sang tubig, palihog.",
    translation: "Give me some more water, please.",
    image: "/asset/img-sentence/Give him_her some more water..png"
  },
  {
    marker: "Pa / Pa man + verb",
    sentence: "Tudloi man ako magluto.",
    translation: "Teach me to cook too.",
    image: "/asset/img-sentence/Teach me to cook too..png"
  },
  // Daw / Daw lang + verb
  {
    marker: "Daw / Daw lang + verb",
    sentence: "Daw masadya siya subong.",
    translation: "He/She seems happy now.",
    image: "/asset/img-sentence/He_She seems happy now..png"
  },
  {
    marker: "Daw / Daw lang + verb",
    sentence: "Daw matam-is ini nga prutas.",
    translation: "It looks like a sweet fruit.",
    image: "/asset/img-sentence/This fruit seems sweet..png"
  }
];

export default markersSentences;
