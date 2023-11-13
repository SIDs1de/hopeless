document.addEventListener('DOMContentLoaded', () => {
  const main = () => {
    const wowCheck = () => {
      if (window.innerWidth <= 700) {
        const elements = document.querySelectorAll('[data-wow-delay]');
        elements.forEach(el => {
          el.removeAttribute('data-wow-delay')
        })
      }
    }

    window.addEventListener('resize', wowCheck)
    wowCheck()
    new WOW().init();
  }

  main()
})
