import React from "react";
import Thumbnail from "./Thumbnail.js";
import "./App.css";

function Projects(props) {
  const styleObj = {
    color: "rebeccapurple",
    fontWeight: "bold",
    fontSize: "35px",
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="page-header jumbotron">
            <h1 className="display-4 lead my-4" style={styleObj}>
              {" "}
              Portfolio
            </h1>
            <hr></hr>
          </div>
        </div>
      </div>

      <section style={{ height: "75vh" }}>
        <Thumbnail link="" image="" title="" category="" />
      </section>
    </div>
  );
}

export default Projects;
