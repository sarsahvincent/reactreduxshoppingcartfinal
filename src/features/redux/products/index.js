import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getProducts } from "../endpoints";
import * as actions from "./actons";

// FETCHING PROFDUCTS
export const productSFetch = createAsyncThunk(
  actions.GET_PRODUCTS,
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      return response?.data;
    } catch (err) {
      return rejectWithValue("an error occured trying to acess this link");
    }
  }
);
