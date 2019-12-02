const aboutTitle = document.getElementById('about-title');
const missionBtn = document.getElementById('mission');
const whatIsBtn = document.getElementById('what-is');
const aboutBtns = document.querySelectorAll('.about-btn');
const missionP = document.getElementById('mission-p');
const whatIsP = document.getElementById('what-is-p');

const rearrangeAboutItems = () => {
  aboutTitle.style.top = '20%';
  aboutTitle.style.left = '10%';
  missionBtn.style.top = '45%';
  missionBtn.style.left = '10%';
  whatIsBtn.style.top = '65%';
  whatIsBtn.style.left = '10%';
};

aboutBtns.forEach((btn) => {
  btn.addEventListener('click', rearrangeAboutItems);
});

missionBtn.addEventListener('click', () => {
  missionP.style.left = '60%';
  whatIsP.style.left = '150%';
});

whatIsBtn.addEventListener('click', () => {
  whatIsP.style.left = '60%';
  missionP.style.left = '150%';
});