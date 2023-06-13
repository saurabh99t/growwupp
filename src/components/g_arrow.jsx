import React from 'react';
import Preview from "../assets/5239429-removebg-preview.png";

const g_arrow = () => {
  return (
    <div className="text17">
      <h3 className="heading17">Arrow</h3>
      <p className="para17">
        Need More Details? Our Expert Academic Counsellors Will Be Happy To Patiently Explain Everything That You Want To Know.
      </p>
      <button className="btn17">Learn more</button>
      <div className="arrow-right">
        <div className="image17">
          <img src={Preview} alt="" />
        </div>
        <div className="shape">
          <div className="circle"></div>
          <div className="rect"></div>
        </div>
      </div>
    </div>
  );
};

export default g_arrow;
