import React from 'react'
import './Portofolio.css'

import icon1 from '../../Assets/img/icon1.png'
import icon2 from '../../Assets/img/icon2.png'
import icon3 from '../../Assets/img/icon4.png'
import image from '../../Assets/img/img9.jpg'

const Portofolio = () => {
  return (
    <div className='portofolio section container'>
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading">
            <h3>Why Should You Choose Us</h3>
            <p>
              We have extensive knowledge and experience in the travel industry
            </p>
          </div>

          <div className="grid">
            <div className="singlePortofolio flex">
              <div className="iconDiv">
                <img src={icon1} alt="Icon image" />
              </div>
              <div className="infor">
                <h4>Safety and Support</h4>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, aspernatur quia obcaecati culpa officia sunt molestiae?
              </p>
              </div>
            </div>

            <div className="singlePortofolio flex">
              <div className="iconDiv">
                <img src={icon3} alt="Icon image" />
              </div>
              <div className="infor">
                <h4>Diverse range of Destinations</h4>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, aspernatur quia obcaecati culpa officia sunt molestiae?
              </p>
              </div>
            </div>

            <div className="singlePortofolio flex">
              <div className="iconDiv">
                <img src={icon2} alt="Icon image" />
              </div>
              <div className="infor">
                <h4>24/7 Customer Support</h4>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, aspernatur quia obcaecati culpa officia sunt molestiae?
              </p>
              </div> 
            </div>
          </div>
        </div>
        <div className="rightContent">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Portofolio