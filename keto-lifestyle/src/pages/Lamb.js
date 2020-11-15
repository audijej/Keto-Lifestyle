import { Link, useParams } from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'

function Lamb() {
    return(
        <div>
            <Jumbotron style={{backgroundColor: "purple", textAlign: 'center'}} fluid>
                <Container>
                    <h1 style={{color: 'black', fontFamily: "Kaushan Script', cursive"}}>Lamb Recipes</h1>
                    <p>
                        Try a Lamb recipe below
                    </p>
                </Container>
            </Jumbotron>

            <CardGroup>
            <Card>
                    <Card.Img variant="top" src="https://cdn3.iconfinder.com/data/icons/mammal/100/__-06-512.png" />
                    <Card.Body>
                        <Card.Title>Lamb</Card.Title>
                        <Card.Text>
                        Recipes for lamb
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

export default Lamb