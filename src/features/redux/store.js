import { configureStore } from "@reduxjs/toolkit";
import { productSFetch } from "./products/index";
import { productsApi } from "./products/productsApi";
import productSlice from "./products/productsSlice";
import cartResource, { getTotals } from "./products/cartSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartResource,
    [productsApi.reducerPath]: productsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productSFetch());
store.dispatch(getTotals());

export default store;
