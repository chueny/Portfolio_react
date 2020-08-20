import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopyright} from "@fortawesome/free-solid-svg-icons";
// import "./App.css";

function Footer(){
  const styleObj ={
    textAlign: "center",
    background: "black",
    minHeight: "50px",
  }

  return(
    <footer style={styleObj} className="footer">
    <span style={{color: "white"}}> <FontAwesomeIcon icon={faCopyright}/> 2020 Chue Yang </span>
    </footer>
  );
}

export default Footer;