import React from 'react'
import "../Styles/Footer.css"

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='l_side'>
        <p className='p1'>Copyright (C) 2023 <span>|</span></p>
        <p>clarifionsupport@clarifion.com</p>
      </div>
      <div className='R_side'>
        <div></div>
        <div></div>
        <img className='sxe' src={require('../Asset/MainBody img/lock .png')} alt="lock2" />
        
        <p>Secure 256-Bit SSL Encryption</p>
      </div>
    </div>
  )
}

export default Footer