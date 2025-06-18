import './LearnCard.scss'
import classNames from 'classnames'
import {Image} from "minista";

const LearnCard = (props) => {
  const {
    imgSrc,
    title,
    description,
  } = props

  return (
    <div
      className='learn-card'
    >
      <div className="learn-card__wrapper">
        <Image
          className="learn-card__image"
          src={imgSrc}
        />
      </div>
      <div className="learn-card__body">
        <h3 className="learn-card__body-title h4">{title}</h3>
        <div className="learn-card__body-description">{description}</div>
      </div>
    </div>
  )
}

export default LearnCard