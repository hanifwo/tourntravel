import React, { useState } from 'react'
import './Navbar.css'

import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";



const Navbar = () => {

  const[navBar, setNavbar] = useState("menu");

  const showNavbar = () => {
    setNavbar("menu showNavbar");
  }

  const removeNavbar = () => {
    setNavbar("menu");
  }





  return <div className='navBar'>
    <div className='logoDiv'>
    
    <span>AR<SiYourtraveldottv className='icon' />UND-Travel</span>
    </div>

    <div className={navBar}>
      <ul>
          <li className='navList'>
            Destinations
          </li>
      </ul>
      <ul>
          <li className='navList'>
            About Us
          </li>
      </ul>
      <ul>
          <li className='navList'>
            Testimonial
          </li>
      </ul>
      <ul>
          <li className='navList'>
            Gallery
          </li>
      </ul>
        <AiFillCloseCircle className='icon closeIcon'
        onClick={removeNavbar}/>
    </div>
    <button className="signUpBtn btn">Sign Up</button>
    <PiDotsNineBold className='icon menuIcon' 
    onClick={showNavbar}/>

  </div>
}

export default Navbar