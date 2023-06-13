import React from 'react';
import "../styles/app.css"
import "../styles/style.css"
import "../styles/arrow.css"
import "../styles/excellent-1.css"
import "../styles/excellent-2.css"
import "../styles/footer.css"
import "../styles/promotion.css"
import "../styles/responsive-style.css"
import "../styles/transformation.css"
import "../styles/whybest.css"
import "../assets/girl.png"
import logo from "../assets/growwuplogo.png"


const a_navbar = () => {
  return (
    <div >
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="main-container">
        <div className="nav-wrapper">
          <div className="logo-container">
            <img className="logo" src={logo} alt="Logo"/>
          </div>
          <nav>
            <input type="checkbox" id="menuToggle" className="hidden"/>
            <label htmlFor="menuToggle" className="menu-btn">
              <div className="menu"></div>
              <div className="menu"></div>
              <div className="menu"></div>
            </label>
            <div className="nav-container">
              <ul className="nav-tabs">
                <li className="nav-tab">
                  <a href="/MAIN/growupp_official/index.html">Home</a>
                </li>
                <li className="nav-tab">
                  <a href="/HOW WE WORK/HOW WE WORK/how/how.html">How we work</a>
                </li>
                <li className="nav-tab">
                  <a href="/ABOUT/About.html">About</a>
                </li>
                <li className="nav-tab">
                  <a href="/CONTACT/contact.html">Contact</a>
                </li>
                <li className="nav-tab">
                  <a href="/signup/signup.html">Sign up</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default a_navbar;
