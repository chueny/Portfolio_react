import React from "react";


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
            <div className="page-header" className="jumbotron">                                
                <h1 className="display-4" className="lead" className="my-4" style={styleObj}> Portfolio</h1>
                <hr></hr>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6">
            <img src="././images/scheduler.png" alt="Scheduler App" class="img-thumbnail"/>
            <button><a href="https://github.com/chueny/WorkDayScheduler">GitHub</a></button>
            <button><a href="https://chueny.github.io/WorkDayScheduler/">View App</a></button>
        </div>
   

        <div class="col-md-6">
            <img src="images/WeatherAPI.png" alt="Weather App" class="img-thumbnail"/>
            <button><a href="https://github.com/chueny/WeatherApp">GitHub</a></button>
            <button><a href="https://chueny.github.io/WeatherApp/">View App</a></button>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6">
            <img src="images/teamGenerator.png" alt="Team Generator App" class="img-thumbnail"/>
            <button><a href="https://github.com/chueny/CLI-Employee-Summary">GitHub</a></button>
            <button><a href="https://chueny.github.io/CLI-Employee-Summary/">View App</a></button>
        </div>

        <div class="col-md-6">
            <img src="images/toDoApp.png" alt="ToDo App" class="img-thumbnail"/>
            <button><a href="https://github.com/chueny/InspirationalToDo">GitHub</a></button>
            <button><a href="https://chueny.github.io/InspirationalToDo/">View App</a></button>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6">
            <img src="images/NoteTaker.png" alt="Note Taker App" class="img-thumbnail"/>
            <button><a href="https://github.com/chueny/Note-Taker-Express">GitHub</a></button>
            <button><a href="https://morning-retreat-67874.herokuapp.com/">View App</a></button>
        </div>

        <div class="col-md-6">
            <img src="images/Wheels-Up.png" alt="Wheels Up App" class="img-thumbnail"/>
            <button><a href="https://github.com/chueny/Wheels-Up">GitHub</a></button>
            <button><a href="https://wheels-up.herokuapp.com/">View App</a></button>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6">
            <img src="images/burger.png" alt="Burger App" class="img-thumbnail"/>
            <button><a href="https://github.com/chueny/Note-Taker-Express">GitHub</a></button>
            <button><a href="https://burger-chueny.herokuapp.com/">View App</a></button> 
        </div>
    </div>
 </div>
);
}