const mainVolunteerLink = document.getElementById('main-volunteer-link');
const mainDonateLink = document.getElementById('main-donate-link');
const mainAboutLink = document.getElementById('main-about-link');
const mainContactLink = document.getElementById('main-contact-link');
const volunteerSection = document.getElementById('volunteer-section');
const donateStart = document.getElementById('donate-start');
const aboutStart = document.getElementById('about-start');
const contactSection = document.getElementById('contact-section');

mainVolunteerLink.addEventListener('click', (e) => {
  e.preventDefault();
  scroll({
    top:0,
    left:0,
    behavior:"smooth"
  });
});

mainDonateLink.addEventListener('click', (e) => {
  e.preventDefault();
  donateStart.scrollIntoView({behavior: "smooth"});
});

mainAboutLink.addEventListener('click', (e) => {
  e.preventDefault();
  aboutStart.scrollIntoView({behavior: "smooth"});
}); 

mainContactLink.addEventListener('click', (e) => {
  e.preventDefault();
  contactSection.scrollIntoView({behavior: "smooth"});
});