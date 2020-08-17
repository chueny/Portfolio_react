import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
      <a className="navbar-brand" href="/">
        Chue Yang
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li class="nav-item">
            <Link
              to="/about"
              className={
                location.pathname === "/about" ? "nav-link active" : "nav-link"
              }
            >
              About me
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              to="/portfolio"
              className={
                location.pathname === "/portfolio"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Portfolio
            </Link>
          </li>{" "}
          */}
          <li class="nav-item">
            <Link
              to="/contact"
              className={
                location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavTabs;
