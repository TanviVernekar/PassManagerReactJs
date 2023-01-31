import React from 'react'
import './Button.css'
export const Button=(props)=> {
  return (
          <div>
            <button className='button' onClick={props.onClick}>
              <span className='buttontext'>{props.name}</span>
            </button>
          </div> 
  )
}
export const OutlineButton=(props)=>{
  return(
    <div>
      <button className='outlinebutton' onClick={props.onClick}>
              <span className='outlinebuttontext'>{props.name}</span>
            </button>
            
    </div>
  )
}
