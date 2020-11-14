import React from "react";
import { Link } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import "./navbarStyle.css";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <Link className="navbar-brand" to="/">
                <h1 id="navbarTab">Keto Lifestyle</h1>
            </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            id="navbarTab"
                            to="/about"
                            className={
                                window.location.pathname === "/about" || window.location.pathname === "/about"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            About
              </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            id="navbarTab"
                            to="/recipes"
                            className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                        >
                            Recipes
              </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            id="navbarTab"
                            to="/photos"
                            className={window.location.pathname === "/photos" ? "nav-link active" : "nav-link"}
                        >
                            FAQs
              </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            id="navbarTab"
                            to="/contact"
                            className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                        >
                            Contact
              </Link>
                    </li>

                    <DropdownButton id="dropdown-basic-button" title="Recipes">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
