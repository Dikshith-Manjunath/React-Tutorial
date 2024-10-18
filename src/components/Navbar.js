import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";


export default function Navbar(props) {

  const navLinkStyle = ({isActive}) => {
    return{
      color: isActive ? '#31363F' : 'grey'
    }
  }
  
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#" style={navLinkStyle}>{props.title}</NavLink>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/" style={navLinkStyle}>
                  Home 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="about" style={navLinkStyle}>
                  {props.aboutText}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="products" style={navLinkStyle}>
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'} mx-4`}>
            <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark/Light Mode</label>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit" >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

// Navbar.defaultProps = {
//     title: 'React App',
//     aboutText: 'About'
// };
