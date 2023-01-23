import React from "react";
import { Card } from "../../components/card/Card";
import "./Mainscreen.css";
export const Mainscreen = () => {
  return (
    <div className="main-containerM">
      <div className="containerM">
        <div className="sideBarContainer">
          <img
            src={require("/Volumes/Development/PassManagerReactjs/passmanager-reactjs/src/images/burger_Menu.png")}
            className="hamberger"
          />
          <img
            src={require("/Volumes/Development/PassManagerReactjs/passmanager-reactjs/src/images/home_icn.png")}
            className="homeIcon"
          />
        </div>
        <div className="menucontainer">
          <div className="menubarContainer">
            <div>
              <img
                src={require("/Volumes/Development/PassManagerReactjs/passmanager-reactjs/src/images/logo1.png")}
                className="homelogo"
              />
            </div>
            <div className="sidemenucontainer">
              <img
                src={require("/Volumes/Development/PassManagerReactjs/passmanager-reactjs/src/images/sync.png")}
                className="synclogo"
              />
              <img
                src={require("/Volumes/Development/PassManagerReactjs/passmanager-reactjs/src/images/profile.png")}
                className="profilelogo"
              />
            </div>
          </div>
          <div className="homedivider" />
          <div className="mainhomecontainer">
            <div className="maininner">
              <div style={{flexDirection:'column'}}>
              <span className="sites">Sites</span>
              <div className="siteLine"/>
              </div>
              <div style={{flexDirection:'column'}}>

              <div className="searchAddDiv">
                <div className="searchfielddiv">
                  <input className="searchfield" placeholder="Search"></input>
                  <img
                    src={require("/Volumes/Development/PassManagerReactjs/passmanager-reactjs/src/images/search.png")}
                    className="searchIcon"
                  />
                </div>
                <img
                  src={require("/Volumes/Development/PassManagerReactjs/passmanager-reactjs/src/images/add_btn.png")}
                  className="addIcon"
                />
              </div>
              <div className="searchLine"/>

              </div>

            </div>
            <div className="mediadiv">
              <span className="social-media">Social Media</span>
              <div className="oval"><span className="number">07</span></div>
              <img src={require('/Volumes/Development/PassManagerReactjs/passmanager-reactjs/src/images/PathCopy.png')} className="path-copy"/>
            </div>
            <div>
              <Card/>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
};
