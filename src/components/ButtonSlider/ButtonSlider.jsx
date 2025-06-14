import './ButtonSlider.scss'
import classNames from 'classnames'
import Icon from "@/components/Icon/index.js";

const ButtonSlider = (props) => {
  const {
    className,
    leftSideButton = true,
    // iconName = 'arrow-left' | 'arrow-right'
    mode,
    type = 'button',
    hasFill,
    label,
    extraAttrs,
    hiddenOnMobile,
  } = props


  return (
    <button
      className={classNames(className, 'button-slider', {
        [`button--${mode}`]: mode,
        'hidden-mobile': hiddenOnMobile,
      })}
      type={type}
      title={label}
      aria-label={label}
      {...extraAttrs}
    >
      <Icon
        name={leftSideButton ? 'arrow-slider-left' : 'arrow-slider-right'}
        hasFill={hasFill}
        ariaLabel={leftSideButton ? 'Arrow left' : 'Arrow right'}
      />
    </button>
  )

}

export default ButtonSlider