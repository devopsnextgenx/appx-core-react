import React from 'react';
import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/pageComponents/home/Home';
import Layout from './components/layout/Layout';
import Users from './components/pageComponents/users/Users';
import Products from './components/pageComponents/products/Products';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="users" element={<Users />} />
            <Route path="products" element={<Products />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
