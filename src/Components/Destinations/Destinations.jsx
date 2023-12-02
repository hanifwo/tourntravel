import React from 'react'
import './Destinations.css'



import { MdLocationPin } from "react-icons/md";
import { BsCreditCardFill } from "react-icons/bs";
import { BsCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";



import image1 from "../../Assets/img/img2.jpg"
import image2 from "../../Assets/img/img1.jpg"
import image3 from "../../Assets/img/img3.jpg"
import image4 from "../../Assets/img/img4.jpg"
import image5 from "../../Assets/img/img5.jpg"
import image6 from "../../Assets/img/img6.jpg"
import image7 from "../../Assets/img/img7.jpg"
import image8 from "../../Assets/img/img8.jpg"



const destinations = 
[
  {
    id: 1,
    img: image1,
    name: 'Matterhorn Mountain',
    location: 'SWitzerland',
    rating: 4.6,
  },
  {
    id: 2,
    img: image2,
    name: 'Swiss Mountain',
    location: 'SWitzerland',
    rating: 4.5,
  },
  {
    id: 3,
    img: image3,
    name: 'Venice',
    location: 'Italy',
    rating: 4.7,
  },
  {
    id: 4,
    img: image4,
    name: 'Bali Island',
    location: 'Indonesia',
    rating: 4.9,
  },
  {
    id: 5,
    img: image5,
    name: 'Edinburgh Castle',
    location: 'United Kingdom',
    rating: 4.3,
  },
  {
    id: 6,
    img: image6,
    name: 'Malidives Island',
    location: 'Maldives',
    rating: 4.8,
  },
  {
    id: 7,
    img: image7,
    name: 'Hallstatt Lake',
    location: 'Austria',
    rating: 4.6,
  },
  {
    id: 8,
    img: image8,
    name: 'Ijen Mountain',
    location: 'Indonesia',
    rating: 4.9,
  }
]



const Destinations = () => {
  return (
    <div className='destination section container'>
      <div className="secContainer">
        <div className=''>
          <span className="redText">
            EXPLORE NOW!
          </span>
          <h3>
            Find Your Dream Destination
          </h3>
          <p>
            Fill in the field below to find the best spot for your next tour
          </p>
        </div>

        <div className="searchField grid">
          <div className="inputField flex">
            <MdLocationPin className='icon'/>
            <input type="text"  placeholder="Location"/>
          </div>

          <div className="inputField flex">
            <BsCreditCardFill className='icon'/>
            <input type="text"  placeholder="Budget"/>
          </div>

          <div className="inputField flex">
            <BsCalendarDateFill className='icon'/>
            <input type="text"  placeholder="Date"/>
          </div>

          <button className='btn flex'>
          <BiSearchAlt className='icon'/>Search</button>
        </div>

        <div className="secMenu">
          <ul className="flex">
            <li className="active">All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div>

        <div className="destinationContainer grid">
          {destinations.map(destination => {
            return (
            <div className="singleDestination" key={destination.id} >
              <div className="imgDiv">
                <img src={destination.img} alt="Destination Image" />

                <div className="descInfo flex">
                  <div className="text">
                    <span className="name">
                      {destination.name}
                    </span>
                    <p className='flex'>
                      <TiLocation className='icon'/>
                      {destination.location}
                    </p>
                  </div>
                  <span className="rating">
                    {destination.rating}
                  </span>
                </div>
              </div>
            </div>

            )
          })} 
        </div>
      </div>
    </div>
  )
}

export default Destinations