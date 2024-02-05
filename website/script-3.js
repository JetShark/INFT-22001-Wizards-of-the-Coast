const audio = new Audio("background-music-2.mp3");

audio.loop = true;

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

window.addEventListener("focus", playAudio);
window.addEventListener("blur", pauseAudio);

playAudio();
