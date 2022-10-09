import "./App.css";
import { Routes, Route } from "react-router-dom";

import Products from "./pages/Products.js";
import Basket from "./pages/Basket.js";
import Posts from "./pages/Posts.js";
import ProductDetails from "./pages/ProductDetails";
import PageForm from "./pages/PageForm";
import NotFound from "./pages/404";


import { products } from "./menuList";

import { useEffect, useDispatch } from "react";

function App() {
  // const dispatch = useDispatch()
  // const addProductList = (list) => dispatch(addProductList(list))

  // useEffect(() => {
  //   //TODO: data
  //   addProductList(products);
  // }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/details" element={<ProductDetails />} />
        <Route path="/form" element={<PageForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;