import React from 'react'
import './Navbar.css'

import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";



const Navbar = () => {
  return <div className='navBar'>
    <div className='logoDiv'>
    <SiYourtraveldottv className='icon' />
    <span>AROUND-Travel</span>
    </div>

    <div className='menu'>
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
        <AiFillCloseCircle className='icon'/>
    </div>
    <button className="signUpBtn btn">Sign Up</button>
    <PiDotsNineBold className='icon' />

  </div>
}

export default Navbar