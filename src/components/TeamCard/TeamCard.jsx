import './TeamCard.scss'
import {Image} from "minista";
import Icon from "@/components/Icon/index.js";
import Button from "@/components/Button/index.js";

const TeamCard = (props) => {
  const {
    imgSrc,
    name,
    title,
    description,
  } = props

  return (
    <div
      className='team-card'
    >
      <header className="team-card__header">
        <Image
          className='team-card__image'
          src={imgSrc}
        />
        <h3 className="team-card__name">{name}</h3>
        <Button
          className='team-card__link'
          href='mailto:hello@littlelearners.com'
          label="Send message"
          iconName='email'
          hasFillIcon
          isLabelHidden={true}
        />
      </header>
      <div className="team-card__body">
        <h4 className="team-card__body-title">{title}</h4>
        <div className="team-card__body-description">{description}</div>
      </div>
    </div>
  )
}

export default TeamCard