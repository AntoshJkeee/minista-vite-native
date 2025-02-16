import './Tabs.scss'
import cn from 'classnames'
import getTabsElementsIdsFromTitle from './utils/getTabsElementsIdsFromTitle'
import TabsNavigation from './components/TabsNavigation'

const Tabs = (props) => {
  const {
    className,
    title,
    items = [],
    navigationTargetElementId = null,
  } = props

  return (
    <div
      className={cn(className, 'tabs')}
      data-js-tabs={JSON.stringify({
        navigationTargetElementId,
      })}
    >
      {!navigationTargetElementId && <TabsNavigation title={title} items={items} />}

      <div className="tabs__body">
        {items.map((item, idx) => {
          const {
            title,
            children,
            isActive,
          } = item

          const { buttonId, contentId } = getTabsElementsIdsFromTitle(title)

          return (
            <div
              className={cn('tabs__content', {
                'is-active': isActive,
              })}
              id={contentId}
              aria-labelledby={buttonId}
              tabIndex={0}
              data-js-tabs-content=""
              key={idx}
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
