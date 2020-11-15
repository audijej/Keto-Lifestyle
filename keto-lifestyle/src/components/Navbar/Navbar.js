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
                            className={window.location.pathname === "/recipes" ? "nav-link active" : "nav-link"}
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
                            to="/faqs"
                            className={window.location.pathname === "/faqs" ? "nav-link active" : "nav-link"}
                        >
                            Keto Challenge
              </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            id="navbarTab"
                            to="/challenge"
                            className={window.location.pathname === "/challenge" ? "nav-link active" : "nav-link"}
                        >
                            Keto Calculator
              </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            id="navbarTab"
                            to="/calculator"
                            className={window.location.pathname === "/calculator" ? "nav-link active" : "nav-link"}
                        >
                            Fitness | Workout Plans
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
                            <Dropdown.Item href="#/action-1">
                            <Link
                            id="navbarTabDropdown"
                            to="/beef"
                            className={window.location.pathname === "/beef" ? "nav-link active" : "nav-link"}
                        >
                            Beef
                        </Link>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                            <Link
                            id="navbarTabDropdown"
                            to="/pork"
                            className={window.location.pathname === "/pork" ? "nav-link active" : "nav-link"}
                        >
                            Pork
                        </Link>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                            <Link
                            id="navbarTabDropdown"
                            to="/chicken"
                            className={window.location.pathname === "/chicken" ? "nav-link active" : "nav-link"}
                        >
                            Chicken
                        </Link>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                            <Link
                            id="navbarTabDropdown"
                            to="/lamb"
                            className={window.location.pathname === "/lamb" ? "nav-link active" : "nav-link"}
                        >
                            Lamb
                        </Link>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                            <Link
                            id="navbarTabDropdown"
                            to="/seafood"
                            className={window.location.pathname === "/seafood" ? "nav-link active" : "nav-link"}
                        >
                            Seafood
                        </Link>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                            <Link
                            id="navbarTabDropdown"
                            to="/turkey"
                            className={window.location.pathname === "/turkey" ? "nav-link active" : "nav-link"}
                        >
                            Turkey
                        </Link>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1">
                            <Link
                            id="navbarTabDropdown"
                            to="/breakfast"
                            className={window.location.pathname === "/breakfast" ? "nav-link active" : "nav-link"}
                        >
                            Breakfast
                        </Link>
                            </Dropdown.Item>
                        </DropdownButton>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
