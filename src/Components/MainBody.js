import React from 'react'
import "../Styles/MainBody.css"

const MainBody = () => {
  return (
    
    
   
    <div className='MainBody'>
      <div className='AirImg'>
        <img src={require('../Asset/MainBody img/AirCleaner.png')} alt="AirCleaner" />
        <div className='MainComment'>
            <div className='Comment'>
                <img className='circle_img' src={require('../Asset/MainBody img/circleimg.png')} alt="circleimg" />
                <div className='stars'>
                    <img src={require('../Asset/MainBody img/Stars.png')} alt="stars" />
                          <p><span style={{ color:'#333333'}}> Ken T. </span><img src={require('../Asset/MainBody img/verify 1.png')} alt="Verifird Tick" /> <span className='verifiedCustomer'>Verified Customer</span></p>
                </div>
            </div>
            <div className='para2'>
                      <p>“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”</p>
            </div>
        </div>
      </div>
      <div className='RightSide'>
              <div className='heading1'><p> <span className='txtcolor'> ONE TIME ONLY</span> Special Price For 6 Extra Clarifion For Only <span className='txtcolor'> $14 Each</span> &#40;$84.00 Total!&#41;</p></div>
        <div className='card'>
        
            <div className='smallAir'><img src={require('../Asset/MainBody img/AirCleanSmall.png')} alt="Small Air Cleaner" /></div>
                  <div></div>
                  <div></div>
            <div className='MainDollar'>
                <div className='DollarPrice'>
                    <p className='para1'>Clarifion Air Ionizer</p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                          <p><s> $180</s></p>
                        
                    <p className='discount'> $84</p>
                </div>
                <div className='starimg2'><img src={require('../Asset/MainBody img/Stars.png')} alt="" /></div>
                      <div className='stock'><input type="radio" /> <p> 12 left in Stock </p></div>
                      <p className='para4'>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple</p>
            </div>
        </div>
        <div className='mainTick'>
            <div className='tick'>
            <img src={require('../Asset/MainBody img/tick.png')} alt="tick" />
                      <p>Negative Ion Technology may <b>help with allergens</b></p>
            </div>
            <div className='tick'>
            <img src={require('../Asset/MainBody img/tick.png')} alt="tick" />
                      <p>Designed for <b> air rejuvenation</b></p>
            </div>
            <div className='tick'>
            <img src={require('../Asset/MainBody img/tick.png')} alt="tick" />
            <p><b>Perfect for every room </b>in all types of places</p>
            </div>
        </div>

        <div className='Percentage'>
            <img src={require('../Asset/MainBody img/percentagee.png')} alt="%" />
                  <p>Save <span className='discount'>53% </span>and get <span className='discount'> 6 extra Clarifision </span> for only <span className='discount'> $14 Each.</span></p>
        </div>
        <div className='mainbtn'>
            <div className='btn'>
                      <button>Yes-CLAIM MY DISCOUNT  <img src={require('../Asset/MainBody img/r-arrow.png')} alt="" /></button>
                <div className='FreeShipping'>
                          <div>Free shippings <span className='slash1'>|</span></div> 
                    <div className='FreeShipping2'>
                              <p><img src={require('../Asset/MainBody img/lock1.png')} alt="lock" /> </p>
                              <p>Secure 256-bit SSL encryption. <span className='slash'>|</span></p> 
                    </div>
                        <div className='visaCard'>
                            <img src={require('../Asset/MainBody img/visa.png')} alt="card" />
                            <img src={require('../Asset/MainBody img/shop pay.png')} alt="card" />
                            <img src={require('../Asset/MainBody img/paypal.png')} alt="card" />
                            <img src={require('../Asset/MainBody img/mastercard.png')} alt="card" />
                            <img src={require('../Asset/MainBody img/gpay.png')} alt="card" />
                            <img src={require('../Asset/MainBody img/amex.png')} alt="card" />
                        </div>
                </div>
                      <div className='redlink'><p> <u>NO THANKS,I DON'T WANT THIS. </u></p></div>
            </div>
        </div>
            <div className='Gharantee'>
                <img src={require('../Asset/MainBody img/Gharantee.png')} alt="Gharantee" />
                  <p>If you are not completely thrilled with your Clarifion - We have a <b> 30 day satisfaction guarantee.</b> Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</p>
            </div>
      </div>
    </div>
    
  )
}

export default MainBody
