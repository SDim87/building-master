function openPopup(el) {
  $(el).magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    removalDelay: 200,
    callbacks: {
      beforeOpen() {
        this.st.mainClass = this.st.el.attr('data-effect')
      },
    },
    midClick: true,
  })
}

openPopup('.js-popup-success')
openPopup('.js-popup-error')
