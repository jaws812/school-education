const rootSelector = '[data-js-overlay-menu]'

class OverlayMenu {
  selectors =
    {
      root: rootSelector,
      dialog: '[data-js-overlay-menu-dialog]',
      burgerButton: '[data-js-overlay-menu-burger-button]',
    }

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.dialogElement = this.rootElement.querySelector(this.selectors.dialog)
    this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
    this.bindEvents()
  }

  onBurgerButtonClick = () => {
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
    this.dialogElement.open = !this.dialogElement.open
    document.documentElement.classList.toggle(this.stateClasses.isLock)
  }

  bindEvents() {
    this.burgerButtonElement.addEventListener("click", this.onBurgerButtonClick)
  }
}

class OverlayMenuCollections {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new OverlayMenu(element)
    })
  }

}

export default OverlayMenuCollections