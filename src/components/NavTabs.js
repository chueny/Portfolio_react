import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
      <a className="navbar-brand" href="/">
        Chue Yang
      </a>
      <div className="navbar-nav" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li class="nav-item">
            <Link
              to="/about"
              className={
                location.pathname === "/about" ? "nav-link active" : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              to="/projects"
              className={
                location.pathname === "/projects"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Projects
            </Link>
          </li>
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
