import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopyright} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function Footer(){
  const styleObj ={
    textAlign: "center",
    background: "black",
  }

  return(
    <div style={styleObj} className="card-footer">
    <p style={{color: "white"}}> <FontAwesomeIcon icon={faCopyright}/> 2020 Chue Yang </p>
    </div>
  );
}

export default Footer;