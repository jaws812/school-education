import './DecorationIcon.scss'
import classNames from 'classnames'
import Icon from "@/components/Icon/index.js";

const DecorationIcon = (props) => {
  const {
    className,
    srcName,
    ariaLabel,
  } = props

  return (
    <div className="decoration__wrapper">
      <Icon
        className={classNames(className, 'decoration__icon')}
        name={srcName}
        hasFill
        ariaLabel={ariaLabel}
      />
    </div>
  )
}

export default DecorationIcon