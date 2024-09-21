import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"
const Hero = () => {
  return (
    <div className='HeroDiv'>
       <h3 className="heroText">
       Create a giveaway to celebrate your <span className='Herospan'> community</span>
       </h3>
       <p className="hero_P">
       Engage with your community by hosting a giveaway. Reward your loyal followers and attract new ones with exciting prizes.
       </p>
       <div className="Hero_button_Container">
         <button className="GiveBtn"> 
          <NavLink to="/Gift" className="heroLink">  create giveaway</NavLink>
         </button>
       </div>
    </div>
  )
}

export default Hero
