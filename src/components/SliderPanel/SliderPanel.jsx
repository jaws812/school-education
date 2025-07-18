import './SliderPanel.scss'
import ButtonSlider from "@/components/ButtonSlider/index.js";

const SliderPanel = (props) => {
  const {
    title,
  } = props

  return (
    <div className="slider-panel">
      {title && (
        <p className='slider-panel__text'>{title}</p>
      )}
      <div
        className="slider-panel__buttons"
        data-js-slider-navigation=''
      >
        <ButtonSlider
          className='slider-panel__button'
          classNameIcon='slider-panel__icon'
          hasFill
          label='Previous slide'
          leftSideButton={true}
          extraAttrs={{
            'data-js-slider-previous-button': ''
          }}
        />
        <ButtonSlider
          className='slider-panel__button'
          classNameIcon='slider-panel__icon'
          hasFill
          label='Next slide'
          leftSideButton={false}
          extraAttrs={{
            'data-js-slider-next-button': ''
          }}
        />
      </div>
    </div>
  )
}

export default SliderPanel