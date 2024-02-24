import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage';
import Protected from './features/auth/Components/Protected';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/auth/authSlice';
import { useEffect } from 'react';
import PageNotFound from './pages/404';
import OrderSuccess from './pages/OrderSuccess';
import UserOrderPage from './pages/UserOrderPage';
import UserProfilePage from './pages/UserProfilePage';
import { fetchLoggedInUserAsync } from './features/user/userSlice';
import LogOut from './features/auth/Components/LogOut';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import AdminHome from './pages/AdminHome';
import ProtectedAdmin from '../src/features/auth/Components/ProtectedAdmin'
import AdminProductDetailPage from './pages/AdminProductDetailPage';
import AdminProductFormPage from './pages/AdminProductFormPage';
import AdminOrdersPage from './pages/AdminOrdersPage';
import { fetchItemByUserIdAsync } from './features/Cart/cartSlice';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Protected ><Home /> </Protected>)
    // element: <Home/>
  },
  {
    path: "/admin",
    element: (<ProtectedAdmin ><AdminHome /> </ProtectedAdmin>)
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/signup',
    element: <SignUpPage />
  },
  {
    path: '/cart',
    element: (<Protected><CartPage /></Protected>)
  },
  {
    path: '/checkout',
    element: (<Protected><Checkout /></Protected>)
  },
  {
    path: '/product-detail/:id',
    element: (<Protected><ProductDetailPage /></Protected>)
  },
  {
    path: '/admin/product-detail/:id',
    element: (<ProtectedAdmin><AdminProductDetailPage /></ProtectedAdmin>)
  },
  {
    path: '/admin/product-form',
    element: (<ProtectedAdmin><AdminProductFormPage /></ProtectedAdmin>)
  },
  {
    path: '/admin/product-form/edit/:id',
    element: (<ProtectedAdmin><AdminProductFormPage /></ProtectedAdmin>)
  },
  {
    path: '/admin/orders',
    element: (<ProtectedAdmin><AdminOrdersPage /></ProtectedAdmin>)
  },
  {
    path: '/order-success/:id',
    element: (<Protected><OrderSuccess /></Protected>)
  },
  {
    path: '/orders',
    element: (<UserOrderPage/>)
  },
  {
    path: '/profile',
    element: (<UserProfilePage/>)
  },
  {
    path: '/logout',
    element: (<LogOut/>)
  },
  {
    path: '/forgot-password',
    element: (<ForgotPasswordPage/>)
  },
  {
    path: '*',
    element: (<PageNotFound/>)
  },

]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    if(user){
      dispatch(fetchItemByUserIdAsync(user.id));
      dispatch(fetchLoggedInUserAsync(user.id));
    }
  }, [dispatch, user]);

  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
