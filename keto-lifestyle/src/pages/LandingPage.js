import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron';
import '../App.css'

function LandingPage() {
    return(
        <div>
<Jumbotron id='landingPageJumbotron'>
    <h1>The Carnivore Life</h1>
    <h2>Lifestyle | Recipes | Blog</h2>
</Jumbotron>
        </div>
    )
}

export default LandingPage