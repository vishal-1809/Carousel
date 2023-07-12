import React from "react";
import Fronts from "../images/Front1.png";
import "../ScssFiles/Front.css";

const Front = () => {
  return (
    <>
      <div className="front">
        <img className="frontImg" src={Fronts} alt="Front" />
      </div>
    </>
  );
};

export default Front;
