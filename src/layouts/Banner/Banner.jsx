import './Banner.scss'
import Grid from "@/components/Grid/index.js";
import Icon from "@/components/Icon/index.js";

const Banner = (props) => {
  const {
    title,
    titleId,
    badge,
    description,
    actions,
  } = props

  return (
    <section
      className='banner'
      aria-labelledby={titleId}
    >
      <div className="banner__inner">
        <div className="banner__body">
          <div className="banner__badge">{badge}</div>
          <h1
            className="banner__title h3"
            id={titleId}
          >{title}</h1>
        </div>
        <div className="banner__extra">
          <div className="banner__description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner