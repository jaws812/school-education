import './DateCard.scss'
import classNames from 'classnames'
import {Image} from "minista";

const DateCard = (props) => {
  const {
    year,
  } = props

  return (
    <div className='date-card'>
      <div className="date-card__body">
        <Image
          className='date-card__image'
          src='src/assets/images/story/decoration.png'
        />
        <div className="date-card__year">{year}</div>
      </div>
    </div>
  )
}

export default DateCard