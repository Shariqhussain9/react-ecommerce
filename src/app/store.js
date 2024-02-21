import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/Products/ProductSlice';
import authReducer from '../features/auth/authSlice';
import cartReducer from '../features/Cart/cartSlice';
import orderReducer from '../features/order/orderSlice'
export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer
  },
});
