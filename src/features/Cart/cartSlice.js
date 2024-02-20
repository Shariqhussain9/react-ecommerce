import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addToCart, fetchCount, fetchItemByUserId } from './cartAPI';

const initialState = {
  value: 0,
  status: 'idle',
  items: [],
};

export const addToCartAsync = createAsyncThunk(
  'counter/addToCart',
  async (item) => {
    const response = await addToCart(item);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchItemByUserIdAsync = createAsyncThunk(
  'counter/fetchItemByUserId',
  async (userId) => {
    const response = await fetchItemByUserId(userId);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.item.push(action.payload);
      })
      .addCase(fetchItemByUserIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItemByUserIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      });
  },
});

// export const { increment } = counterSlice.actions;


export const selectCount = (state) => state.counter.value;
export const selectItems = (state) => state.cart.items;

export default cartSlice.reducer;
