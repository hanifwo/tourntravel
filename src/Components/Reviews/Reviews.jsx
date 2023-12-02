import React from 'react'
import './Reviews.css'


import { AiFillStar } from "react-icons/ai";


import Image from '../../Assets/img/client.jpg'
import Image2 from '../../Assets/img/client2.jpg'
import Image3 from '../../Assets/img/img10.jpg'



const Reviews = () => {
  return (
    <div className='review section container'>
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText">FROM OUR CLIENTS</span>
          <h3>Real Travel History From Our Beloved Clients</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, quam repudiandae suscipit nemo natus magni illo vel molestiae recusandae libero impedit consectetur?
          </p>

          <span className="stars flex">
          <AiFillStar className='icon' />
          <AiFillStar className='icon' />
          <AiFillStar className='icon' />
          <AiFillStar className='icon' />
          <AiFillStar className='icon' />
          </span>

          <div className="clientsImages flex">
            <img src={Image} alt="Client Image" />
            <img src={Image2} alt="Client Image" />
            <img src={Image} alt="Client Image" />
            <img src={Image2} alt="Client Image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews