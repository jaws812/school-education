import getParams from "@/utils/getParams.js";
import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

const rootSelector = '[data-js-slider]'

class Slider {
  selectors = {
    root: rootSelector,
    swiper: '[data-js-slider-swiper]',
    previousButton: '[data-js-slider-previous-button]',
    nextButton: '[data-js-slider-next-button]',
    previousButtonMobile: '[data-js-slider-previous-button-mobile]',
    nextButtonMobile: '[data-js-slider-next-button-mobile]',
    sliderMain: '[data-js-slider-main]',
    panelButtons: '[data-js-slider-navigation]',
  }

  constructor(rootElement) {
    this.rootElement = rootElement//
    this.sliderBodyMainElement = this.rootElement.querySelector(this.selectors.sliderMain)//
    this.swiperElement = this.rootElement.querySelector(this.selectors.swiper)//
    this.params = getParams(this.sliderBodyMainElement, this.selectors.sliderMain)
    this.previousButtonElement = this.rootElement.querySelector(this.selectors.previousButton)
    this.nextButtonElement = this.rootElement.querySelector(this.selectors.nextButton)
    this.previousButtonMobileElement = this.rootElement.querySelector(this.selectors.previousButtonMobile)
    this.nextButtonMobileElement = this.rootElement.querySelector(this.selectors.nextButtonMobile)

    this.init()
  }

  init() {
    const isMobile = document.documentElement.clientWidth <= 768

    const previousMobileButton = this.previousButtonMobileElement
    const nextMobileButton = this.nextButtonMobileElement

    const previousDefaultButton = this.previousButtonElement
    const nextDefaultButton = this.nextButtonElement

    const previousElement = isMobile && previousMobileButton ? previousMobileButton : previousDefaultButton
    const nextElement = isMobile && nextMobileButton ? nextMobileButton : nextDefaultButton

    const navigation = {
      prevEl: previousElement,
      nextEl: nextElement,
    };

    new Swiper(this.swiperElement, {
      ...this.params.sliderParams,
      modules: [Navigation],
      navigation: navigation,
    })
  }
}

class SliderCollections {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Slider(element)
    })
  }
}

export default SliderCollections