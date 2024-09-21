import React from 'react'
import "./Header.css"
import logo from "../../assets/Logo.png"
const Header = () => {
  return (
    <div className='header'>
      <div className="logoContainer">
        <img src={logo} alt="" />
        <h3 className="logoName">giveawaychain</h3>
      </div>
       <div className="Hero_button_Container">
         <button className="headerButton">connect wallet</button>
       </div>
    </div>
  )
}

export default Header
