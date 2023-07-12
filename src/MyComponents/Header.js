import React from "react";
import Logo from "../images/Logo.png";
import "../ScssFiles/Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="flex">
          <div className="logo">
            <img src={Logo} alt="Logo" />
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
    </>
  );
};

export default Header;
