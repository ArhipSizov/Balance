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
        name: action.payload.name,
        age: action.payload.age,
        family: action.payload.family,
        key: action.payload.key,
        work: action.payload.work
      });
    },
  },
});

export const { addUser } = slice.actions;

export default slice.reducer;
