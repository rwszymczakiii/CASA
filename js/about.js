const aboutTitle = document.getElementById('about-title');
const missionBtn = document.getElementById('mission');
const whatIsBtn = document.getElementById('what-is');
const aboutBtns = document.querySelectorAll('.about-btn');
const missionP = document.getElementById('mission-p');
const whatIsP = document.getElementById('what-is-p');
const aboutOverlay = document.getElementById('about-overlay');

const rearrangeAboutItems = () => {
  aboutTitle.style.top = '20%';
  aboutTitle.style.left = '10%';
  missionBtn.style.top = '45%';
  missionBtn.style.left = '10%';
  whatIsBtn.style.top = '65%';
  whatIsBtn.style.left = '10%';
  aboutOverlay.style.opacity = 0.65;
};

aboutBtns.forEach((btn) => {
  btn.addEventListener('click', rearrangeAboutItems);
});

missionBtn.addEventListener('click', () => {
  whatIsP.style.visibility = 'hidden';
  setTimeout(function(){
    missionP.style.visibility = 'visible';
  }, 500);
});

whatIsBtn.addEventListener('click', () => {
  missionP.style.visibility = 'hidden';
  setTimeout(function(){
    whatIsP.style.visibility = 'visible';
  }, 500);
});