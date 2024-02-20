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

]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    if(user){
      dispatch(fetchItemByUserIdAsync(user.id));
    }
  }, [dispatch, user]);

  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
