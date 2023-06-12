import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './homepage';
import AddProduct from './addproduct';
 
import {  BrowserRouter as Router, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

      <Router>
      <Routes>
     <Route path='/' exact element={<HomePage />}/>
     <Route path='/addproduct' element={<AddProduct/>} />
     <Route path='/add-product' element={<AddProduct/>} />
     <Route path='*' element={<h1>Invalid Page</h1>} />
      
      </Routes>
      </Router>
  
  </React.StrictMode>
  
);


