"use strict";

$(function () {
  var checkReservateDay = document.querySelector('.checkReservateDay');

  if (checkReservateDay) {
    var datepicker = new Datepicker(checkReservateDay, {
      nextArrow: '>',
      prevArrow: '<',
      buttonClass: 'btn text-primary'
    });
  }

  $('.reservation__crouseList .card').on('click', function () {
    $('.reservation__crouseList').addClass('hideActiveMDBelow').find('.card').removeClass('border-4 active').siblings('.reservation__crouseList__arrow').addClass('d-none');
    $(this).toggleClass('border-4 active');
    $(this).siblings('.reservation__crouseList__arrow').toggleClass('d-none');
    $('.reservation__crouseLevel').removeClass('d-none');
  });
  $('.crouseLevelList .swiper-slide').on('click', function () {
    $(this).find('.card').toggleClass('border border-white border-4');
    $(this).find('.card__check').toggleClass('opacity-25');
  });
  var listenSwiper = new Swiper(".listenSwiper", {
    slidesPerView: 1,
    slidesPerColumn: 3,
    spaceBetween: 8,
    slidesPerColumnFill: 'row',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      768: {
        slidesPerView: 2.1,
        slidesPerColumn: 2,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30
      }
    }
  });
  var chooseSwiper = new Swiper(".chooseSwiper", {
    // 處理  display none 後一開始排版有問題
    observer: true,
    observeParents: true,
    // end 
    slidesPerView: 1,
    slidesPerColumn: 3,
    spaceBetween: 30,
    slidesPerColumnFill: 'row',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      768: {
        slidesPerView: 2.1,
        slidesPerColumn: 1,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 3,
        slidesPerColumn: 1,
        spaceBetween: 20
      }
    }
  });
  var courseRecommendationSwiper = new Swiper(".courseRecommendationSwiper", {
    slidesPerView: 1.2,
    slidesPerColumn: 1,
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 3,
        slidesPerColumn: 1
      },
      992: {
        slidesPerView: 4.2,
        slidesPerColumn: 1
      }
    }
  });
  var teacherIntroductionSwiper = new Swiper(".teacherIntroductionSwiper", {
    slidesPerView: 1,
    slidesPerColumn: 4,
    spaceBetween: 24,
    breakpoints: {
      768: {
        slidesPerView: 2.1,
        slidesPerColumn: 1
      },
      992: {
        slidesPerView: 3.1,
        slidesPerColumn: 1
      }
    }
  });
});
//# sourceMappingURL=all.js.map
