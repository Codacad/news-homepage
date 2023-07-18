import React from 'react'
import Navbar from './components/Navbar'
import {Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import News from './components/News'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Category from './components/Category'
import './css/App.css'
const App = () => {
  return (
    <div className='app'> 
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/news" element={<News />} />
          <Route path="/popular" element={<Trending />} />
          <Route path="/trending" element={<Popular />} />
          <Route path="/category" element={<Category />} />
        </Routes>
    </div>
  )
}

export default App
