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
    titlePanel,
    description,
    srcImgItems=[],
  } = props

  return (
    <div
      className={classNames(className, 'gallery-card')}
    >
      <div className="gallery-card__wrapper">
         <Slider
          sliderParams={{
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 20,
            breakpoints: {
              0: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 20,
              },
              481: {
                slidesPerView: 4,
                slidesPerGroup: 4,
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
                spaceBetween: 20,
                // allowTouchMove: false,
                // такое правило действует от 1024 до 1441
              },
              1441: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 20,
               /* allowTouchMove: false,*/
              }
            }

          }}
        >
          {srcImgItems.map((srcImg, index) => (
            <Image
              className='gallery-card__image'
              src={srcImg}
              key={index}
            />)
          )}
        </Slider>
      </div>

      <div className="gallery-card__body">
        <div className="gallery-card__panel">
          <SliderPanel
            title={titlePanel}
          />
        </div>

        <div
          className="gallery-card__description"
        >
          <p>{description}</p>
        </div>

      </div>
    </div>
  )
}

export default GalleryCard