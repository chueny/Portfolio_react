import React from 'react'; // Import the Component component from React
// import {Link} from 'react-router-dom'; // Import the Link component
import './App.css';
import projects from "../components/projects.json";

 
function Thumbnail() {
  return (
    <div class="row">
        {projects.map((project) => (
          <div class="col-md-6">
            <div className="card" style={{ width: "20rem", margin: "10px" }}>
              <img className="card-img-top" src={`${project.image}`} alt="Card cap" />
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
      </div>
  );
}
 
export default Thumbnail;