import React, { useState } from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './Components/WebPages/Home'
import Navbar from './Components/OneTime Component/Navbar'
import Footer from './Components/OneTime Component/Footer'
import SideMenu from './Components/OneTime Component/SideMenu'



const App = () => {

  const [colour, setColour] = useState("white")

  return (
    <div className='w-full min-h-screen bg-[#5a5858]'>

    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/menu" element={<SideMenu/>} />
    </Routes>
    
    <Footer/>

    </div>
  )
}

export default App