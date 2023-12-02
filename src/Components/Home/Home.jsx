import React from 'react'
import './Home.css'

import Video from '../../Assets/seagolden.mp4'
import { AiOutlineSwapRight } from "react-icons/ai";


const Home = () => {
  return (
    <div className='Home'>
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
      </div>

    <div className="sectionText">
      <h1>Unlock Your Dream Travel Destinations With Us!</h1>
      <p>
        Discover World's most popular destinations and have the time of your life with your loved ones
      </p>
      <button className='btn flex'>
        GET STARTED <AiOutlineSwapRight className='icon'/>

      </button>
    </div>

    <div className="popularPlaces">
      <div className="content">
        <h3>Popular Places</h3>
        <div className="images flex">
          {/* x */}
        </div>
      </div>
    </div>

    </div>
  )
}

export default Home