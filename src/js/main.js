import { initializeSwiper } from './swiper';
import { imageFiles } from './resources';
import { openModal, closeModal } from './modal';
import { data } from './resources';

const { card, icons } = data;

const swiper = initializeSwiper();

card.job_listing.forEach((vacancy, index) => {
  const vacancyCard = document.createElement('div');
  vacancyCard.classList.add('swiper-slide');
  vacancyCard.innerHTML = `
    <div class="vacancy-card" id='${vacancy.id}'>
      <div class="vacancy-img-wrap" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 15%, rgba(252, 176, 69, 0) 50%), url('${imageFiles[index]}');"> <h4 class="vacancy-title">${vacancy.job_title}</h4> </div>
      <div class="vacancy-data-wrap">
        <p class="vacancy-data-item"><svg class="vacancy-icon" width="25" height="25">
          <use href="${icons}#icon-location"></use>
        </svg><b>City: </b>${vacancy.city}</p>
        <p class="vacancy-data-item"><svg class="vacancy-icon" width="25" height="25">
          <use href="${icons}#icon-user"></use>
        </svg><b>Position: </b>${vacancy.position}</p>
        <p class="vacancy-data-item"><svg class="vacancy-icon" width="25" height="25">
          <use href="${icons}#icon-credit-card"></use>
        </svg><b>Salary: </b>${vacancy.salary}</p>
      </div>
      <button type="button" class="vacancies-btn btn" data-id="${vacancy.id}" data-modal-open >More info</button>
    </div>
  `;
  swiper.appendSlide(vacancyCard);
});

const modalButtons = document.querySelectorAll('[data-modal-open]');
const closeModalButtons = document.querySelectorAll('[data-modal-close]');
const modal = document.querySelector('[data-modal]');

modalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const id = button.getAttribute('data-id');
    openModal(id);
  });
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    closeModal();
  });
});

modal.addEventListener('click', event => {
  if (event.target === modal) {
    closeModal();
  }
});
