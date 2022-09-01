import React, { useMemo } from "react";
import { Columns } from "./columns";
import MOCK_DATA from "./MOCK_DATA.json";
import { useTable, useGlobalFilter, useSortBy } from "react-table";
import SearchInput from "./SearchInput";

const BasicTable = () => {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable({ columns, data }, useGlobalFilter, useSortBy);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state,
    setGlobalFilter,
    prepareRow,
  } = tableInstance;

  const { globalFilter } = state;

  return (
    <div>
      <SearchInput filter={globalFilter} setFilter={setGlobalFilter} />
      <table className="table table-hover">
        <thead {...getTableProps}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;
