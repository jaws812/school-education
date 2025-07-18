import './TableCard.scss'

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