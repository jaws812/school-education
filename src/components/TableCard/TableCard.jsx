import './TableCard.scss'
import classNames from 'classnames'

const TableCard = (props) => {
  const {
    children,
  } = props

  return (
    <div className="table-card__wrapper">
      <div className="table-card">
        {children}
      </div>
    </div>

  )
}

export default TableCard