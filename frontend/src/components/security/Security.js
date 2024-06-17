
import React from 'react'
import "./index.css";
import c1 from "./../../assets/Card 1.png"
import c2 from "./../../assets/Card 2.png"
import c3 from "./../../assets/Card 3.png"
const Security = () => {
  return (
    <>
    <div className='head-sec'>
        <h1>Safety and Security</h1>
    <p>Purpose-built to maximize the security of your assets.</p>
    </div>
    <div className='main-security'>
    
   

    <div className='card-1'>
      <div className='image'>
        <img src={c1} alt="img.." />

      </div>

    </div>
    <div className='card-1'>
      <div className='image'>
        <img src={c2} alt="img.." />

      </div>

    </div>
    <div className='card-1'>
      <div className='image'>
        <img src={c3} alt="img.." />

      </div>

    </div>
    
    </div>
    </>
  )
}

export default Security