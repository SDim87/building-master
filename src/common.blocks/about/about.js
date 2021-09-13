const $item = $('.js_about__item')
const $img = $('.js_about__img')
const $filterDouble = $('.js_about__filter_double')
const $filterColor = $('.js_about__filter_color')
const $filterSize = $('.js_about__filter_size')
const $btnPlace = $('.js_about__place')
const $btnColor = $('.js-about__color')
const $btnSize = $('.js-about__size')
const isActive = 'isActive'
const block1 = 'about__block-1'
const block2 = 'about__block-2'
const block3 = 'about__block-3'

const State = {
  prop: {
    size: 1,
    place: 1,
    color: 'white',
  },
  getProp() {
    return this.prop
  },
  setSize(sizeActive) {
    this.prop.size = sizeActive
  },
  setPlace(placeActive) {
    this.prop.place = placeActive
  },
  setColor(colorActive) {
    this.prop.color = colorActive
  },
  setImageSize() {
    return $img.attr('src', `./img/about__size_img-${this.prop.size}.webp`)
  },
  setImage() {
    return $img.attr(
      'src',
      `./img/about__img_${this.prop.color}_${this.prop.place}.webp`,
    )
  },
}

$item.first().addClass(isActive)

$filterSize.addClass(isActive)
$btnSize.first().addClass(isActive)

// смена табов
$item.click(function onChangeItem() {
  const $this = $(this)

  if ($this.hasClass(isActive)) return

  $item.removeClass(isActive)
  $this.addClass(isActive)
  $filterDouble.removeClass(isActive)
  $filterColor.removeClass(isActive)
  $filterSize.removeClass(isActive)

  if ($this.attr('id') === block1) {
    $filterSize.addClass(isActive)
    State.setImageSize()
  }

  if ($this.attr('id') === block2) {
    if (!$btnPlace.hasClass(isActive)) {
      $btnPlace.first().addClass(isActive)
    }

    $filterDouble.addClass(isActive)

    State.setImage()
  }

  if ($this.attr('id') === block3) {
    if (!$btnColor.hasClass(isActive)) {
      $btnColor.first().addClass(isActive)
    }

    $filterColor.addClass(isActive)

    State.setImage()
  }
})

// смена настройки размера
$btnSize.click(function onBtnSize() {
  const $this = $(this)
  const numberSize = $this.attr('data-size')

  $btnSize.removeClass(isActive)
  $this.addClass(isActive)

  State.setSize(numberSize)
  State.setImageSize()
})
// смена настройки внутренних ящиков
$btnPlace.click(function onBtnPlace() {
  const $this = $(this)
  const numberPlace = $this.attr('data-place')

  $btnPlace.removeClass(isActive)
  $this.addClass(isActive)

  State.setPlace(numberPlace)
  State.setImage()
})

// смена фильтров цвета
$btnColor.click(function onBtnColor() {
  const $this = $(this)
  const color = $this.attr('data-color')

  $btnColor.removeClass(isActive)
  $this.addClass(isActive)

  State.setColor(color)
  State.setImage()
})
