import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Sale from './components/Sale/Sale';
import Contact from './components/Contact';
import Catalog from './components/Catalog';
import Home from './components/Hero/Home';
import ClothesItem from './components/CatalogItems/ClothesItem';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import Wishlist from './components/Wishlist/Wishlist';
import ModalController from './components/Modal/ModalController';


function App() {
  
  return <Router>
    <div>
      <ModalController />
    </div>
    <Navbar />
    <Routes>
      <Route path='/' element = {<Home />}/>
      <Route path='/catalog' element = {<Catalog />} />
      <Route path='/sale' element = {<Sale />} />
      <Route path='/contact' element = {<Contact />} />
      <Route path='/product/:id' element={<ClothesItem />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
    </Router>
}

export default App
