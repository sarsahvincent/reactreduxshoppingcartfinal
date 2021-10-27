import { createSlice } from "@reduxjs/toolkit";
import {productSFetch} from './index'

const initialState = {
  items: [],
  status: null,
  error: null,
  message: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productSFetch.pending]: (state) => {
      state.status = "pending";
    },
    [productSFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
      state.message= "items fetched success"
    },
    [productSFetch.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
