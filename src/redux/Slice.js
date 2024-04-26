import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  products: [],
  error: null,
};

export const fetchItems = createAsyncThunk("fetchItems", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");

  return response.data;
});

export const todoSlice = createSlice({
  name: "veri",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.loading = false;
      state.error = "fetch işlemi yapılırken hata oluştu";
    });
  },
});

export default todoSlice.reducer;
