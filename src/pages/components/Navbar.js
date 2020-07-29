import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" href="#">MetaDapp</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <p>Hahaha</p>
          {/* <li className="nav-item active">
            <NavLink className="nav-link" href="#">Home <span class="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" href="#">Features</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" href="#">Pricing</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;