import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopyright} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function Footer(){
  const styleObj ={
    textAlign: "center",
  }

  return(
    <div style={styleObj} className="card-footer">
    <p > <FontAwesomeIcon icon={faCopyright}/> 2020 Chue Yang </p>
    </div>
  );
}

export default Footer;