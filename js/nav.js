const indexVolunteerLink = document.getElementById('index-volunteer-link');
const indexDonateLink = document.getElementById('index-donate-link');
const indexAboutLink = document.getElementById('index-about-link');
const indexContactLink = document.getElementById('index-contact-link');
const mainVolunteerLink = document.getElementById('main-volunteer-link');
const mainDonateLink = document.getElementById('main-donate-link');
const mainAboutLink = document.getElementById('main-about-link');
const mainContactLink = document.getElementById('main-contact-link');
const volunteerPosition = 0;
const donatePosition = 570;
const aboutPosition = 1500;
const contactPosition = 2000;


mainVolunteerLink.addEventListener('click', (e) => {
  e.preventDefault();
  window.scroll({
    top:volunteerPosition,
    left:0,
    behavior:"smooth"
  });
});

mainDonateLink.addEventListener('click', (e) => {
  e.preventDefault();
  window.scroll({
    top:donatePosition,
    left:0,
    behavior:"smooth"
  });
});

mainAboutLink.addEventListener('click', (e) => {
  e.preventDefault();
  window.scroll({
    top:aboutPosition,
    left:0,
    behavior:"smooth"
  });
});

mainContactLink.addEventListener('click', (e) => {
  e.preventDefault();
  window.scroll({
    top:contactPosition,
    left:0,
    behavior:"smooth"
  });
});