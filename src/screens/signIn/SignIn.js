import React from "react";
import { NavLink,Navigate } from "react-router-dom";
import { Button } from "../../components/buttons/Button";
import "./SignIn.css";
export const SignIn = () => {
  return (
    <div className="maincontainerSi">
        <div className="signIncontainer">
            <span className="headerSi">SIGN IN TO YOUR ACCOUNT</span>
            <div className="inputcontainerSi">
            <input className="inputSi" placeholder="Mobile Number"/>
            </div>
            <div className="inputcontainerSi">
            <input className="inputSi" placeholder="MPin" />
            </div>
            <div className="forgotpwdSi">
              <span>Forgot your password?</span>
            </div>
            <Button name='SIGN IN'/>
            {/* <NavLink className="noaccountbtnSi" >Don't have a Account? SIGNUP</NavLink> */}
            <img src={require('/Volumes/Development/PassManagerReactjs/passmanager-reactjs/src/images/fingerprint_icon.png')} className='fingerprint'></img>
        </div>
      
    </div>
  );
};
