import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/headers/Header'
import Search from './components/search/Search'
import Home from './components/home/Home'
import Catalog from './components/catalog/Catalog'
import Footer from './components/footer/Footer'
import Create from './components/car-create/Create'

function App() {
  return (
    <>
    <Header/>
    <Home/>
    <Search/>
    <Catalog/>
    <Create/>
    <Footer/>
    </>
  )
}

export default App
