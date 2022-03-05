$(document).ready(() => {
  $('.js-gallery__box').click(function openGallery(e) {
    e.preventDefault()
    const gallery = $(this).attr('data-href')

    $(gallery)
      .magnificPopup({
        delegate: 'a',
        type: 'image',
        removalDelay: 500, // delay removal by X to allow out-animation
        closeBtnInside: false,
        fixedContentPos: true,
        closeOnContentClick: true,
        midClick: true,
        gallery: {
          enabled: true,
          preload: [0, 1],
        },
        callbacks: {
          beforeOpen() {
            // just a hack that adds mfp-anim class to markup
            this.st.image.markup = this.st.image.markup.replace(
              'mfp-figure',
              'mfp-figure mfp-with-anim',
            )
            this.st.mainClass = this.st.el.attr('data-effect')
          },
        },
      })
      .magnificPopup('open')
  })

  // open video in other window
  // $('.js-grid__box_video').click(function openGallery(e) {
  //   e.preventDefault()
  //   const gallery = $(this).attr('data-href')

  //   $(gallery)
  //     .magnificPopup({
  //       delegate: 'a',
  //       type: 'iframe',
  //       closeBtnInside: false,
  //       fixedContentPos: true,
  //       closeOnContentClick: true,
  //       midClick: true,
  //     })
  //     .magnificPopup('open')
  // })
})
