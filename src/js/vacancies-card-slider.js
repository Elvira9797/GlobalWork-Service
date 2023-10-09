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
            <div class="vacancy-card">
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
              <button type="button" class="vacancies-btn btn">More info</button>
            </div>
          `;
  swiper.appendSlide(vacancyCard);
});
