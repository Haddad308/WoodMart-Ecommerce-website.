import React, { useContext, useEffect } from 'react';
import Layout from './components/Layout/Layout.jsx';
import Products from './components/Products/Products.jsx';
import Brands from './components/Brands/Brands.jsx';
import Catogeries from './components/Catogeries/Catogeries.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import { tokenContext } from './context/tokenContext.js';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
<ProtectedRoutes></ProtectedRoutes>

const routers = createBrowserRouter([
  {
    path: "/", element: <Layout />, children: [
      { index: true, element: <ProtectedRoutes> <Home /> </ProtectedRoutes> },
      { path: "products", element: <ProtectedRoutes> <Products /> </ProtectedRoutes> },
      { path: "brands", element: <ProtectedRoutes> <Brands /> </ProtectedRoutes> },
      { path: "catogeries", element: <ProtectedRoutes> <Catogeries /> </ProtectedRoutes> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "details/:id", element: <ProductDetails /> },
      { path: "*", element: <NotFound /> },
    ]
  }
])



function App() {

  // check if token is exists in localStorage. 
  let { setToken } = useContext(tokenContext);
  useEffect(() => {
    if (localStorage.getItem("userToken")) setToken(localStorage.getItem("userToken"));
  })


  return <>
    <RouterProvider router={routers} ></RouterProvider>
  </>
}

export default App;
