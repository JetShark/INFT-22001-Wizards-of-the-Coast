// BACKGROUND MUSIC CONTROL
const backgroundMusic = document.getElementById("background-music");
const fadeInDuration = 5000; // 5 SECONDS FOR FADE IN

// SET THE VOLUME TO 0 AT FIRST
backgroundMusic.volume = 0;

// PLAY MUSIC WHEN PAGE LOADS
window.addEventListener("load", () => {
  backgroundMusic.play();

  // GRADUALLY INCREASE VOLUME
  const volumeIncrement = 1 / (fadeInDuration / 1000); // Calculate increment per millisecond
  let currentVolume = 0;

  const fadeInterval = setInterval(() => {
    if (currentVolume >= 1) {
      clearInterval(fadeInterval); // Stop the interval when volume reaches 1
    } else {
      currentVolume += volumeIncrement;
      backgroundMusic.volume = currentVolume;
    }
  }, 1);
});

// PREVENT THE VIDEO FROM BEING PAUSED
backgroundMusic.addEventListener("pause", (e) => {
  e.preventDefault();
});
