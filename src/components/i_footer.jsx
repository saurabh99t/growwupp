import React from 'react';
import Growup from "../assets/growwuplogo.png";

const i_footer = () => {
  return (
    <footer className="footer-section">
      <div className="container-footer">
        <div className="footer-content">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html"><img src={Growup} className="img-fluid" alt="logo" /></a>
                </div>
                <div className="footer-text">
                  <p>Your study care center, to build your bright career. Grow with Growupp Stay connected with us!</p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li><a href="/index.html">Home</a></li>
                  <li><a href="/ABOUT/about.html">about</a></li>
                  <li><a href="/HOW WE WORK/HOW WE WORK/how/how.html">how it works</a></li>
                  <li><a href="#">blog</a></li>
                  <li><a href="/CONTACT/contact.html">Contact</a></li>
                  <li><a href="/signup/signup.html">sign up</a></li>
                  <li><a href="#">Our Services</a></li>
                  <li><a href="#">blog</a></li>
                  <li><a href="#">query</a></li>
                  <li><a href="/Extra/terms.html">Terms and Condition</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Contact</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>Don't miss to Contact our new feeds, kindly fill the form below.</p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button><i className="fab fa-telegram-plane"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container-footer">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>All Right Reserved <a href="">CRTD Technologies PVT. LTD</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default i_footer;
