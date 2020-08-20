import React from "react";

function Contact(){

  const styleObj = {
    color: "rebeccapurple",
    fontWeight: "bold",
    fontSize: "35px",
    padding: "left",
    marginTop: "30px",
  };

 return(
  <section style={{ height: "90vh"}} className="container">
  <h1 style={styleObj}>
    Contact
  </h1>
  <hr></hr>
     
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