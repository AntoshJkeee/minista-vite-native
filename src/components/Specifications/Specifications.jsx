import './Specifications.scss'
import classNames from 'classnames'

export const Specifications = (props) => {
  const {
    items = [],
  } = props

  return (
    <div className="specifications">
      <dl className="specifications__list">
        {items.map(({ key, value, isWide }, idx) => (
          <div
            className={classNames('specifications__item', {
              'specifications__item--wide': isWide,
            })}
            key={idx}
          >
            <dt className="specifications__key">{key}</dt>
            <dd className="specifications__value">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
