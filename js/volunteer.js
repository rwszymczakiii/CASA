const whoCanBtn = document.getElementById('who-can-btn');
const whoCanP = document.getElementById('who-can-p');
const becomeBtn = document.getElementById('become-btn');
const trainingBtn = document.getElementById('training-btn');
const trainingP = document.getElementById('training-p');

becomeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('click');
  contactSection.scrollIntoView({behavior: "smooth"});
});