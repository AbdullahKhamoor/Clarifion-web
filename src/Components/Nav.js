import React from 'react'
import "../Styles/Nav.css"

const Nav = () => {
  return (
    <div className='Nav'>
      <div className='left_logo'><img src={require("../Asset/Nav-img/clarifion.png")} alt="clarifion" /></div>
      <div></div>
      <div></div>
      <div></div>
      <div className='right_side'>
      <div className='right_logo'><img src={require("../Asset/Nav-img/McFe.png")} alt="McFe" /></div>
      <div className='right_logo'><img src={require("../Asset/Nav-img/Norton.png")} alt="Norton" /></div>
    </div>
    </div>
  )
}

export default Nav
