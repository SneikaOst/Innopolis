import './App.css';
import { Routes, Route } from 'react-router-dom';

import Products from './pages/Products.js'
import Basket from './pages/Basket.js'
import Posts from './pages/Posts.js'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/posts' element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;