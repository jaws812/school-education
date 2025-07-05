import './Grid.scss'
import classNames from 'classnames'

const Grid = (props) => {
  const {
    children,
    columns,
    rowGapClassName,
  } = props

  return (
    <ul
      className={classNames('grid', {
        [`grid--${columns}`]: columns > 1,
        [`grid--${rowGapClassName}`]: rowGapClassName,
      })}
    >
      {children?.map((child, index) => (
        <li
          className="grid__item"
          key={index}
        >
          {child}
        </li>
      ))}
    </ul>
  )
}

export default Grid