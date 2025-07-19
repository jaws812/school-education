import './Scroll.scss'

const Scroll = () => {


  return (
    <button
      className="scroll visually-hidden"
      type="button"
      title='Scroll to top'
      aria-label='Scroll to top'
      data-js-scroll=''
    >
      <span className="visually-hidden">Scroll to top</span>
    </button>
  )
}

export default Scroll