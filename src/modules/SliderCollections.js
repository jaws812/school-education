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
    const navigation = {
      // prevEl: this.previousButtonElement,
      // nextEl: this.nextButtonElement,
      prevEl: document.documentElement.clientWidth <= 768 ? this.previousButtonMobileElement : this.previousButtonElement,
      nextEl: document.documentElement.clientWidth <= 768 ? this.nextButtonMobileElement : this.nextButtonElement,
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