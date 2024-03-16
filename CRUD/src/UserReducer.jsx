import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
  name: "user",
  initialState: userList,
  reducers: {},
});

export const { reducer: userReducer } = userSlice;
