import React from "react";
import "./App.css";

function About() {
  const styleObj = {
    color: "rebeccapurple",
    fontWeight: "bold",
    fontSize: "35px",
    padding: "left",
    marginTop: "30px",
  };

  return (
    
    <div style={{ height: "90vh"}} className="container">
            <h1 style={styleObj}>
              About Me
            </h1>
            <hr></hr>
     
      <div className="row">
        <div className="col-md-3 col-xs-3">
          <img
            className="img-fluid"
            src={require("../images/chue.jpg")}
            alt="chue"
          />
        </div>

        <div className="col-md-9 col-xs-9">
          <p>
            Having recently completed a certificate in Full Stack Development at
            the University of Minnesota, I am seeking opportunities in software development. Skills acquire include HTML5, CSS3, Javascript, Bootstrap, SQL, MangoDB, Git, and React. 
            
          </p>
          <p>
            My background is in operations and project management.  Previously, 
            I managed a makerspace at the University of Washington where I fell in 
            love with tech and rapid prototyping leading to my pursuit of Full Stack Development
            as a career.  My favorite experiences at work has been in a makerspace, learning
            and playing with new rapid prototyping technologies (3D printing,
            laser cutting, physical computing, AR/VR, soldering, milling, and
            woodshop tools). When I had access to the makerspace, I tinkered
            around with the machines and tried to learn how they work. Now I am
            having a lot of fun learning how the software side of technology
            works.
          </p>
          <p>
            Hobbies include learning to play the guitar, skiing, biking, and
            backpacking.
          </p>
          <p>
            <strong>
              <a href={require("../images/Resume_YangC_updatedMay2020.pdf")}>
                Click for resume.
              </a>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
