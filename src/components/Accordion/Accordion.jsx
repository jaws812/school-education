import './Accordion.scss'

const Accordion = (props) => {
  const {
    name,
    isOpen,
    id,
    title,
    children,
  } = props

  return (
    <div
      className='accordion'
    >
      <details
        className="accordion__details"
        name={name}
        open={isOpen}
      >
        <summary className="accordion__summary">
          <h3 className="accordion__title h6">
            <span
              role="term"
              aria-details={id}
            >
             {title}
            </span>
            <div
              className="accordion__button button"
              role='button'
              tabIndex={0}
              title='Open or close accordion'
              aria-label='Open or close accordion'
            ></div>

            {/*<div className="accordion__button-wrapper">*/}
            {/*<div className="accordion__button-wrapper">
              <Button
                className='accordion__button'
                label='Switch accordion'
                isLabelHidden
                extraAttrs={{
                  'data-js-button-accordion': ''
                }}
              />
            </div>*/}
            {/*</div>*/}

          </h3>
        </summary>
      </details>
      <div
        className="accordion__content"
        id={id}
        role="definition"
      >
        <div className="accordion__content-inner">
          <div className="accordion__content-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion