import card from '../common/card-vacancies.json';
import chemical from '../images/chemical.jpg';
import chairs from '../images/chairs.jpg';
import jelly from '../images/jelly.jpg';
import insulation from '../images/insulation.jpg';
import forklift from '../images/forklift.jpg';
import energy_drinks from '../images/energy-drinks.jpg';
import beer from '../images/beer.jpg';
import ice_cream from '../images/ice-cream.jpg';
import pavement from '../images/pavement.jpg';
import icons from '../images/icons.svg';
import fullInfoVacancies from '../common/full-info-vacancies.json';

const imageFiles = [
  chemical,
  chairs,
  jelly,
  insulation,
  forklift,
  energy_drinks,
  beer,
  ice_cream,
  pavement,
];

let swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

card.job_listing.forEach((vacancy, index) => {
  const vacancyCard = document.createElement('div');
  vacancyCard.classList.add('swiper-slide');
  vacancyCard.innerHTML = `
            <div class="vacancy-card" >
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
              <button type="button" class="vacancies-btn btn" data-id='${vacancy.id}' data-modal-open>More info</button>
            </div>
          `;
  swiper.appendSlide(vacancyCard);
});

const modalButtons = document.querySelectorAll('[data-modal-open]');
const closeModalButtons = document.querySelectorAll('[data-modal-close]');
const modal = document.querySelector('[data-modal]');
const modalVacancyWrap = document.querySelector('#modal-vacancy');

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

function openModal(id) {
  const vacancy = fullInfoVacancies.job_listing.filter(
    vacancy => vacancy.id === id
  );

  const modalVacancy = vacancyMarkup(vacancy);
  modalVacancyWrap.innerHTML = modalVacancy;

  const applyForJobButton = document.querySelector('.modal-vacancy-btn');

  applyForJobButton.addEventListener('click', handleClickApplyForJobBtn);

  toggleModal();
}

function handleClickApplyForJobBtn() {
  closeModal();

  const contactsSection = document.querySelector('#contacts-us');

  if (contactsSection) {
    window.scrollTo({
      top: contactsSection.offsetTop,
      behavior: 'smooth',
    });
  }
}

function vacancyMarkup(vacancy) {
  return vacancy
    .map(vacancy => {
      return `<h3 class="modal-content-title">${vacancy.job_title}</h3>
        <ul class="modal-content-list">
          <li class="modal-content-item">
            ${vacancy.looking_for}
          </li>
          <li><span class="modal-content-span">Responsibilities: </span>${
            vacancy.responsibilities
          }</li>
          <li><span class="modal-content-span">Salary: </span> ${
            vacancy.salary
          }</li>
          <li>
            <span class="modal-content-span">Workhours: </span>${
              vacancy.work_schedule
            }
          </li>
          </ul>
          <h4 class="offer-title">What we offer:</h4>
          <ul class="offer-list">
          ${vacancy.what_we_offer
            .map(offer => {
              return `<li class="offer-item">${offer}</li>`;
            })
            .join('')}
            </ul>
            <button type="button" class="vacancies-btn btn modal-vacancy-btn" >apply for a job</button>
        `;
    })
    .join('');
}

function closeModal() {
  document.body.classList.remove('modal-open');
  modal.classList.add('is-hidden');
}

function toggleModal() {
  document.body.classList.toggle('modal-open');
  modal.classList.toggle('is-hidden');
}
