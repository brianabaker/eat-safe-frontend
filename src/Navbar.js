import React from 'react'
import {Link} from 'react-router-dom'
import './styles/navbar.css';

// Links

const Navbar = (props) => {
  return(
    <div className="navbar">
      <nav class="navbar-items">
        <div className="navbar-link navbar-title">
          <Link to={'/'}>EatSafe.</Link>
        </div>
        <div className="navbar-link">
          About
        </div>
        <div className="navbar-link">
          Contact
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
