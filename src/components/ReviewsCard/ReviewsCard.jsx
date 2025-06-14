import './ReviewsCard.scss'
import classNames from 'classnames'
import {Image} from "minista";
import RatingView from "@/components/RatingView/index.js";

const ReviewsCard = (props) => {
  const {
    className,
    title,
    description,
    srcImg,
    ratingValue = 5,
  } = props

  return (
    <div
      className={classNames(className, 'reviews-card')}
    >
      <header className="reviews-card__header">
        <Image src={srcImg} />
        <h3 className="reviews-card__title h5">{title}</h3>
      </header>
      <div className="reviews-card__body">
        <RatingView value={ratingValue} />
        <div className="reviews-card__description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewsCard