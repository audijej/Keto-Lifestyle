import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import '../App.css'

function LandingPage() {
    return (
        <div style={{ backgroundColor: 'black' }}>

            <Jumbotron id='landingPageJumbotron' fluid>
                <Container>
                    <div class="hero-text">
                        <h1>The Carnivore Life</h1>
                        <h2><i class="fas fa-bacon"></i> <i class="fas fa-utensils"></i> Meat |Lifestyle | Recipes | Blog <i class="fas fa-utensils"></i> <i class="fas fa-drumstick-bite"></i></h2>
                    </div>
                </Container>
            </Jumbotron>

        </div>
    )
}

export default LandingPage