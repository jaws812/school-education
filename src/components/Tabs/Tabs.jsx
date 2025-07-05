import './Tabs.scss'
import classNames from 'classnames'
import getIdFromTitle from "@/utils/getIdFromTitle.js";
import TabsNavigation
  from "@/components/Tabs/components/TabsNavigation/index.js";

const Tabs = (props) => {
  const {
    className,
    title,
    items = [],
  } = props

  return (
    <div
      className={classNames(className, 'tabs')}
      data-js-tabs=''
    >
      <div className="tabs__body">
        {items.map((item, index) => {
          const {title, children, isActive} = item

          const titleFormatted = getIdFromTitle(title)
          const buttonId = `${titleFormatted}-tab`
          const contentId = `${titleFormatted}-tabpanel`

          return (
            <div
              className={classNames('tabs__content', {
                'is-active': isActive,
              })}
              id={contentId}
              aria-labelledby={buttonId}
              tabIndex={0}
              data-js-tabs-content=''
              key={index}
            >
              {children}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Tabs