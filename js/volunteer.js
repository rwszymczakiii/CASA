const whoCanBtn = document.getElementById('who-can-btn');
const whoCanP = document.getElementById('who-can-p');
const becomeBtn = document.getElementById('become-btn');
const trainingBtn = document.getElementById('training-btn');
const trainingP = document.getElementById('training-p');
const volunteerP = document.getElementById('volunteer-p');
const volunteerOverlay = document.getElementById('volunteer-overlay');
const volunteerH2 = document.getElementById('volunteer-h2');

whoCanBtn.addEventListener('click', (e) => {
  e.preventDefault();
  // console.log('click');
  volunteerOverlay.style.opacity = 0.6;
  volunteerH2.style.opacity = 0;
  volunteerP.style.opacity = 0;
  trainingP.style.opacity = 0;
  whoCanP.style.opacity = 1;
});

becomeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  contactSection.scrollIntoView({behavior: "smooth"});
});

trainingBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('click');
  volunteerOverlay.style.opacity = 0.6;
  volunteerH2.style.opacity = 0;
  volunteerP.style.opacity = 0;
  whoCanP.style.opacity = 0;
  trainingP.style.opacity = 1;
});


