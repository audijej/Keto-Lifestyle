import { Link, useParams } from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'

function Seafood() {
    return(
        <div>
            <Jumbotron style={{backgroundColor: "purple", textAlign: 'center'}} fluid>
                <Container>
                    <h1 style={{color: 'black', fontFamily: "Kaushan Script', cursive"}}>Seafood Recipes</h1>
                    <p>
                        Try a Seafood recipe below
                    </p>
                </Container>
            </Jumbotron>

            <CardGroup>
            <Card>
                    <Card.Img variant="top" src="https://cdn4.iconfinder.com/data/icons/eldorado-medicine/40/fish-512.png" />
                    <Card.Body>
                        <Card.Title>Seafood</Card.Title>
                        <Card.Text>
                        Recipes for seafood
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

export default Seafood