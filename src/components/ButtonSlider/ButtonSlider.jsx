import './ButtonSlider.scss'
import classNames from 'classnames'
import Icon from "@/components/Icon/index.js";

const ButtonSlider = (props) => {
  const {
    className,
    classNameIcon,
    leftSideButton = true,
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
        className={classNames(classNameIcon)}
        name={leftSideButton ? 'arrow-slider-left' : 'arrow-slider-right'}
        hasFill={hasFill}
        ariaLabel={leftSideButton ? 'Arrow left' : 'Arrow right'}
      />
    </button>
  )

}

export default ButtonSlider