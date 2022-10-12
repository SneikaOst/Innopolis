import "./App.css";
import { Routes, Route } from "react-router-dom";

import Products from "./pages/Products.js";
import Basket from "./pages/Basket.js";
import ProductDetails from "./pages/ProductDetails";
import PageForm from "./pages/PageForm";
import NotFound from "./pages/404";

import { useEffect } from 'react'
import { products } from "./menuList";
import { useDispatch } from 'react-redux'
import { addProductListAction } from './store/reducers/productStore'


function App() {
  const dispatch = useDispatch()
  const addProductList = (list) => dispatch(addProductListAction(list))

  useEffect(() => { 
    // TODO: data fetching
    addProductList(products);
  }, [])


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/details/:productId" element={<ProductDetails />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/form" element={<PageForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;