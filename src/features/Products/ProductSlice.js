import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts, fetchAllProductsByFilter } from './ProductAPI';

const initialState = {
  products: [],
  status: 'idle',
  totalItems: 30
};

export const fetchAllProductsAsync = createAsyncThunk(
  'Products/fetchAllProducts',
  async () => {
    const response = await fetchAllProducts();
    return response.data;
  }
);

export const fetchAllProductsByFilterAsync = createAsyncThunk(
  'Products/fetchAllProductsByFilter',
  async ({filter, sort, pagination}) => {
    const response = await fetchAllProductsByFilter(filter, sort, pagination);
    return response.data;
  }
);

export const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchAllProductsByFilterAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsByFilterAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload.products.data;
        state.totalItems = action.payload.totalItems;
      });
  },
});

export const { increment } = productsSlice.actions;


export const selectAllProducts = (state) => state.product.products;
export const selectTotalItems = (state) => state.product.totalItems;

export default productsSlice.reducer;
