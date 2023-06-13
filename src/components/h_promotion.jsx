import React from 'react';
import H_promotion from "../assets/trophy.png";
import Appstore from "../assets/appstorebadge.png";
import Desktop1 from "../assets/Desktop - 4 (1).png";




const h_promotion = () => {
  return (
    <div className="container21">
      <div className="text21">
        <div className="txt21">
          <h5>Get the app now!</h5>
          <p>
            Become a member and start your child’s progress journey with growupp. Download our app and get started!
          </p>
          <div className="text22">
            <span className="text23">
              <h5>2K+</h5>
              <p>Downloads</p>
            </span>
            <span className="text23">
              <h5>|</h5>
            </span>
            <span className="text23">
              <h5>1K+</h5>
              <p>Happy</p>
            </span>
            <span className="text23">
              <h5>|</h5>
            </span>
            <span className="text23">
              <img className="bhumi1" src={H_promotion} alt="" />
            </span>
          </div>
          <br />
          <br />
          <div className="photu21">
            <span className="bhumi3">
              <img src="https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0" />
            </span>
            <span className="bhumi3">
              <img src={Appstore} />
            </span>
          </div>
        </div>
      </div>
      <div className="photu-right">
        <div className="photu21">
          <img className="mainphotu21" src={Desktop1} alt="" />
        </div>
        <div className="photu21">
          <img className="mainphotu22" src={Desktop1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default h_promotion;
