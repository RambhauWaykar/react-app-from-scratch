import React from "react";

import ReactLogo from './images/react-logo.svg';
import NatureImg from './images/nature.png';

export const Welcome = () => {
  return (
    <div className="app">
      <ReactLogo className="react-logo" />
      <h4>Welcome</h4>
      <img src={NatureImg} alt="nature" />
    </div>
  );
};
