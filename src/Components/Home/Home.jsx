import React from 'react'
import './Home.css'

import Video from '../../Assets/seagolden.mp4'


import image1 from '../../Assets/img/img1.jpg'
import image2 from '../../Assets/img/img2.jpg'
import image3 from '../../Assets/img/img3.jpg'
import image4 from '../../Assets/img/img4.jpg'


import { AiOutlineSwapRight } from "react-icons/ai";


const Home = () => {
  return (
    <div className='Home'>
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
      </div>

    <div className="sectionText">
      <h1>Visit Your Dream Travel Destinations With Us!</h1>
      <p>
        Discover World's most popular destinations and have the time of your life with your loved ones
      </p>
      <button className='btn flex'>
        GET STARTED <AiOutlineSwapRight className='icon'/>

      </button>
    </div>

    </div>
  )
}

export default Home