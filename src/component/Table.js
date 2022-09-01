import React from "react";
import { useSelector } from "react-redux";
import StudentTable from "./StudentTable";

const Table = () => {
  const data = useSelector((store) => store);

  const studentsTable = () =>
    data.map((item, i) => {
      return <StudentTable data={item} key={i} id={i}/>;
    });
  return (
    <div className="mt-5">
      <table className="table table-dark table-hover p-3">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Mark</th>
            <th scope="col">Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{studentsTable()}</tbody>
      </table>
    </div>
  );
};

export default Table;
