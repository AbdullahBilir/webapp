import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Slice";
import LoginSlice from "./LoginSlice";

export default configureStore({
  reducer: {
    db: todoReducer,
    login: LoginSlice,
  },
});
