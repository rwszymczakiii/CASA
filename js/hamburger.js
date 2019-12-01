const hamburgerCheckbox = document.getElementById('hamburger-checkbox');
const visibleLinks = document.getElementById('visible-links');

hamburgerCheckbox.addEventListener('change', () => {
  if(hamburgerCheckbox.checked) {
    visibleLinks.style.marginBottom = "2.5rem";
} else {
    visibleLinks.style.marginBottom = "0rem";
}
});