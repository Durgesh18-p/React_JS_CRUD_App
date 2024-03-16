import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
  name: "user",
  initialState: userList,
  reducers: {
    addUSer: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addUSer } = userSlice.actions;
export const { reducer: userReducer } = userSlice;
