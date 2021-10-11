const $item = $('.js_about__item')
const $img = $('.js_about__img')
// const $filterDouble = $('.js_about__filter_double')
// const $filterColor = $('.js_about__filter_color')
// const $filterSize = $('.js_about__filter_size')
// const $btnPlace = $('.js_about__place')
// const $btnColor = $('.js-about__color')
// const $btnSize = $('.js-about__size')
const isActive = 'isActive'
const block1 = 'about__block-1'
const block2 = 'about__block-2'
const block3 = 'about__block-3'

const State = {
  prop: {
    img: 1,
  },
  imgNumber(imgActive) {
    this.prop.img = imgActive
  },
  setImage() {
    return $img.attr('src', `./img/about__img-${this.prop.img}.webp`)
  },
}

$item.first().addClass(isActive)

// смена табов
$item.click(function onChangeItem() {
  const $this = $(this)

  if ($this.hasClass(isActive)) return

  $item.removeClass(isActive)
  $this.addClass(isActive)

  if ($this.attr('id') === block1) {
    State.imgNumber(1)
    State.setImage()
  }

  if ($this.attr('id') === block2) {
    State.imgNumber(2)
    State.setImage()
  }

  if ($this.attr('id') === block3) {
    State.imgNumber(3)
    State.setImage()
  }
})
