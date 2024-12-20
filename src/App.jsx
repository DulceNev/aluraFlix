// import { useState } from 'react'
import { FaBeer } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';

import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner';
import Categoria from './components/Categoria/Categoria';
import Footer from './components/Footer/Footer';


function App() {


  return (
    <>
      <Header />
      <Banner />
      <Categoria />
      <Footer />
    </>
  )
}

export default App
