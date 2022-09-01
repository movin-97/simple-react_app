import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { delStudent, updataStudent } from "../Feature/studentReducer";

const StudentTable = ({ data, id }) => {
  const dispatch = useDispatch();

  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(data.name);
  const [mark, setMark] = useState(data.mark);
  const [phone, setPhone] = useState(data.phone);
  return (
    <>
      <tr>
        <td>
          {editable ? (
            <input
              type="text"
              className="form-control"
              id="userName"
              placeholder="Student Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <p>{data.name}</p>
          )}
        </td>
        <td>
          {editable ? (
            <input
              type="number"
              className="form-control"
              id="userMark"
              placeholder="Student Mark"
              value={mark}
              onChange={(e) => setMark(e.target.value)}
            />
          ) : (
            <p>{data.mark}</p>
          )}
        </td>
        <td>
          {editable ? (
            <input
              type="number"
              className="form-control"
              id="userPhone"
              placeholder="Student Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          ) : (
            <p>{data.phone}</p>
          )}
        </td>
        <td>
          <div className="d-flex justify-content-around">
            <button
              className="btn btn-info "
              onClick={() => {
                dispatch(updataStudent({ ...data, name, mark, phone }));
                setEditable(!editable);
              }}
            >
              {editable ? "Update" : "Edit"}
            </button>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(delStudent(id))}
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default StudentTable;
