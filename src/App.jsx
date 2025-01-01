import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Ads from './components/Ads'
import MainBody from './components/MainBody'
import Footer from './components/PageFooter'

function App() {
  
  

  return (
    <>
      <Navbar/>
      <Ads/>
      <MainBody/>
      <Footer/>
    </>
  )
}

export default App
