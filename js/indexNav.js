const indexDonateLink = document.getElementById('index-donate-link');
const indexAboutLink = document.getElementById('index-about-link');
const indexContactLink = document.getElementById('index-contact-link');

indexDonateLink.addEventListener('click', (e) => {
  location = "./main.html#donate-section";
});
indexAboutLink.addEventListener('click', (e) => {
  location = "./main.html#about-section";
});
indexContactLink.addEventListener('click', (e) => {
  location = "./main.html#contact-section";
});