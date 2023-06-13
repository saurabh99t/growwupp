import React from 'react';
import Success1 from "../assets/Succes (1).png";

const e_happytohelp = () => {
  return (
    <div className="container-happy">
      <div className="text21">
        <div className="txt-happy21">
          <h5>Happy to help you!</h5>
          <p>
            Need more details? Our expert academic counsellors will be happy to patiently explain everything that you want to know.
          </p>
          <button className="btn21">Speak to expert</button>
        </div>
      </div>
      <div className="photu21">
        <img className="mainphotu" src={Success1} alt="" />
      </div>
    </div>
  );
};

export default e_happytohelp;
