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
    rowGapClassName,
    extraAttrs,
    rowGapToTabs,
    id,
  } = props

  return (
    <section
      className={classNames(className, 'section container')}
      aria-labelledby={titleId}
      id={id}
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
          [`section__body--${rowGapClassName}`]: rowGapClassName,
          [`section__body--${rowGapToTabs}`]: rowGapToTabs,
        })}
        {...extraAttrs}
      >
        {children}
      </div>
    </section>
  )
}

export default Section