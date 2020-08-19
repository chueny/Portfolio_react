import React from "react";
import Projects from "./Projects.js";


export default function Portfolio() {

    const styleObj = {
        color: "rebeccapurple",
        fontWeight: "bold",
        fontSize: "35px",
      };

  return (
<div className= "container">
    <div className="row">
       <div className="col-md-12">
            <div className="page-header jumbotron">                                
                <h1 className="display-4 lead my-4" style={styleObj}> Portfolio</h1>
                <hr></hr>
            </div>
        </div>
    </div>

    <div className="row">
        <div className="col-md-6">
            <img src={require("../images/scheduler.png")} alt="Scheduler App" className="img-thumbnail"/>
            <button><a href="https://github.com/chueny/WorkDayScheduler">GitHub</a></button>
            <button><a href="https://chueny.github.io/WorkDayScheduler/">View App</a></button>
        </div>
   

        <div className="col-md-6">
            <img src={require("../images/WeatherAPI.png")} alt="Weather App" className="img-thumbnail"/>
            <button><a href="https://github.com/chueny/WeatherApp">GitHub</a></button>
            <button><a href="https://chueny.github.io/WeatherApp/">View App</a></button>
        </div>
    </div>

    <div className="row">
        <div className="col-md-6">
            <img src={require("../images/teamGenerator.png")} alt="Team Generator App" className="img-thumbnail"/>
            <button><a href="https://github.com/chueny/CLI-Employee-Summary">GitHub</a></button>
            <button><a href="https://chueny.github.io/CLI-Employee-Summary/">View App</a></button>
        </div>

        <div className="col-md-6">
            <img src={require("../images/toDoApp.png")} alt="ToDo App" className="img-thumbnail"/>
            <button><a href="https://github.com/chueny/InspirationalToDo">GitHub</a></button>
            <button><a href="https://chueny.github.io/InspirationalToDo/">View App</a></button>
        </div>
    </div>

    <div className="row">
        <div className="col-md-6">
            <img src={require("../images/NoteTaker.png")} alt="Note Taker App" className="img-thumbnail"/>
            <button><a href="https://github.com/chueny/Note-Taker-Express">GitHub</a></button>
            <button><a href="https://morning-retreat-67874.herokuapp.com/">View App</a></button>
        </div>

        <div className="col-md-6">
            <img src={require("../images/Wheels-Up.png")} alt="Wheels Up App" className="img-thumbnail"/>
            <button><a href="https://github.com/chueny/Wheels-Up">GitHub</a></button>
            <button><a href="https://wheels-up.herokuapp.com/">View App</a></button>
        </div>
    </div>

    <div className="row">
        <div className="col-md-6">
            <img src={require("../images/burger.png")} alt="Burger App" className="img-thumbnail"/>
            <button><a href="https://github.com/chueny/Note-Taker-Express">GitHub</a></button>
            <button><a href="https://burger-chueny.herokuapp.com/">View App</a></button> 
        </div>
    </div>
 </div>
);
}