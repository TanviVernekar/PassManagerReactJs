import React from 'react'
import './Card.css'
export const Card=()=> {
  return (
    <div className='rectangle'>
      <div className='innerrectangle'>
        <img src={require('/Volumes/Development/PassManagerReactjs/passmanager-reactjs/src/images/Bitmap.png')}/>
        <div>

        <span>Facebook</span>
        <div>
            <img src={require('/Volumes/Development/PassManagerReactjs/passmanager-reactjs/src/images/copy.png')}/>
            <span>copy password</span>
        </div>
        </div>
      </div>
    </div>
  )
}
