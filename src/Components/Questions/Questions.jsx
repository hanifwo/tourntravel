import React, { useState } from 'react'
import './Questions.css'
import Accordion from './Accordion.jsx'

const Questions = () => {
  const [active, setActive] = useState(
    'How do i choose the right travel destination for me?')
  return (
    <div className='questions section container'>
      <div className="secHeading">
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className="secContainer grid">
        <div className="accordion grid">
          <Accordion 
          title='How do i choose the right travel destination for me?' 
          desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam illum eaque facere, voluptatum ut blanditiis dolores maxime voluptate quas!' 
          active={active} 
          setActive={setActive} 
          />
          <Accordion 
          title='What are the best time to visit specific destinations?' 
          desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam illum eaque facere, voluptatum ut blanditiis dolores maxime voluptate quas!' 
          active={active} 
          setActive={setActive} 
          />
          <Accordion 
          title='How can i find budget-friendly travel options and deals??' 
          desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam illum eaque facere, voluptatum ut blanditiis dolores maxime voluptate quas!' 
          active={active} 
          setActive={setActive} 
          />
          <Accordion 
          title='What essential items should I pack for my adventure?' 
          desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque veniam illum eaque facere, voluptatum ut blanditiis dolores maxime voluptate quas!' 
          active={active} 
          setActive={setActive} 
          />
        </div>

        <div className="form">
          <div className="secHeading">
            <h4>Do you have any specific questions?</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis at voluptas accusantium sapiente, quas velit!
            </p>
          </div>

          <div className="formContent grid">
            <input type="email" placeholder='Enter email address' />
            <textarea placeholder='Enter your question here'></textarea>
            <button className='btn'>Submit Inquiry</button>
          </div>
        </div>        
      </div>
    </div>
  )
}

export default Questions