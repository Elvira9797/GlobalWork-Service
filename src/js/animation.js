const aboutCards = document.querySelectorAll('.about-card');

function revealCards() {
  aboutCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.remove('hidden');
      card.classList.add('fadeIn');
    }, 300 * index);
  });
}

const aboutSection = document.getElementById('about');

function checkScroll() {
  const scrollY = window.scrollY;
  const aboutSectionTop = aboutSection.offsetTop;

  const offset = 100;

  if (scrollY + window.innerHeight > aboutSectionTop + offset) {
    revealCards();

    window.removeEventListener('scroll', checkScroll);
  }
}

window.addEventListener('scroll', checkScroll);
