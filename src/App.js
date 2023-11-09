import { useState } from 'react';
import './App.css';
import Product from './Componants/Product';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Componants/Home';
import NewProduct from './Componants/NewProduct';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul className='nav nav-pills'>
            <li><Link to="/" className='btn btn-outline-info ms-1'>Home</Link></li>
            <li><Link to="/product" className='btn btn-outline-info ms-1'>Product</Link></li>
            <li><Link to="/newProduct" className='btn btn-outline-info ms-1'>New Product</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/newProduct' element={<NewProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
