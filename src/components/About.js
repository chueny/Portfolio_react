import React from "react";
import "./App.css";

function About() {
  const styleObj = {
    color: "rebeccapurple",
    fontWeight: "bold",
    fontSize: "35px",
  };


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="page-header" className="jumbotron">
            <h1
              className="display-4"
              className="lead"
              className="my-4"
              style={styleObj}
            >
              {" "}
              About Me
            </h1>
            <hr></hr>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 col-xs-3">
          <img src="../images/chue.jpg"/>
        </div>

        <div className="col-md-9 col-xs-9">
          <p>
            I am currently working on a certificate in Full Stack Development at
            the University of Minnesota. Previously, I worked in operations
            manager positions and fell in love with tech and rapid prototyping
            leading to my current pursuit of Full Stack Development as a career.
          </p>
          <p>
            My favorite experiences at work has been in a makerspace, learning
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
            <stron>
              <a href="./images/Resume_YangC_updatedMay2020.pdf">
                Click for resume.
              </a>
            </stron>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
