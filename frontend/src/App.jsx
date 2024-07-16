import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'

function App() {
 
  return (
    <div >
     <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    
    </div>
  )
}

export default App
