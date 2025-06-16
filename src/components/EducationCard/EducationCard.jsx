import './EducationCard.scss'
import classNames from 'classnames'
import DecorationIcon from "@/components/DecorationIcon/index.js";

const EducationCard = (props) => {
  const {
    title,
    description,
    imgSrc,
  } = props

  return (
    <div
      className={classNames('education-card')}
    >
      <div className="education-card__body">
        <DecorationIcon
          className='education-card__icon'
          srcName={imgSrc}
          ariaLabel='education'
        />
        <h3 className="education-card__title h4">{title}</h3>
        <div className="education-card__description">{description}</div>
      </div>
    </div>
  )
}

export default EducationCard