import { type } from "@testing-library/user-event/dist/type";
import { ADD_STUDENT } from "./actionTypes";

const initialValue = [
  {
    name: "Hari",
    mark: 456,
    phone: 9867873642,
  },
];

const StudentReducer = (state = initialValue, action) => {
  switch (action.type) {
    case type.ADD_STUDENT:
      return { ...state };

    default:
      return state;
  }
};

export default StudentReducer
