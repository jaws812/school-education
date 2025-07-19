const rootSelector = '[data-js-scroll]'

class ScrollToTop {

  selectors = {
    root: rootSelector,
  }

  stateClasses = {
    visuallyHidden: 'visually-hidden',
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.bindEvents()
  }

  toggleVisibility = () => {
    this.rootElement.classList.toggle(this.stateClasses.visuallyHidden, window.scrollY <= 900)
  }

  scrollToTop = () => {
    window.scrollTo(0, 0)
  }


  bindEvents() {
    window.addEventListener('scroll', this.toggleVisibility)
    this.rootElement.addEventListener('click', this.scrollToTop)
  }
}

class ScrollToTopCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new ScrollToTop(element)
    })
  }
}

export default ScrollToTopCollection