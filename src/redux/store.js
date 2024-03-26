import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filter-slice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
  },
});
