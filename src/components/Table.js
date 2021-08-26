import React from 'react'
import { useTable, useSortBy,usePagination } from 'react-table'
import {AiFillCaretUp, AiFillCaretDown} from 'react-icons/ai'
const Table = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        page, 
        pageOptions,
        gotoPage,
        nextPage,
        previousPage,
        // setPageSize,
        state: { pageIndex, pageSize},
      } = useTable(
        {
          columns,
          data, 
          initialState: { pageIndex: 0 , pageSize: 5},
        },
        useSortBy,
        usePagination
      )
    //   const firstPageRows = rows.slice(0, 5)
    return (
        <>
      <table {...getTableProps()} id='tbl'>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? < AiFillCaretUp />
                        :  <AiFillCaretDown />
                                                  : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(
            (row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')} </td>
                    )
                  })}
                </tr>
              )}
          )}
        </tbody>
      </table>
      <br />
      <div>Showing {pageIndex*pageSize + 1} to {(pageIndex*pageSize + pageSize) < rows.length ? (pageIndex*pageSize + pageSize) : rows.length}  of {rows.length} entries</div>
      <div className="pagination">
        <button onClick={() => previousPage()} 
          className={`prev ${pageIndex === 0 ? 'disabled' : ''}`}>
          {'Prev'}
        </button>{' '}
        {pageOptions.map((item, index) => (
            <button
              key={index}
              onClick={() => gotoPage(index)}
              className={`paginationItem ${pageIndex === item ? 'active' : null}`}
            >
              <span>{item+1}</span>
            </button>
          ))}
        <button onClick={() => nextPage()} 
         className={`next ${pageIndex === pageOptions.length-1 ? 'disabled' : ''}`}>
          {'Next'}
        </button>{' '}
      </div>

    </>
    )
}

export default Table
