import React from "react";
import { Card } from "../../components/card/Card";
import "./Mainscreen.css";
export const Mainscreen = () => {
  return (
    <div className="main-containerM">
      <div className="containerM">
        <div className="sideBarContainer">
          <img
            src={require("../../images/burger_Menu.png")}
            className="hamberger"
          />

          <div className="HomeDiv">
          <div className="rectangleHome"/>

         
          <img
            src={require("../../images/home_icn.png")}
            className="homeIcon"
          />
          <div className="ovalHome"/>

          
          </div>
        </div>
        <div className="menucontainer">
          <div className="menubarContainer">
            <div>
              <img
                src={require("../../images/logo1.png")}
                className="homelogo"
              />
            </div>
            <div className="sidemenucontainer">
              <img
                src={require("../../images/sync.png")}
                className="synclogo"
              />
              <img
                src={require("../../images/profile.png")}
                className="profilelogo"
              />
            </div>
          </div>
          <div className="homedivider" />

          {/* mobile view start*/}
          <div className="mainheaderMobM">
            <div className="hambergerDivMob">
              <img
                src={require("../../images/burger_Menu.png")}
                className="hambergerMob"
              />
              <img
                src={require("../../images/passmanager.png")}
                className="passmanagerMob"
              />
            </div>

            <div className="innerheaderMob">
              <img
                src={require("../../images/searchMob.png")}
                className="searchMob"
              />
              <img
                src={require("../../images/syncMob.png")}
                className="syncMob"
              />
              <img
                src={require("../../images/profileMob.png")}
                className="profileMob"
              />
            </div>
          </div>

          <div className="mainhomecontainer">
            <div className="maininner">
              <div  className="sitesdiv">
                <span className="sites">Sites</span>
                <div className="siteLine" />
              </div>

              {/* mobile view */}
              <div className="mediadivMob">
              <span className="social-media">Social Media</span>
              <div className="oval">
                <span className="number">07</span>
              </div>
              <img
                src={require("../../images/PathCopy.png")}
                className="path-copy"
              />
            </div>



              <div style={{ flexDirection: "column" }}>
                <div className="searchAddDiv">
                  <div className="searchfielddiv">
                    <input className="searchfield" placeholder="Search"></input>
                    <img
                      src={require("../../images/search.png")}
                      className="searchIcon"
                    />
                  </div>
                  <img
                    src={require("../../images/add_btn.png")}
                    className="addIcon"
                  />
                </div>
                <div className="searchLine" />
              </div>
            </div>
            <div className="mediadiv">
              <span className="social-media">Social Media</span>
              <div className="oval">
                <span className="number">07</span>
              </div>
              <img
                src={require("../../images/PathCopy.png")}
                className="path-copy"
              />
            </div>

            <div className="carddivmain">
              <div className="carddiv">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
