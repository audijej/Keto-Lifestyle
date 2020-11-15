import { Link, useParams } from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'

function Pork() {
    return(
        <div>
            <Jumbotron style={{backgroundColor: "purple", textAlign: 'center'}} fluid>
                <Container>
                    <h1 style={{color: 'black', fontFamily: "Kaushan Script', cursive"}}>Pork Recipes</h1>
                    <p>
                        Try a Pork recipe below
                    </p>
                </Container>
            </Jumbotron>

            <CardGroup>
            <Card>
                    <Card.Img variant="top" src="https://cdn1.iconfinder.com/data/icons/mammals-i/300/22-512.png" />
                    <Card.Body>
                        <Card.Title>Pork</Card.Title>
                        <Card.Text>
                        Recipes for pork
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                </CardGroup>
        </div>
    )
}

export default Pork