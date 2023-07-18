import React from 'react'
import Logo from '../assets/images/logo.svg'
import IconMenu from '../assets/images/icon-menu.svg';
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <a href="#" className="logo"><img src={Logo} alt="" /></a>
        <ul className='nav-list'>
          <li><Link to="/">Home</Link></li>
          <li><Link to='/news'>News</Link></li>
          <li><Link to="/popular">Popular</Link></li>
          <li><Link to="/trending">Trending</Link></li>
          <li><Link to="/category">Categories</Link></li>
        </ul>
        <a href="#" className="menu-icon"><img src={IconMenu} alt="" /></a>
      </nav>
    </div>
  )
}

export default Navbar
