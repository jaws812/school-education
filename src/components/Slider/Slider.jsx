import 'swiper/css';
import './Slider.scss'
import classNames from "classnames";

const defaultSliderParams = {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  breakpoints: {
    0: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    481: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 40,
      allowTouchMove: false,
    },
    1441: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 50,
      allowTouchMove: false,
    }
  }
}

const Slider = (props) => {
  const {
    children,
    sliderParams = defaultSliderParams,
    isBeyondTheViewportOnMobileS,
  } = props

  return (
    <div
      className={classNames('slider', {
        'slider--beyond-the-viewport-on-mobile-s': isBeyondTheViewportOnMobileS,
      })}
      data-js-slider-main={JSON.stringify({
        sliderParams,
      })}

    >
      <div
        className="slider__swiper swiper"
        data-js-slider-swiper=""
      >
        <ul className="slider__list swiper-wrapper">
          {children.map((slide, index) => (
            <li
              className="slider__item swiper-slide"
              key={index}
            >
              {slide}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Slider