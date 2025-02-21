import './Table.scss'

export const Table = (props) => {
  const {
    className,
    headCells = [],
    rows = [],
  } = props

  return (
    <table className={className}>
      {headCells.length > 0 && (
        <thead>
          <tr>
            {headCells.map(({ children, width }, idx) => (
              <th width={width} key={idx}>
                {children}
              </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map(({ cells }, idx) => (
          <tr key={idx}>
            {cells.map((cell, cellIndex) => (
              <td key={cellIndex}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
