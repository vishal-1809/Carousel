import React from "react";
import Logo from "../images/Logo.png";
import Los from "../images/LOSANGELES MOUNTAINS.png";
import HistoryImg from "../images/history1.png";
import "../ScssFiles/History.css";
import Imgs from "./Imgs";

const History = () => {
  return (
    <>
      <div className="history">
        <div className="title">
          <div className="flex">
            <div className="logo">
              <img src={Logo} alt="Logo" />
              <img src={Los} alt="LOSANGELES MOUNTAINS" />
            </div>

            <div className="tags">
              <a href="">
                <span className="historyTag">01. History</span>
              </a>
              <a href="">
                <span className="climbTag">02. Team</span>
              </a>
            </div>
          </div>
        </div>

        <div className="img">
            <img src={HistoryImg} alt="History" />
            <span className="HistoryTxt">
                <span className="num">01
                <div className="greyBox"></div>
                </span>
                <span className="history1">History</span>
            </span>

            <div className="dummy">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, sit dolor! Aliquid placeat dolorum similique iusto aspernatur deserunt. Esse repellat perspiciatis quod quas quidem voluptates, maxime officia iure veritatis voluptas velit qui, sed quam vel aperiam repellendus molestias distinctio deleniti et laboriosam.
            </div>
        </div>

        <Imgs>

        </Imgs>
      </div>
    </>
  );
};

export default History;
