const aboutCards = document.querySelectorAll('.about-card');

// Функція, що знімає клас hidden та додає анімацію
function revealCards() {
  aboutCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.remove('hidden');
      card.classList.add('fadeIn'); // Додайте клас анімації
    }, 300 * index); // Затримка між кожною карточкою (в мілісекундах)
  });
}

// Отримайте елемент секції "About" за допомогою ідентифікатора
const aboutSection = document.getElementById('about');

// Визначте функцію, яка буде перевіряти, чи прокручено до секції "About"
function checkScroll() {
  const scrollY = window.scrollY;
  const aboutSectionTop = aboutSection.offsetTop;

  // Визначте, наскільки віддалена від верху сторінки секція "About"
  const offset = 100; // За замовчуванням буде включена анімація, коли секція приблизно на половині екрану

  if (scrollY + window.innerHeight > aboutSectionTop + offset) {
    // Запуск анімації, коли секція "About" прокручується в видиму область
    revealCards();
    // Відключіть подальше відслідковування прокрутки, якщо потрібно
    window.removeEventListener('scroll', checkScroll);
  }
}

// Додайте подію прокрутки для виклику функції checkScroll
window.addEventListener('scroll', checkScroll);
