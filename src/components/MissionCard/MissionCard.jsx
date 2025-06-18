import './MissionCard.scss'
import classNames from 'classnames'
import {Image} from "minista";

const MissionCard = (props) => {
  const {
    className,
    title,
    description,
    srcImg,
  } = props

  return (
    <div
      className={classNames(className, 'mission-card')}
    >
      <div className="mission-card__body">
        <header className="mission-card__header">
          <h2 className="mission-card__title">{title}</h2>
          <Image
            className='mission-card__image'
            src={srcImg}
          />
        </header>
        <div className="mission-card__description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default MissionCard