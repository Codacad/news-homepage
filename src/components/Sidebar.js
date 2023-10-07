import { Link } from '@mui/material'
import React from 'react'
import Close from '../assets/images/icon-menu-close.svg'
import '../css/Sidebar.css'
const Sidebar = ({showSidebar, setShowSidebar}) => {
  window.onclick = (e) => {
    e.target.classList.contains('sidebar-wrapper') ? setShowSidebar(false) : ""
  }
  return (
    <>
      <div className={showSidebar ? "sidebar-wrapper show-sidebar-wrapper" : "sidebar-wrapper"}>
        <div className={showSidebar ? "sidebar show-sidebar" : "sidebar"}>
          <div className="header">
            <img onClick={() => setShowSidebar(false)} className='close' src={Close} alt="" />
          </div>
          <ul>
            <li><Link to={"#"}>Home</Link></li> 
            <li><Link to={"#"}>News</Link></li> 
            <li><Link to={"#"}>Popular</Link></li> 
            <li><Link to={"#"}>Trending</Link></li> 
            <li><Link to={"#"}>Categories</Link></li> 
          </ul>
        </div>
      </div> 
    </>
  )
}

export default Sidebar
