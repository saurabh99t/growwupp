import React from 'react'
import Success1 from "../assets/Nerd-amico.png";
import Success2 from "../assets/Knowledge-pana.png";
import Success3 from "../assets/Dictionary-pana.png";
import Butun from "../assets/round-play-button.png";
import Butun2 from "../assets/discover.png";
import Butun3 from "../assets/book.png";
import Butun4 from "../assets/book.png";
import Butun5 from "../assets/growing.png";


function ComponentName() {
    const [imageSrc, setImageSrc] = React.useState('');
    const images = [
      Success1,Success2,Success3
    ];
  
    let interval;
    React.useEffect(() => {
      interval = setInterval(() => {
        const random = Math.floor(Math.random() * 3);
        setImageSrc(images[random]);
      }, 800);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="container200">
        <div className="top200">
          <div className="head200">
            <h4>GROW WITH GROWUPP</h4>
          </div>
          <div className="highlight200">
            An expert coach for your future ambitions
          </div>
          <div className="button200">
            <button>
              <div>
                <a href="/about/how.html">Start</a>
              </div>
              <div>
                <img
                  className="play200"
                  src={Butun}
                  alt=""
                  srcSet=""
                />
              </div>
            </button>
          </div>
        </div>
        <div className="bottom200">
          <div className="left200">
            <div className="head200">
              <h3>We Create Results So You Focus On The Process.</h3>
            </div>
            <div className="para200">
              <p>
                Start today with Growupp. We provide students with optimum and
                best result seeking strategies.
              </p>
            </div>
          </div>
          <div className="right200">
            <div className="image">
              <img src={imageSrc} alt="" id="image200" />
            </div>
          </div>
        </div>
        <div className="show200">
          <div className="learn200">
            <img
              src={Butun2}
              alt=""
            />
            <h4>DISCOVER</h4>
          </div>
          <hr />
          <div className="learn200">
            <img src={Butun3} alt="" />
            <h4>LEARN</h4>
          </div>
          <hr />
          <div className="learn200 hidden-content">
            <img src={Butun4} alt="" />
            <h4>APPLY</h4>
          </div>
          <hr className="hidden-content" />
          <div className="learn200">
            <img src={Butun5} alt="" />
            <h4>GROW</h4>
          </div>
        </div>
      </div>
    );
  }
  
  export default ComponentName;
  