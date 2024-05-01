import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.login = action.payload.name;
    },
  },
});

export const { userLogin } = loginSlice.actions;

export default loginSlice.reducer;
