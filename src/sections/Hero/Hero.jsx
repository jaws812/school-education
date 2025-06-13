import './Hero.scss'
import './Metric.scss'
import classNames from 'classnames'
import {Image} from "minista";

const Hero = (props) => {
  const titleId = 'hero-title'

  const metricItems = [
    {
      term: 'Students Passed Out',
      value: '+7000',
    },
    {
      term: 'Awards & Recognitions',
      value: '+37',
    },
    {
      term: 'Experience Educators',
      value: '+15',
    },
  ]

  const {
    className,
  } = props

  return (
    <section
      className={classNames(className, 'hero container')}
      aria-labelledby={titleId}
    >
      <div className="hero__body">
        <Image
          className="hero__image"
          src="/src/assets/images/hero/kids.jpg"
        />
        <div className="hero__info">
          <div className="hero__subtitle">Welcome to Little Learners Academy</div>
          <h1
            className="hero__title h2"
            id={titleId}
          >
            Where Young Minds Blossom and <span className="hero__title-accent">Dreams Take Flight.</span>
          </h1>
          <div className="hero__description">
            <p>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
          </div>
          <div className="hero__metric metric">
            <dl className="metric__list">
              {metricItems.map(({term, value}, index) => (
                <div
                  className="metric__item"
                  key={index}
                >
                  <dt className="metric__term">{term}</dt>
                  <dd className="metric__value">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero