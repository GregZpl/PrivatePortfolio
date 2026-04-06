const audio = [
  "/Music/.mp3",
  "",
  "",
  "",
  "",
  ""
];

function shuffleArray(audio) {
  for (let i = audio.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [audio[i], audio[j]] = [audio[j], audio[i]];
  }
  return audio;
}