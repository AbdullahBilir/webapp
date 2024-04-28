import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

const initialState = {
  loading: false,
  products: [],
  error: null,
  category: [],
  filterCategory: [],
};

export const fetchItems = createAsyncThunk("fetchItems", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

export const fetchCategory = createAsyncThunk("fetchCategory", async () => {
  const response = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );
  return response.data;
});

export const getCategory = createAsyncThunk("getCategory", async (value) => {
  const response = await axios.get(
    `https://fakestoreapi.com/products/category/${value}`
  );
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

    builder.addCase(fetchCategory.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.category = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = "fetch işlemi yapılırken hata oluştu";
    });

    builder.addCase(getCategory.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
    builder.addCase(getCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = "fetch işlemi yapılırken hata oluştu";
    });
  },
});

export default todoSlice.reducer;
