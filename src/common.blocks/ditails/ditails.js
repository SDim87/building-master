// eslint-disable-next-line no-unused-vars
const sliderDitails = new Swiper('.js-ditails__container', {
  freeMode: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
  grabCursor: true,
  // autoplay: {
  //   delay: 4000,
  // },
  autoplay: false,
  navigation: {
    prevEl: '.js-ditails__prev',
    nextEl: '.js-ditails__next',
  },
  // breakpoints: {
  //   1024: {
  //     slidesPerView: 2,
  //   },
  //   768: {
  //     slidesPerView: 1,
  //   },
  // },
})
