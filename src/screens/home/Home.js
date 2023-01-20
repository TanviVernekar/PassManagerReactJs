import React from "react";

import './Home.css'
import { SignIn } from "../signIn/SignIn";
// import { SignUp } from "../signUp/SignUp";
export const Home = () => {

  return (
    <div className="main-container">
      <div className="container">
        <div className="innercontainer">
          <img className="img"
            src={require("/Volumes/Development/PassManagerReactjs/passmanager-reactjs/src/images/logo.png")} alt='logo'
          ></img>
          <div className="textcotainer">

          <span className="text">Protect & Manage every password in your business</span>
          </div>
        </div>
        <div  className="divider"/>
       
           <SignIn />

          {/* <SignUp/> */}
      
      </div>
    </div>
  );
};
