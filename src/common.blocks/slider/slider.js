const sliderCategory = new Swiper('.js-slider__container', {
  slidesPerView: 1,
  loop: true,
  observer: true,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: '.slider__pagination',
    clickable: true,
  },
})

// Остановка прокрутки при наведении
$('.js-slider__container').hover(
  () => {
    sliderCategory.autoplay.stop()
  },
  () => {
    sliderCategory.autoplay.start()
  },
)
