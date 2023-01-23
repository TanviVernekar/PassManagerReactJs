import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "../../components/buttons/Button";
import "./SignUp.css";
export const SignUp = () => {
  const navigate=useNavigate()
  return (
    <div>
        <div className="signUpcontainer">
            <span className="headerSu">SIGN UP</span>
            <div className="inputcontainerSu">
            <input className="inputSu" placeholder="Mobile Number"/>
            </div>
            <div className="inputcontainerSu">
            <input className="inputSu" placeholder="Enter 4 digit Mpin" />
            </div>
            <div className="inputcontainerSu">
            <input className="inputSu" placeholder="Re-enter 4 digit Mpin" />
            </div>
           
            <Button name='SIGN UP' onClick={()=>navigate('/')}/>
            <img src={require('/Volumes/Development/PassManagerReactjs/passmanager-reactjs/src/images/fingerprint_icon.png')} className='fingerprint'></img>
            <p className="fingerprintText">OR use fingerprint to Login</p>
          

        </div>
      
    </div>
  );
};
