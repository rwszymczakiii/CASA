const playButton = document.getElementById('play-button');
const frame = document.getElementById('showcase-video-frame');
const video = document.getElementById('showcase-video');


playButton.addEventListener('click', (e) => {
  e.preventDefault;
  frame.remove();
  video.play();
  playButton.remove();
});

video.addEventListener('click', (e) => {
  e.preventDefault;
  video.pause();
});