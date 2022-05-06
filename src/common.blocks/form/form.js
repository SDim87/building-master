const $inputTel = $('.js-form__input_tel')
const $textareaProblem = $('.js-form__text-problem')

/**
 * @param {string} flag - success | error
 */
const openPopup = (flag) => {
  const $btn = $(`.js-popup-${flag}`)

  $btn.trigger('click')

  setTimeout(() => {
    $(`#popup-${flag} .mfp-close`).trigger('click')
  }, 5000)
}

$('input[type="tel"]').inputmask({
  mask: '+7 (999) 999-99-99',
})

const token = '5294135652:AAHRqPMRqyah1bz8dUV3jHeAdVFLeHmn1a8'
const chatId = '-773208790'

$('.js-submit').on('click', (evt) => {
  evt.preventDefault()

  const lengthTel = $inputTel
    .val()
    .trim()
    .replace(/ |[-()+_]/g, '').length

  if (lengthTel === 11) {
    const message = `${$inputTel.val()} - ${$textareaProblem.val()}`

    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${message}`)
      .then(({ ok }) => {
        if (ok) {
          openPopup('success')
        } else {
          openPopup('error')
        }
      })

    $inputTel.removeClass('error')
    $inputTel.next().removeClass('visual')
  } else {
    $inputTel.addClass('error')
    $inputTel.next().addClass('visual')
  }
})
