import React from 'react';
import './AddModel.css'
import {Button, OutlineButton} from '../buttons/Button'

export const AddModel = props => {
  return (
     <div className="modal">
       <div className="modal-content">
          {/* <span className="close">&times;</span> */}
          <span>Add Site</span>
          {/* <Button name='Edit'/> */}
          {/* <button className='buttonEdit'>Edit</button> */}
          <div className='addsitediv'>
            <span>URL</span>
            <input className='AddinputUrl'></input>
          </div>

          <div className='dividerDivAdd'>
          <div className='addsitedivleft'>
            <span>Site Name</span>
            <input className='AddinputSiteleft'></input>
          </div>

          <div className='addsitedivright'>
            <span>Sector/Folder</span>
            <input className='AddinputSiteright'></input>
          </div>
          </div>

          <div className='dividerDivAdd'>
          <div className='addsitedivleft'>
            <span>UserName</span>
            <input className='AddinputSiteleft'></input>
          </div>

          <div className='addsitedivright'>
            <span>Site Password</span>
            <input className='AddinputSiteright'></input>
          </div>
          </div>

          <div className='addsitediv'>
            <span>Notes</span>
            <textarea className='AddinputNotes'></textarea>
          </div>
        <OutlineButton/>
       </div>
     </div>
  );
}
