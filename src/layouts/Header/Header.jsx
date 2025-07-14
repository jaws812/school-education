import Icon from "@/components/Icon/index.js";
import './Header.scss'
import classNames from "classnames";
import Logo from "@/components/Logo/index.js";
import BurgerButton from "@/components/BurgerButton/index.js";

const Header = (props) => {
  const {iconAriaLabel, hasFillIcon, iconName, url} = props

  const menuItems = [
    {
      label: 'Home',
      href: './',
    },
    {
      label: 'About Us',
      href: './about',
    },
    {
      label: 'Academics',
      href: './academics',
    },
    {
      label: 'Admission',
      href: './admission',
    },
    {
      label: 'Student Life',
      href: './student-life',
    },
    {
      label: 'Contact',
      href: './contact',
    },
  ]

  return (
    <header
      className='header'
      data-js-overlay-menu=""
    >
      <div className="header__promo">
        <div className="header__promo-inner">
          <a
            className="header__promo-link"
            href="./"
          >
            Admission is Open, Grab your seat now
            <Icon
              className='header__promo-icon'
              aria-label={iconAriaLabel}
              name={iconName}
              hasFill={hasFillIcon}
            />
          </a>

        </div>
      </div>
      <div className="header__body">
        <div className="header__body-inner">
          <Logo
            className="header__logo"
            loading="eager"
          />
          <dialog
            className="header__overlay-menu-dialog"
            data-js-overlay-menu-dialog=''
          >
            <nav className="header__menu">
              <ul className="header__menu-list">
                {menuItems.map(({label, href}, index) => (
                  <li
                    className='header__menu-item'
                    key={index}
                  >
                    <a
                      className={classNames('header__menu-link', {
                        'is-active': url === href.replace(/^\.\//, '/')
                          .replace(/\.html$/, '')
                          .replace(/index$/, ''),
                      })}
                      href={href}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </dialog>

          <BurgerButton
            className='header__burger-button visible-tablet'
            extraAttrs={{
              'data-js-overlay-menu-burger-button': ''
            }}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
