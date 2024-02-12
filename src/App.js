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

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home />)
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
    element: <CartPage />
  }
]);

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
