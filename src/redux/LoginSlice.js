import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: "",
  products: [],
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.login = action.payload.name;
    },
    addElement: (state, action) => {
      state.products.push(action.payload.eleman);
    },
    deleteElement: (state, action) => {
      const newCard = state.products.filter((item) => {
        return item.id !== action.payload.deleteItem;
      });

      state.products = newCard;
    },
  },
});

export const { userLogin, addElement, deleteElement } = loginSlice.actions;

export default loginSlice.reducer;
