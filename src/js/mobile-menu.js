(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menu.addEventListener('click', onBackdropClick);

  function toggleMenu() {
    document.body.classList.toggle('menu-open');
    refs.menu.classList.toggle('is-open');
  }

  function onBackdropClick(event) {
    if (event.target === refs.menu) {
      toggleMenu();
    }
  }
})();

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

const menuItems = document.querySelectorAll('.mob-menu-item');

menuItems.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();

    const refs = {
      menu: document.querySelector('[data-menu]'),
    };
    refs.menu.classList.remove('is-open');
    document.body.classList.remove('menu-open');

    const sectionId = item.getAttribute('data-section');
    scrollToSection(sectionId);
  });
});
