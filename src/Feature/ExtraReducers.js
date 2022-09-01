import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// console.log(axios.interceptors);

// const cancel = axios.CancelToken;
// // console.log(cancel);
// const del = cancel.source();
// console.log(del.token);

export const FatchUserData = createAsyncThunk(
  "second/FatchUserData",
  async () => {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    ).catch((error)=>{
      if (axios.isCancel(error)) {
        console.log(error);
      }else{
        console.log(error.request.status);
      }
    })
    return response.data;
  }
);

const initialState = {
  userData: [],
};

const ExtraReducers = createSlice({
  name: "second",
  initialState,
  reducers: {},
  extraReducers: {
    [FatchUserData.pending]: () => {
      // console.log("pending");
    },
    [FatchUserData.fulfilled]: (state, action) => {
      state.userData = action.payload;
      // console.log("Fullfilled",action.payload);
    },
  },
});

export const {} = ExtraReducers.actions;

export default ExtraReducers.reducer;
