import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/headers/Header'
import Search from './components/search/Search'

function App() {
  return (
    <>
    <Header/>
    <Search/>
    </>
  )
}

export default App
