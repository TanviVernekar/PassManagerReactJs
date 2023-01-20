import React from "react";
import { Button } from "../../components/buttons/Button";
import "./SignUp.css";
export const SignUp = () => {
  return (
    <div>
        <div className="signUpcontainer">
            <span className="headerSu">SIGN IN TO YOUR ACCOUNT</span>
            <div className="inputcontainerSu">
            <input className="inputSu" placeholder="Mobile Number"/>
            </div>
            <div className="inputcontainerSu">
            <input className="inputSu" placeholder="MPin" />
            </div>
            <div className="forgotpwdSu">
              <span>Forgot your password?</span>
            </div>
            <Button name='SIGN UP'/>
            <button className="noaccountbtnSu">Don't have a Account? SIGNUP</button>

        </div>
      
    </div>
  );
};
