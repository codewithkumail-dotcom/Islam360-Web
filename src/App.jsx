import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Ads from './components/Ads'
import MainBody from './components/MainBody'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from "../src/components/PageFooter"

function App() {
  
  

  return (
    <>
     <Navbar/>
    <Routes>
      <Route path='/home' element={<MainBody/>}/>
    
      </Routes>
      <Footer/>
    </>
    
  )
}

export default App
