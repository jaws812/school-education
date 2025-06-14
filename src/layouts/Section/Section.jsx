import './Section.scss'
import classNames from 'classnames'

const Section = (props) => {
  const {
    className,
    children,
    badge,
    title,
    description,
    titleId,
    flex,
    extraAttrs
  } = props

  return (
    <section
      className={classNames(className, 'section container', {
        [`section--${flex}`]: flex,
      })}
      aria-labelledby={titleId}
    >
      <header className="section__header">
        <div className="section__info">
          <div className="section__badge">{badge}</div>
          <h2
            className="section__title h1"
            id={titleId}
          >{title}</h2>
          <div className="section__description">
            <p>{description}</p>
          </div>
        </div>
      </header>
      <div
        className={classNames(className, 'section__body', {
          [`section__body--${flex}`]: flex,
        })}
        {...extraAttrs}
      >
        {children}
      </div>
    </section>
  )
}

export default Section