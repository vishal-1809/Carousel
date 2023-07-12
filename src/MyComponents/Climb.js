import React from "react";
import ClimbImg from "../images/climb1.png";
import "../ScssFiles/Climb.css";

const Climb = () => {
  return (
    <>
      <div className="climb">
        <div className="ClimbTxt">
          <span className="num">
            02
            <div className="greyBox"></div>
          </span>
          <span className="climb1">Climb</span>
        </div>
        <div className="dummyClimb">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Voluptatibus, aperiam laborum possimus dolorem perspiciatis
          consectetur illum impedit laudantium rem ipsam!
        </div>
        <div className="strip">
          <div className="actions">
            <span className="mountain1">MOUNTAIN1</span>
            <span className="mountain2">MOUNTAIN2</span>
          </div>
        </div>
        <div className="ClimbImg">
          <img src={ClimbImg} alt="ClimbImg" />

          <div className="box">
            <div className="schedule">SCHEDULE</div>
            <div className="gridBox">
              <div className="box1">
                <span>25 Nov 2016</span><br />
                <span>28 Nov 2016</span><br />
                <br /><br />
                <span>18 Dec 2016</span><br /><br />
                <span>07 Jan 2016</span>
              </div>
              <div className="box2">
                <span>Vestibulum viverra</span><br />
                <span>Vestibulum viverra</span><br /><br /><br />
                <span>Vestibulum viverra</span><br /><br />
                <span>Vestibulum viverra</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Climb;
