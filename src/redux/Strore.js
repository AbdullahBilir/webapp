import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Slice";

export default configureStore({
  reducer: {
    db: todoReducer,
  },
});
