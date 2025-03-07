import './Badge.scss'
import classNames from 'classnames'
import { Icon } from "@/components";

export const Badge = (props) => {
  const {
    className,
    mode = '', // '' (default) | 'accent'
    isBig = false,
    children,
    iconName,
    hasFillIcon,
    iconAriaLabel
  } = props

  return (
    <div
      className={classNames(className, 'badge', {
        [`badge__${mode}`]: mode,
        'badge__big': isBig,
      })}
    >
      {iconName && (
        <Icon
          className='badge__icon'
          name={iconName}
          hasFill={hasFillIcon}
          ariaLabel={iconAriaLabel}
        />
      )}
      <span>{children}</span>
    </div>
  )
}
