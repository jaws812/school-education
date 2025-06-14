import './RatingView.scss'
import classNames from 'classnames'

const RatingView = (props) => {
  const {
    value,
  } = props

  const ariaLabel = `Rating: ${value} stars`

  return (
    <div
      className='rating-view'
      aria-label={ariaLabel}
      title={ariaLabel}
      style={{
        '--ratingViewValue': value,
      }}
    >
      <div className="rating-view__stars">
        <img
          className="rating-view__stars-infilled"
          src="rating/stars_unfilled.svg"
          alt=""
          width={140}
          height={24}
          loading="lazy"
        />
        <img
          className="rating-view__stars-filled"
          src="rating/stars_filled.svg"
          alt=""
          width={140}
          height={24}
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default RatingView