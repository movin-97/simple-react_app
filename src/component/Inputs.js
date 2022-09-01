import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addStudent } from "../Feature/studentReducer";

const Inputs = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [mark, setMark] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addStudent({
        id:uuidv4(),
        name: name,
        mark: mark,
        phone: phone,
      })
    );
    setName('');
    setMark('');
    setPhone('');
  };
  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit}>
        <div className="row align-items-center">
          <div className="mb-3 col-md-3">
            <label htmlFor="userName" className="form-label">
              Student Name
            </label>
            <input
              type="text"
              className="form-control"
              id="userName"
              placeholder="Student Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3 col-md-3">
            <label htmlFor="userMark" className="form-label">
              Student Mark
            </label>
            <input
              type="number"
              className="form-control"
              id="userMark"
              placeholder="Student Mark"
              value={mark}
              onChange={(e) => setMark(e.target.value)}
            />
          </div>
          <div className="mb-3 col-md-4">
            <label htmlFor="userPhone" className="form-label">
              Student Phone
            </label>
            <input
              type="number"
              className="form-control"
              id="userPhone"
              placeholder="Student Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mt-3 col-md-2">
            <button type="submit" className="btn btn-primary">
              Add Student
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Inputs;
