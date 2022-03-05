const $items = $('.js_coast__item')
const isActive = 'isActive'
const $contentBlocks = $('.coast__content')
const $coast = $('.js-coast__box')

const State = {
  block: 1,
  imgNumber(imgActive) {
    this.block = imgActive
  },
  changeContent(num) {
    this.imgNumber(num)
    $contentBlocks.removeClass(isActive)
    $coast.find(`#coast__content-${num}`).addClass(isActive)
  },
}

// Начальное состояние
$items.first().addClass(isActive)
$contentBlocks.first().addClass(isActive)

// смена табов
$items.click(function onChangeItem() {
  const $this = $(this)

  if ($this.hasClass(isActive)) return

  $items.removeClass(isActive)
  $this.addClass(isActive)

  State.changeContent($this[0].id.slice(-1))
})
