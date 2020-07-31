import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">

        <Link className="navbar-brand" to="/">MetaDapp</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link ml-3 ml-md-0" to="/">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link ml-3 ml-md-0" to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar;