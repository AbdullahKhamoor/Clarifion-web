import React from 'react'
import "../Styles/preNav.css"


const PreNav = () => {
  return (
    <div className='preNav'>
    <img className='arrow' src={require('../Asset/PreNav img/left arrow.png')} alt="right" />
    <div className='flex'>
       <img className='as' src={require('../Asset/PreNav img/checkmark.png')} alt="" />
          <div>
              30-DAY SATISFACTION GUARANTEE
           </div>
    </div>
          <div className='flex flex2'>
                  <img className='as'  src={require('../Asset/PreNav img/car.png')}  alt="asd" />
              <div>
                  30-DAY SATISFACTION GUARANTEE
              </div>
          </div>
          <div className='flex flex2'>
          <div className='imgs'>
              <img className='as' src= { require('../Asset/PreNav img/heart.png')} alt="" />
              </div>
              <div>
                  30-DAY SATISFACTION GUARANTEE
              </div>
          </div>
          <div className='flex flex2'>
              <img className='as'  src ={require('../Asset/PreNav img/circleCheck.png')} alt="" />
              <div>
                  30-DAY SATISFACTION GUARANTEE
              </div>
          </div> 
          <img className='arrow' src={require('../Asset/PreNav img/right arrow.png')} alt="left" />
    </div>
  )
}

export default PreNav
