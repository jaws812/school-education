import './NavigationCard.scss'
import classNames from 'classnames'
import Button from "@/components/Button/index.js";
import {Image} from "minista";

const NavigationCard = (props) => {
  const {
    className,
    title,
    description,
    pathLink,
  } = props

  return (
    <div
      className={classNames(className, 'navigation-card')}
    >
      <div className="navigation-card__body">
        <h3 className="navigation-card__title">{title}</h3>
        <Image
          className='navigation-card__image '
          src='./src/assets/images/navigation/decoration.png'
        />
{/*        <Image
          className='navigation-card__image navigation-card__image--mobile'
          src='./src/assets/images/navigation/decoration-mobile.png'
        />*/}

        <div className="navigation-card__description">
          <p>{description}</p>
        </div>
      </div>
      <div className="navigation-card__extra">
        <Button
          className='navigation-card__button'
          // href='./'
          label='Learn More'
          iconName='arrow-right'
          iconPosition='after'
          mode='orange-90'
          hasFillIcon
          href={`${pathLink}`}
        />
      </div>
    </div>
  )
}

export default NavigationCard