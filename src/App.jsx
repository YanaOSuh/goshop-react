import React, { useEffect, useState } from 'react';
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
import Modal from './components/Modal/Modal';
import Content from './components/Modal/Content';
import ClothesItem from './components/ClothesItem';
import Navbar from './components/Navbar/Navbar';


function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const modalTimer = setTimeout(() => setModalOpen(true),7000);
    return () => clearTimeout(modalTimer)
  }, [])
  
  return <Router>
    <div>
      {isModalOpen &&
      <Modal setModalOpen={setModalOpen} >
        <Content setModalOpen={setModalOpen} />
      </Modal>
      }
    </div>
    <Navbar />
    <Routes>
      <Route path='/' element = {<Home />}/>
      <Route path='/catalog' element = {<Catalog />} />
      <Route path='/sale' element = {<Sale />} />
      <Route path='/contact' element = {<Contact />} />
      <Route path='/about/:title' element={<ClothesItem />} />
    </Routes>
    </Router>
}

export default App
