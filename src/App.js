import "./App.css";
import { Routes, Route } from "react-router-dom";

import Products from "./pages/Products.js";
import Basket from "./pages/Basket.js";
import Posts from "./pages/Posts.js";
import ProductDetails from "./pages/ProductDetails";
import PageForm from "./pages/PageForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/details" element={<ProductDetails />} />
        <Route path="/form" element={<PageForm />} />
      </Routes>
    </div>
  );
}

export default App;