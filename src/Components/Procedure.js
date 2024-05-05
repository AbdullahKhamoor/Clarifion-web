import React from 'react'
import "../Styles/Procedure.css"

const Procedure = () => {
  return (
    <div className='Procedure'>
      <div className='proFlex'>
      <img src={require('../Asset/Procedure img/Group 1484578148.png')} alt="one" />
              <p> <span className='step'> Step 1 : </span>Cart Review</p>
      </div>
          <div className='proFlex'>
        <img src={require('../Asset/Procedure img/tick.png')} alt="two" />
              <p><span className='step'> Step 2 : </span>Checkout</p>
      </div>
          <div className='proFlex'>
        <img src={require('../Asset/Procedure img/three.png')} alt="three" />
              <p><span className='step'>Step 3 :</span> Special Offer</p>
      </div> 
          <div className='proFlex'>
              <img src={require('../Asset/Procedure img/four.png')} alt="four" />
              <p><span className='step'>Step 4 :</span> Confirmation</p>
      </div>
    </div>
  )
}

export default Procedure
