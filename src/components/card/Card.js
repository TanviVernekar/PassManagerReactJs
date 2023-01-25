import React from 'react'
import './Card.css'
export const Card=()=> {
  return (
    <div className='rectangle'>
      <div className='innerrectangle'>
        <img src={require('../../images/Bitmap.png')} className="image"/>
        <div style={{flexDirection:'column',marginLeft:'160px'}}>

        <div className='div'>
        <span className='facebook'>Facebook</span>
        </div>
        <div className='copypwdDiv'>
            <img src={require('../../images/copy.png')} className="copyIcon"/>
            <span className='copy-password'>Copy Password</span>
        </div>
        </div>
      
      </div>
      <div className='facebookDiv'>

      <span className='www-facebook-com'>www.facebook.com</span>
      </div>
    </div>
  )
}
