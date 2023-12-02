import React from 'react'
import './Subscribe.css'


import image from '../../Assets/img/calling1.jpg'

const Subscribe = () => {
  return (
    <div className='subscribe section container'>
      <div className="secContainer grid">
        <img src={image} alt="Div Image" />

        <div className="textDiv">
          <h4>Best Way to Start Your Journey!</h4>
          <p>
            We offer personalized itineraries tailored to individual prefrences and intrerests
          </p>
          <button className="btn">Start Here</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe