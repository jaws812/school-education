import './Banner.scss'
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
          {actions && (
            <div className="banner__socials">
              <ul className="banner__list grid grid--2 grid--small-gap">
                <li className="banner__item">
                  <a
                    className="banner__item-wrapper-link"
                    href="mailto:hello@littlelearners.com"
                  >
                    <Icon
                      className='banner__item-icon'
                      ariaLabel='Email'
                      name='email'
                      hasFill
                    />
                  </a>
                  <a
                    className="banner__item-link"
                    href="mailto:hello@littlelearners.com"
                  >
                    hello@littlelearners.com
                  </a>
                </li>
                <li className="banner__item">
                  <a
                    className="banner__item-wrapper-link"
                    href="tel:9191813232309"
                  >
                    <Icon
                      className='banner__item-icon'
                      ariaLabel='Telephone'
                      name='telephone'
                      hasFill
                    />
                  </a>

                  <a
                    className="banner__item-link"
                    href="tel:9191813232309"
                  >
                    +91 91813 23 2309
                  </a>
                </li>
                <li className="banner__item">
                  <a
                    className="banner__item-wrapper-link"
                    href="./"
                  >
                    <Icon
                      className='banner__item-icon'
                      ariaLabel='Map'
                      name='map'
                      hasFill
                    />
                  </a>
                  <a
                    className="banner__item-link"
                    href="./"
                  >
                    Somewhere in the World
                  </a>
                </li>
                <li className="banner__item">
                  <a
                    className="banner__item-wrapper-link"
                    href="./"
                  >
                    <Icon
                      className='banner__item-icon'
                      ariaLabel='Clock'
                      name='clock'
                      hasFill
                    />
                  </a>
                  <a
                    className="banner__item-link"
                    href="./"
                  >
                    Office Hours - 9am - 6 pm
                  </a>
                </li>

              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Banner