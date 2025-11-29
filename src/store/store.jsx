import { configureStore } from "@reduxjs/toolkit";
import StoreReducer from "./StoreItems/Studio";

const store = configureStore({
  reducer: { studio: StoreReducer },
});

export default store;
