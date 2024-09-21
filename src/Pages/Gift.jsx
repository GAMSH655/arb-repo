import React from 'react'
 import Header from "../Components/HomeUi/Header"
 import "./Gift.css"
const Gift = () => {
  return (
    <div> 
      <Header/>
       
       <div className="giveDiv">
         <div className="inputDiv">
         <input type="number"  placeholder='set price' />
        
         <input type="number"  placeholder='max participant' />
         
          <button className="confirm_Btn"> confirm </button>
         </div>
       </div>
    </div>
  )
}

export default Gift
