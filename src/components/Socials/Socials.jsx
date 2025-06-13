import './Socials.scss'
import classNames from 'classnames'
import Button from "@/components/Button/index.js";

const Socials = (props) => {
  const {
    className,
    links = [],
  } = props

  return (
    <div
      className={classNames(className, 'soc1als')}
    >
      <ul className="soc1als__list">
        {links.map(({label, iconName}, index) => (
          <li
            className="soc1als__item"
            key={index}
          >
            <Button
              className="soc1als__link"
              href='./'
              label={label}
              isLabelHidden
              iconName={iconName}
              hasFillIcon
              target="_blank"
              mode='orange-90'
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Socials