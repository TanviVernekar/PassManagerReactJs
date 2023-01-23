import React from "react";

import './Home.css'
import { SignIn } from "../signIn/SignIn";
import { NavLink, Outlet } from "react-router-dom";
// import { SignUp } from "../signUp/SignUp";
export const Home = () => {

  return (
    <div className="main-containerHome">
      <div className="containerH">
        <div className="innercontainerH">
          <img className="img"
            src={require("/Volumes/Development/PassManagerReactjs/passmanager-reactjs/src/images/logo.png")} alt='logo'
          ></img>
          <div className="textcotainerH">
          <span className="textH">Protect & Manage every password in your business</span>
          </div>
         
        </div>
        
        <div  className="divider"/>
        <div className="mainLogoH">
            <img src={require('/Volumes/Development/PassManagerReactjs/passmanager-reactjs/src/images/logomob.png')}></img>
          </div>

          <div>
          <nav className="Nav-Bar">
            <NavLink to="/" className="innernav">SIGN IN</NavLink>
            <NavLink to="/SignUp" className="innernav">SIGN UP</NavLink>
          </nav>
          <div className="bottomline"/>
          </div>
         
          <Outlet/>
          
      
      
      </div>
    </div>
  );
};
