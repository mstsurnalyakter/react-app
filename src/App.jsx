import React from 'react'


import './App.css'

import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Blogs from './Pages/Blogs'
import Blog from './Pages/Blog'
import Error from './Pages/Error'
import Navbar from './Components/Navbar'
import User from './Pages/User'

function App() {


  return (
    <>
        <h1>Assalamu Aliakum</h1>
        <BrowserRouter >
          <Navbar />
          <Routes>
            <Route  path='/' element={<Home />}/>
            <Route path='/contact' element={<Contact />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/user' element={<User />} />
            <Route path='/blogs/:title' element={<Blog />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
