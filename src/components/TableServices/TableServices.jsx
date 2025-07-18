import './TableServices.scss'

const TableServices = (props) => {
  const {
    className,
    titleTable,
    rowsServices,
  } = props

  return (
    <div className="table-services">
      <table className={className}>
        <thead>
          <tr>
            <th
              colSpan={2}
            >
              {titleTable}
            </th>
          </tr>
        </thead>
        <tbody>
          {rowsServices.map(({width, cells}, index) => (
            <tr key={index}>
              {cells.map((cell, cellIndex) => (
                <td
                  width={width}
                  key={cellIndex}
                >
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

export default TableServices