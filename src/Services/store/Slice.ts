import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {
    user: [],
  },
  reducers: {
    addUser(state: any, action) {
      state.user.push({
        id: new Date().toISOString(),
        email: action.payload.email,
        password: action.payload.pasvord,
      });
    },
  },
});

export const { addUser } = slice.actions;

export default slice.reducer;
