import './ProcessCard.scss'
const ProcessCard = (props) => {
  const {
    title,
    description,
    number
  } = props

  return (
    <div className="process-card">
      <div className="process-card__action">
        <div className="process-card__number">{number}</div>
      </div>
      <div className="process-card__body">
        <h3 className="process-card__title">{title}</h3>
        <div className="process-card__description">{description}</div>
      </div>
    </div>
  )
}

export default ProcessCard