import { configureStore } from "@reduxjs/toolkit";
import ExtraReducers from "./ExtraReducers";
// import { legacy_createStore } from "redux";
import StudentSlice from "./studentReducer";

const store = configureStore({
    reducer:{
        student:StudentSlice,
        userData:ExtraReducers,
    }
});
// const store = legacy_createStore(StudentSlice);

export default store;
