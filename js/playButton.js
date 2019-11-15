const playButton = document.getElementById('play-button');
const frame = document.getElementById('showcase-video-frame');
const video = document.getElementById('showcase-video');
const pauseButton = document.getElementById('pause-button');

pauseButton.style.setProperty('display', 'none');

playButton.addEventListener('click', (e) => {
  e.preventDefault();
  frame.remove();
  video.play();
  playButton.style.setProperty('display', 'none');
  pauseButton.style.removeProperty('display');
});

pauseButton.addEventListener('click', (e) => {
  e.preventDefault();
  video.pause();
  pauseButton.style.setProperty('display', 'none');
  playButton.style.removeProperty('display');
});