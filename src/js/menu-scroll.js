function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

const menuItems = document.querySelectorAll('.header-item');
const toContact = document.querySelectorAll('.to-contact');
const docsItem = document.querySelectorAll('.docs-link');

docsItem.forEach(item => {
  scrollTo(item);
});

toContact.forEach(item => {
  scrollTo(item);
});

menuItems.forEach(item => {
  scrollTo(item);
});

function scrollTo(item) {
  item.addEventListener('click', event => {
    event.preventDefault();
    const sectionId = item.getAttribute('data-section');
    scrollToSection(sectionId);
  });
}
