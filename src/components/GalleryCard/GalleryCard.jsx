import './GalleryCard.scss'
import classNames from 'classnames'
import Grid from "@/components/Grid/index.js";
import {Image} from "minista";
import Slider from "@/components/Slider/index.js";
import ButtonSlider from "@/components/ButtonSlider/index.js";
import SliderPanel from "@/components/SliderPanel/index.js";

const GalleryCard = (props) => {
  const {
    className,
    images = [],
    description,
    title,
  } = props

  return (
    <div
      className={classNames(className, 'gallery-card')}
      data-js-slider=''
    >
      <div
        className="gallery-card__wrapper"
        data-js-slider-body=''
      >
        <Slider
          sliderParams={
            {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween:20,
              breakpoints: {
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                481: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                  spaceBetween: 40,
                  allowTouchMove: false,
                },
                1441: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                  spaceBetween: 40,
                  allowTouchMove: false,
                }
              }
            }
          }
        >
          {images.map((imageSrc, index) => {
            return (
              <Image
                className='gallery-card__image'
                src={imageSrc}
                key={index}
              />
            )
          })}
        </Slider>
      </div>
      <div className="gallery-card__body">
        <div className="gallery-card__body-wrapper">
          <h3 className="gallery-card__title">{title}</h3>
          <SliderPanel />
        </div>
        <div className="gallery-card__description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default GalleryCard