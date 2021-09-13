const $container = $('.cabinet')
const $btn = $('.js-cabinet__btn')
const $menu = $('.js-cabinet__window')
let flag = false

function openMenu() {
  $menu.slideDown(200)
  flag = true
}

function closeMenu() {
  $menu.slideUp(200)
  flag = false
}

$btn.click((evt) => {
  evt.preventDefault()
  if (!flag) {
    openMenu()
  } else if (flag) {
    closeMenu()
  }
})

$(document).on('mouseup touchstart', (evt) => {
  if (
    !$container.is(evt.target) &&
    $container.has(evt.target).length === 0 &&
    flag
  ) {
    closeMenu()
  }
})

export default closeMenu
