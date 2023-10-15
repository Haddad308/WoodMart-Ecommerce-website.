import React from 'react';
import Layout from './components/Layout/Layout.jsx';
import Products from './components/Products/Products.jsx';
import Brands from './components/Brands/Brands.jsx';
import Catogeries from './components/Catogeries/Catogeries.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';


const routers = createBrowserRouter([
  {path:"/",element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:"products",element:<Products/>},
    {path:"brands",element:<Brands/>},
    {path:"catogeries",element:<Catogeries/>},
    {path:"login",element:<Login/>},
    {path:"register",element:<Register/>},
    {path:"*",element:<NotFound/>},
  ]}
])



function App() {
  return <>
    <RouterProvider router={routers} ></RouterProvider>
  </>
}

export default App;
