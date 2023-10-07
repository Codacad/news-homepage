import React from 'react'
import Logo from '../assets/images/logo.svg'
import IconMenu from '../assets/images/icon-menu.svg';
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
const Navbar = ({showSidebar, handleShowSidebar}) => {
  console.log(showSidebar)
  return (
    <div className='navbar'>
      <nav>
        <Link to={'#'} className="logo"><img src={Logo} alt="" /></Link>
        <ul className='nav-list'>
          <li><Link to={'#'}>Home</Link></li>
          <li><Link to={'#'}>News</Link></li>
          <li><Link to={"#"}>Popular</Link></li>
          <li><Link to={'#'}>Trending</Link></li>
          <li><Link to={'#'}>Categories</Link></li>
        </ul>
        <Link onClick={handleShowSidebar} to="#" className="menu-icon"><img src={IconMenu} alt="" /></Link>
      </nav>
    </div>
  )
}

export default Navbar
