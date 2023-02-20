import React, { Component } from 'react'
import { Link } from 'react-router-dom';





export default class Navbar extends Component {
   

  
  render() {
 
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand nav-link" to="/">
   
              MonkeyNews
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active nav-link list-group-item list-group-item-action list-group-item-light mt-2"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link list-group-item list-group-item-action list-group-item-light mt-2"
                    to="/About"
                  >
                    about
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link list-group-item list-group-item-action list-group-item-light mt-2"
                    to="/Business"
                  >
                    business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link list-group-item list-group-item-action list-group-item-light mt-2"
                    to="/Entertainment"
                  >
                    entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link list-group-item list-group-item-action list-group-item-light mt-2"
                    to="/General"
                  >
                    general
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link list-group-item list-group-item-action list-group-item-light mt-2"
                    to="/Health"
                  >
                    health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link list-group-item list-group-item-action list-group-item-light mt-2"
                    to="/Science"
                  >
                    science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link list-group-item list-group-item-action list-group-item-light mt-2"
                    to="/Sports"
                  >
                    sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link list-group-item list-group-item-action list-group-item-light mt-2"
                    to="/Technology"
                  >
                    technology
                  </Link>
                </li>

                <form className="d-flex" role="search" >
                  <input
                    className="form-control me-2"
                    style={{ marginLeft: "500px" }}
                    
                    type="search"
                  placeholder="Search"
                    aria-label="Search"
                  />
                  
                  
                </form>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}


