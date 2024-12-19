// import { useState } from 'react'
import { FaBeer } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';

import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner';
import Categorias from './components/Categorias/Categorias';

function App() {


  return (
    <>
      <Header />
      <Banner />
      <Categorias />
    </>
  )
}

export default App
