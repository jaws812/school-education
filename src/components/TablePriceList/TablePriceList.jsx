import './TablePriceList.scss'
import classNames from 'classnames'

const TablePriceList = (props) => {
  const {
    className,
    headCells = [],
    rows = [],
  } = props

  return (
    <div className="table-price-list">
      <table className={className}>
        {headCells.length > 0 && (
          <thead>
            <tr>
              {headCells.map(({children, width}, index) => (
                <th
                  width={width}
                  key={index}
                >
                  {children}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map(({cells}, index) => (
            <tr key={index}>
              {cells.map((cell, cellIndex) => (
                <td key={cellIndex}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TablePriceList