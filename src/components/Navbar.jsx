import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar(props) {
  const location = useLocation();

  const modeText =
    props.mode === "light" ? "Enable Dark Mode" : "Enable Light Mode";

  const closeNavbar = () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    if (navbarToggler && window.innerWidth <= 991) {
      navbarToggler.click();
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" >
        <b style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '1.2em'}}>
    {props.title}
  </b> 
        </NavLink>
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
              <NavLink
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                to="/"
                onClick={closeNavbar}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                to="/about"
                onClick={closeNavbar}
              >
                About
              </NavLink>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={() => { props.toggleMode(); closeNavbar(); }}
            />
            <label
              className="form-check-label mx-2"
              htmlFor="flexSwitchCheckDefault"
            >
              {modeText}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
