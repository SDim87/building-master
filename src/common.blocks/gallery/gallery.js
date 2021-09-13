// eslint-disable-next-line no-unused-vars
const sliderGallery = new Swiper('.js-gallery__container', {
  freeMode: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
  grabCursor: true,
  // autoplay: {
  //   delay: 4000,
  // },
  autoplay: false,
  navigation: {
    prevEl: '.js-gallery__prev',
    nextEl: '.js-gallery__next',
  },
  breakpoints: {
    768: {
      spaceBetween: 8,
    },
  },
})
