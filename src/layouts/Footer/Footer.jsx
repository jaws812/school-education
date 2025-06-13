import './Footer.scss'
import Icon from "@/components/Icon/index.js";
import Socials from "@/components/Socials/index.js";
import LogoFooter from "@/components/LogoFooter/index.js";

const Footer = () => {
  const menuItems = [
    {
      title: 'Home',
      links: ['Features', 'Our Testimonials', 'FAQ'],
    },
    {
      title: 'About Us',
      links: ['Our Mission', 'Our Vission', 'Awards and Recognitions', 'History', 'Teachers'],
    },
    {
      title: 'Academics',
      links: ['Special Features', 'Gallery'],
    },
    {
      title: 'Contact Us',
      links: ['Information', 'Map & Direction'],
    },
  ]

  const extraLinks = ['Terms of Service', 'Privacy Policy', 'Cookie Policy']

  const socialsLinks = [
    {
      label: 'Facebook',
      iconName: 'facebook',
    },
    {
      label: 'Twitter',
      iconName: 'twitter',
    },
    {
      label: 'LinkedIn',
      iconName: 'linked-in',
    },
  ]

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__body">
          <div className="footer__info">
            <header className="footer__header">
              <LogoFooter
                className="footer__logo"
              />
              <div className="footer__description">
                <p>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
              </div>
            </header>
            <div className="footer__actions">
              <div className="footer__action">
                <a
                  className="footer__action-wrapper-link"
                  href="mailto:hello@littlelearners.com"
                >
                  <Icon
                    className='footer__action-icon'
                    ariaLabel='Email'
                    name='email'
                    hasFill
                  />
                </a>

                <a
                  className="footer__action-link"
                  href="mailto:hello@littlelearners.com"
                >
                  hello@littlelearners.com
                </a>
              </div>
              <div className="footer__action">
                <a
                  className="footer__action-wrapper-link"
                  href="tel:9191813232309"
                >
                  <Icon
                    className='footer__action-icon'
                    ariaLabel='Telephone'
                    name='telephone'
                    hasFill
                  />
                </a>

                <a
                  className="footer__action-link"
                  href="tel:9191813232309"
                >
                  +91 91813 23 2309
                </a>
              </div>
              <div className="footer__action">
                <a
                  className="footer__action-wrapper-link"
                  href="./"
                >
                  <Icon
                    className='footer__action-icon'
                    ariaLabel='Map'
                    name='map'
                    hasFill
                  />
                </a>
                <a
                  className="footer__action-link"
                  href="./"
                >
                  Somewhere in the World
                </a>
              </div>
            </div>
          </div>
          <div className="footer__menu">
            {menuItems.map(({title, links}, index) => (
              <div
                className="footer__menu-column"
                key={index}
              >
                <a
                  className="footer__menu-title"
                  href="./"
                >
                  {title}
                </a>
                {links?.length > 0 && (
                  <ul className="footer__menu-list">
                    {links.map((link, index) => (
                      <li
                        className="footem__menu-item"
                        key={index}
                      >
                        <a
                          className="footer__menu-link"
                          href="./"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

              </div>
            ))}
          </div>
        </div>
        <div className="footer__extra">
          <div className="footer__extra-wrapper">
            <div className="footer__extra-links">
              {extraLinks.map((link, index) => (
                <a
                  className="footer__extra-link"
                  href="./"
                  key={index}
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="footer__extra-soc1als">
              {socialsLinks.length > 0 && (
                <Socials
                  className='footer__soc1als'
                  links={socialsLinks}
                />
              )}
            </div>
          </div>
          <p className="footer__copyright">
            Copyright © [
            <time dateTime='2023'>2023</time>
            ] Little Learners Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
