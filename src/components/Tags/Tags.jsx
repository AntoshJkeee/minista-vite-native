import './Tags.scss'

const Tags = (props) => {
  const {
    items = [],
  } = props

  return (
    <div className="tags">
      <ul className="tags__list">
        {items.map((tag, idx) => (
          <li className="tags__item" key={idx}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tags
