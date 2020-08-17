import React from "react";

function Contact(){

    const styleObj = {
        color: "rebeccapurple",
        fontWeight: "bold",
        fontSize: "35px",
      };

 return(

    <div>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
        <a className="navbar-brand" href="#" style={fontWeight="bold"} >Chue Yang</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item ">
              <a class="nav-link" href="index.html">About Me</a> 
            </li>
            <li class="nav-item">
              <a class="nav-link" href="portfolio.html">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
        </nav> */}
 
      <section class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="page-header" class="jumbotron">                                
               <h1 class="display-4" class="lead" class="my-4" style={styleObj}> Contact</h1>
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
</div>

 );
}

export default Contact;