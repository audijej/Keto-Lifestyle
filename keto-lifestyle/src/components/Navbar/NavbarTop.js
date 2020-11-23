import React from "react";
import { Link } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./navbarStyle.css";


function NavbarTop() {
    return (

        
        <nav className="navbar navbar-expand-lg navbar-dark justify-content-center" id="headerNavbar">
            <div>
                <Link className="navbar-brand" to="/">
                    <h1 id="navbarTabTop">The Carnivore Chronicles</h1>
                </Link>
            </div>
        </nav>
        
    );
}

export default NavbarTop;
