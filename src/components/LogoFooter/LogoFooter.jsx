import './LogoFooter.scss'
import classNames from 'classnames'

const LogoFooter = (props) => {
  const title = 'Home'

  const {
    className,
    loading = 'lazy',
  } = props

  return (
    <a
      className={classNames(className, 'logo-footer')}
      href='./'
      title={title}
      aria-label={title}
    >
      <img
        className='logo__image'
        src="./logo-footer.svg"
        alt=""
        width="228"
        height="50"
        loading={loading}
      />
    </a>
  )
}

export default LogoFooter