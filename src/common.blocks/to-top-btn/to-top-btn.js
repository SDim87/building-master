const $toTop = $('.to-top-btn')

$(window).scroll(function scrollBtn() {
  if ($(this).scrollTop() !== 0) {
    $toTop.fadeIn()
  } else {
    $toTop.fadeOut()
  }
})
$toTop.click(() => {
  $('body,html').animate(
    {
      scrollTop: 0,
    },
    800,
  )
})
