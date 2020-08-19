import React from "react";

function Contact(){

    const styleObj = {
        color: "rebeccapurple",
        fontWeight: "bold",
        fontSize: "35px",
      };

 return(
      <section style={{ height: "90vh", backgroundColor: "white" }} className="container">
      <div className="row">
        <div style={{height: "25vh"}} className="col-md-12">
          <div style={{ backgroundColor: "white"}} className="page-header jumbotron">
            <h1 className="display-1 lead my-1" style={styleObj}>
              Contact
            </h1>
            <hr></hr>
          </div>
        </div>
      </div>
     
        <form>
          <p><strong>GitHub: </strong><a href="https://github.com/chueny">chueny</a></p>
          <p> <strong>LinkedIn: </strong><a href="https://www.linkedin.com/in/chueyang/">  chueyang</a></p>
          <p> <strong>Email: </strong>chueyangib[@]gmail.com</p>
          <p><strong>Phone: </strong>414-469-3284</p>
        </form>
    </section>

 );
}

export default Contact;