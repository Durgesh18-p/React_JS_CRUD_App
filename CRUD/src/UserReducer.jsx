import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
  name: "user",
  initialState: userList,
  reducers: {
    addUSer: (state, action) => {
      state.push(action.payload);
    },
    upateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const updatedUser = state.find((user) => user.id == id);
      if (updatedUser) {
        updatedUser.name = name;
        updatedUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      return state.filter((user) => user.id !== id);
    },
  },
});

export const { addUSer, upateUser, deleteUser } = userSlice.actions;
export const { reducer: userReducer } = userSlice;
