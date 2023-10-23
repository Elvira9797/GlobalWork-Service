// swiper.js
import Swiper from 'swiper/bundle';

export function initializeSwiper() {
  const swiper = new Swiper('.mySwiper', {
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
  return swiper;
}
