import { Link, useParams } from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'

function Faqs() {
    return (
        <div>
            <Jumbotron style={{ backgroundColor: "black", textAlign: 'center' }} fluid>
                <Container>
                    <h1 style={{ color: 'white', fontFamily: "Kaushan Script', cursive" }}>The Carnivore Life</h1>
                    <p style={{ color: 'white', fontFamily: "Kaushan Script', cursive" }}>
                        This webpage serves as a space for carnivore junkies, fitness junkies, health nuts and someone looking for change
                        to congregate and soak up information.
                    </p>
                </Container>
            </Jumbotron>

        </div>
    )
}

export default Faqs