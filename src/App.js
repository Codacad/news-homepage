import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import './css/App.css'
import Sidebar from './components/Sidebar'
const App = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const handleShowSidebar = () => {
    setShowSidebar(true)
  }
  return (
    <div className='app'> 
        <Navbar showSidebar={showSidebar} handleShowSidebar={handleShowSidebar}/>
        <Home />
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
    </div>
  )
}
export default App
