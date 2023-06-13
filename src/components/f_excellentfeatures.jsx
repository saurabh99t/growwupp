import React from 'react';

import Indian1 from "../assets/indian-1.jpg";
import Indian2 from "../assets/indian-2.jpg";
import Indian3 from "../assets/indian-3.jpg";

const f_excellentfetures = () => {
  return (
    <div className="excellent-2">
      <h1 className="heading-2">
        Why we are<span style={{ color: 'rgb(233, 138, 23)' }}>different?</span>
      </h1>
      <div className="container2">
        <div className="left">
          <img className="left-img1" src={Indian1} alt="" style={{ height: '39%' }} />
          <img className="left-img2" src={Indian2} alt="" style={{ height: '42%' }} />
          <img className="left-img3" src={Indian3} alt="" style={{ height: '49%' }} />
        </div>
        <div className="right">
          <div className="right-inner">
            <h1>01. Timely updataion on your child’s performance</h1>
            <p>
              Our mentors keep you updated on the progress made by our child so far. You will be informed from time to time regarding the on-going test series and on the level of your child.
            </p>
          </div>
          <div className="right-inner">
            <h1>02. Unique test series and assignments to mark the student’s performance.</h1>
            <p>
              We offer specially designed tests and assignments which focuses on individual child’s learning capacity and mental comprehension level. They will be able to clear their previous backlogs efficiently so that they can focus on their current curriculum.
            </p>
          </div>
          <div className="right-inner">
            <h1>03. Competition on a local level first then globally.</h1>
            <p>
              The tests and assignments are evaluated and compared with other students of their level so that students can learn together and keep track of their level of competence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default f_excellentfetures;
