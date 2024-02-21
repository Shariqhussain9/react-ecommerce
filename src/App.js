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
import { fetchItemByUserIdAsync } from './features/Cart/cartSlice';
import PageNotFound from './pages/404';
import OrderSuccess from './pages/OrderSuccess';
import UserOrder from './features/user/components/userOrder';
import UserProfile from './features/user/components/userProfile';
import UserOrderPage from './pages/UserOrderPage';
import UserProfilePage from './pages/UserProfilePage';
import { fetchLoggedInUserAsync } from './features/user/userSlice';
import LogOut from './features/auth/Components/LogOut';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Protected ><Home /> </Protected>)
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
      // dispatch(fetchItemByUserIdAsync(user.id));
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
