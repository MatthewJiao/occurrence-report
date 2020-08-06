import React from "react";
import { render } from "react-dom";
import logo from '../airmatrix-logo.png'; // Tell webpack this JS file uses this image

const Footer = () => (

  <div style={{fontVariant: 'small-caps'}} className="footer">
        Powered by <br/> <img width={"140"} height={"23"}  src={logo} alt="Logo" />

  </div>
);    



export default Footer