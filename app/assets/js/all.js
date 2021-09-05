$(function() {
  const listenSwiper = new Swiper(".listenSwiper",{
    slidesPerView: 1,
    slidesPerColumn: 3,
    spaceBetween: 8,
    slidesPerColumnFill: 'row',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      768: {
        slidesPerView: 2.1,
        slidesPerColumn: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
      }
    }
  })
  var courseRecommendationSwiper = new Swiper(".courseRecommendationSwiper", {
    slidesPerView: 1.2,
    slidesPerColumn: 1,
    spaceBetween: 30,
    breakpoints:{
      768: {
        slidesPerView: 3,
        slidesPerColumn: 1,
      },
      992: {
        slidesPerView: 4.2,
        slidesPerColumn: 1,
      }
    }
  });
});