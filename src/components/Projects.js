import React from "react";
import Thumbnail from "./Thumbnail.js";
import "./App.css";
// import projects from "../components/projects.json";

function Projects(props) {
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
              Projects
            </h1>
            <hr></hr>
      
      {/* <div class="row">
        {projects.map((project) => (
          <div class="col-md-6">
            <div className="card" style={{ width: "20rem", margin: "10px" }}>
              <img className="card-img-top" src="" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <a href={project.gitLink} className="btn btn-primary">
                  GitHub
                </a>
                <p></p>
                <a href={project.appLink} className="btn btn-primary">
                  View App
                </a>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Projects;
