import React from 'react'

import Success from "../assets/Succes (1).png";
import Success2 from "../assets/Succes (2).png";
import Success3 from "../assets/Succes (3).png";


const c_whywebest = () => {
      return (
        <div className="container100">
          <div className="mindiv100">
            <div>
              <h4 className="heading100 bigHead100">Why We Are the Best</h4>
            </div>
            <div>
              <p>a learning system based on formalised teaching with help of....</p>
            </div>
          </div>
          <box className="vl"></box>
          <div className="maxdiv100">
            <div className="box100 box101">
              <div>
                <img className="logo100" src={Success2} alt="" />
              </div>
              <div>
                <h3 className="heading100 smallHead100">Expert Teacher</h3>
              </div>
              <div>
                <p className="para100">Timely updataion on your child’s performance</p>
              </div>
            </div>
            <div className="box100 box102">
              <div>
            <img className="logo100" src= {Success} alt="" />
              </div>
              <div>
                <h3 className="heading100 smallHead100">Guide And support</h3>
              </div>
              <div>
                <p className="para100">Unique test series and assignments to mark the student’s performance.</p>
              </div>
            </div>
            <div className="box100 box103">
              <div>
                <img className="logo100" src={Success3} alt="" />
              </div>
              <div>
                <h3 className="heading100 smallHead100">Compete &amp; levelup</h3>
              </div>
              <div>
                <p className="para100">Competition on a local level first then globally.</p>
              </div>
            </div>
          </div>
        </div>
      );
    };
  

export default c_whywebest