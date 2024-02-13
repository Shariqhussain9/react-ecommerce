import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts, fetchAllProductsByFilter, fetchBrands, fetchCategories, fetchProductByID } from './ProductAPI';

const initialState = {
  products: [],
  brands: [],
  categories: [],
  status: 'idle',
  totalItems: 0,
  selectedProduct: null
};

export const fetchAllProductsAsync = createAsyncThunk(
  'Products/fetchAllProducts',
  async () => {
    const response = await fetchAllProducts();
    return response.data;
  }
);

export const fetchProductByIdAsync = createAsyncThunk(
  'Products/fetchProductByID',
  async (id) => {
    const response = await fetchProductByID(id);
    return response.data;
  }
);

export const fetchBrandsAsync = createAsyncThunk(
  'Products/fetchBrands',
  async () => {
    const response = await fetchBrands();
    return response.data;
  }
);

export const fetchCategoriesAsync = createAsyncThunk(
  'Products/fetchCategories',
  async () => {
    const response = await fetchCategories();
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
      })
      .addCase(fetchBrandsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBrandsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.brands = action.payload;
      })
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.categories = action.payload;
      })
      .addCase(fetchProductByIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.selectedProduct = action.payload[0];
      });
  },
});

export const { increment } = productsSlice.actions;


export const selectAllProducts = (state) => state.product.products;
export const selectTotalItems = (state) => state.product.totalItems;
export const selectBrands = (state) => state.product.brands;
export const selectCategories = (state) => state.product.categories;
export const selectProductById = (state) => state.product.selectedProduct;

export default productsSlice.reducer;
