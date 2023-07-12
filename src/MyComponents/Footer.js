import React from 'react';
import Logo from '../images/Logo.png';
import Los from '../images/LOSANGELES MOUNTAINS.png';
import '../ScssFiles/Footer.css';

const Footer = () => {
  return (
    <>
        <div className="footer">
        <div className="flex">
          <div className="logo">
            <img src={Logo} alt="Logo" />
            <img src={Los} alt="LOSANGELES MOUNTAINS" />
          </div>
          <div className="copyright">
            COPYRIGHT 2016. ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer