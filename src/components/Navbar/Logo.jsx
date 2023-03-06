import React from 'react';
import Img from "./../../assets/img/logo.png";
const Logo = () => {
  return (
    <>
      <a href="/" className="logo-link underline-offset-0 p-3 mt-1">
        <img
          src={Img}
          alt="logo images"
          className="m-0 drop-shadow shadow-red-500"
        />
      </a> 
    </>
  );
};

export default Logo;