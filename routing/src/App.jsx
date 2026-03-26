import React from 'react'
import './app.css'
import Navbar from './Component/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Course from './pages/course'
import Codex from './pages/Codex'
import Footer from './pages/Footer'
const App = () => {
  return (
    <div className='bg-black min-h-screen flex flex-col'>
      <Navbar/>
      
      <div className='flex-grow'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/course' element={<Course/>}>
            <Route path='codex' element={<Codex/>}/>
          </Route>
          
        </Routes>
      </div>

      <Footer/>
    </div>
  )
}

export default App
