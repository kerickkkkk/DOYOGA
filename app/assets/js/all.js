$(function() {
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