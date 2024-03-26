import { createSlice } from "@reduxjs/toolkit";

const filterProduct = createSlice({
  name: "filter-data",
  initialState: {
    dataAttribute: {},
  },
  reducers: {
    productFilter: (state, action) => {
      return {
        ...state,
        dataAttribute: {
          ...state.dataAttribute,
          [action.payload.name]: action.payload.value,
        },
      };
    },
  },
});

export default filterProduct.reducer;

export const { productFilter } = filterProduct.actions;
