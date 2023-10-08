import card from '../common/card-vacancies.json';

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

card.job_listing.forEach(vacancy => {
  const vacancyCard = document.createElement('div');
  vacancyCard.classList.add('swiper-slide');
  vacancyCard.innerHTML = `
            <div class="vacancy-card">
              <img class="vacancy-img" src="./images/chairs.jpg" alt="chairs" />
              <div class="vacancy-data-wrap">
                <p><b>City: </b>${vacancy.city}</p>
                <p><b>Position: </b>${vacancy.position}</p>
                <p><b>Salary: </b>${vacancy.salary}</p>
              </div>
              <button type="button" class="vacancies-btn btn">More info</button>
            </div>
          `;
  swiper.appendSlide(vacancyCard);
});
