function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

const menuItems = document.querySelectorAll('.header-item');

menuItems.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    const sectionId = item.getAttribute('data-section');
    scrollToSection(sectionId);
  });
});
