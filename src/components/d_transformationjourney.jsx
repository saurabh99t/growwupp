import React from 'react';
import Girl from "../assets/girl.png";
import Service1 from "../assets/service (1).png";
import Service2 from "../assets/service (2).png";
const d_transformationjourney = () => {
  return (
    <div className="container09 bgg-image">
      <div className="photu-trans">
        <img className="girl-trans" src={Girl} alt="" />
      </div>
      <div className="content-trans">
        <div className="heading-trans">
          <h3>Transformation Journey step Future professionals</h3>
        </div>
        <div className="para-trans">
          <p>
            We generate fears while we do nothing. We overcome these fears by taking action.
            "Any book that helps a child to form a habit of reading, to make reading one of his deep and
            continuing needs, is good for him."
          </p>
        </div>
        <div className="lane1-trans">
          <div className="box1 box-trans">
            <div className="chotuimg">
              <img className="book-trans" src={Service1} alt="" />
            </div>
            <div className="psmall">
              <p>Discover The best From Growupp</p>
            </div>
          </div>
          <div className="box2 box-trans">
            <div className="chotuimg">
              <img className="book-trans" src={Service2} alt="" />
            </div>
            <div className="psmall">
              <p>Learn From scratch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default d_transformationjourney;
