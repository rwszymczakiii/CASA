const secondDonateLink = document.getElementById('second-donate-link');
const secondAboutLink = document.getElementById('second-about-link');
const secondContactLink = document.getElementById('second-contact-link');

secondDonateLink.addEventListener('click', (e) => {
  location = "./main.html#donate-start";
});
secondAboutLink.addEventListener('click', (e) => {
  location = "./main.html#about-start";
});
secondContactLink.addEventListener('click', (e) => {
  location = "./main.html#contact-section";
});