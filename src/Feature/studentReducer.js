import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Hari",
    mark: 453,
    phone: 9765467984,
  },
  {
    id: 2,
    name: "Mani",
    mark: 233,
    phone: 9874872725,
  },
];

const StudentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, { payload }) => {
      state.push(payload);
    },
    delStudent: (state, { payload }) => {
      return (state = state.filter((item, id) => id !== payload));
    },
    updataStudent: (state, { payload }) => {
      state.map((item) => {
        if (item.id === payload.id) {
          item.name = payload.name;
          item.mark = payload.mark;
          item.phone = payload.phone;
        }
      });
    },
  },
});
export const { addStudent, delStudent, updataStudent } = StudentSlice.actions;
export default StudentSlice.reducer;
