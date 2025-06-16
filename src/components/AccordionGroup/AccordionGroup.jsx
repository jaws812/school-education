import './AccordionGroup.scss'
import classNames from 'classnames'

const AccordionGroup = (props) => {
  const {
    className,
    children,
    columns,
  } = props

  return (
    <ul
      className={classNames(className, 'accordion-group', {
        [`accordion-group--${columns}-columns`]: columns > 1,
      })}
    >
      {children.map((child, index) => (
        <li
          className={classNames("accordion-group__item")}
          key={index}
        >{child}</li>
      ))}
    </ul>
  )
}

export default AccordionGroup