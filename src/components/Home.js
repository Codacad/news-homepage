import React from 'react'
import ImageDesktop from '../assets/images/image-web-3-desktop.jpg'
import ImageMobile from '../assets/images/image-web-3-mobile.jpg'
import Retro from '../assets/images/image-retro-pcs.jpg'
import Laptop  from '../assets/images/image-top-laptops.jpg'
import Gaming from '../assets/images/image-gaming-growth.jpg'
import { Link } from 'react-router-dom'
import  Button  from '@mui/material/Button'
import '../css/Home.css'
const Home = () => {
  return (
    <div className='home'>
      <div className="main-section">
        <div className="main-section-content">
          <div className="img-section">
            <div className="img-desktop">
              <img src={ImageDesktop} alt="" />
            </div>
            <div className="img-mobile">
              {/* <img src={ImageMobile} alt="" /> */}
            </div>
          </div>
          <div className="content-section">
            <div className="heading">
              <h1>The Bright Future of Web 3.0?</h1>
            </div>
            <div className="read">
              <p>
                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                But is it really fulfilling its promise?
              </p>
              <Link to="#">Read More</Link>
            </div>
          </div>
        </div>
        <div className="news-side">
          <h2>News</h2>
          <div className="news-one">
            <h4>Hydrogen VS Electric Cars</h4>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <div className="news-two">
            <h4>The Downsides of AI Artistrys</h4>
            <p>What are the possible adverse effects of on-demand AI image generation??</p>
          </div>
          <div className="news-three">
            <h4>Is VC Funding Drying Up?</h4>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </div>
        </div>        
      </div>  
      <div className="one-two-three">
          <div className="one">
            <div className="one-img"><img src={Retro} alt="" /></div>
            <div className="one-text-content">
              <h1>01</h1>
              <Link to="#">Reviving Retro PCs</Link>
              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>
          <div className="two">
            <div className="two-img"><img src={Laptop} alt="" /></div>
            <div className="two-text-content">
              <h1>02</h1>
              <Link to="#">Top 10 Laptops of 2022</Link>
              <p>Our best picks for various needs and budgets.</p>
            </div>
          </div>
          <div className="three">
            <div className="three-img"><img src={Gaming} alt="" /></div>
            <div className="three-text-content">
              <h1>03</h1>
              <Link to="#">The Growth of Gaming</Link>
              <p>How the pandemic has sparked fresh opportunities.?</p>
            </div>
          </div>
      </div>    
    </div>
  )
}

export default Home
