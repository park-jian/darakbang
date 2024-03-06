import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import NotFound from './pages/NotFound.jsx';
import NewProduct from './pages/NewProduct.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import MyCart from './pages/MyCart.jsx';
import Home from './pages/Home.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Support from './pages/Support.jsx';
import MyPage from './pages/MyPage.jsx';
import Signup from './pages/Signup.jsx';
import Signin from './pages/Signin.jsx';
import PasswordSearch from './pages/PasswordSearch.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Map from './pages/Map.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {index: true, path: '/', element: <Home />},
      {path: 'products', element: <Home />},
      {path: 'products/new', element: <NewProduct/>},
      {path: 'products/:id', element: <ProductDetail/>},
      {path: 'signin', element: <Signin/>},
      {path: 'signup', element: <Signup/>},
      {path: 'mypage', element: <MyPage/>},
      {path: 'carts', element: <MyCart/>},
      {path: 'support', element: <Support/>},
      {path: 'dashboard', element: <Dashboard/>},
      {path: 'passwordsearch', element: <PasswordSearch/>},
      {path: 'map', element: <Map/>}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);