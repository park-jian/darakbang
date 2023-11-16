import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NotFound from './pages/NotFound';
import AllProducts from './pages/AllProducts';
import NewProduct from './pages/NewProduct';
import ProductDetail from './pages/ProductDetail';
import MyCart from './pages/MyCart';
import Home from './pages/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Support from './pages/Support';
import MyPage from './pages/MyPage';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {index: true, path: '/', element: <Home />},
      {path: 'products', element: <AllProducts />},
      {path: 'products/new', element: <NewProduct/>},
      {path: 'products/:id', element: <ProductDetail/>},
      {path: 'signin', element: <Signin/>},
      {path: 'signup', element: <Signup/>},
      {path: 'mypage', element: <MyPage/>},
      {path: 'carts', element: <MyCart/>},
      {path: 'support', element: <Support/>}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);