const sliderSegments = new Swiper('.js-segments__container', {
  slidesPerView: 3,
  spaceBetween: 16,
  observer: true,
  grabCursor: true,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    prevEl: '.js-segments__prev',
    nextEl: '.js-segments__next',
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 1,
    },
  },
})

$('.js-segments__container').hover(
  () => {
    sliderSegments.autoplay.stop()
  },
  () => {
    sliderSegments.autoplay.start()
  },
)
