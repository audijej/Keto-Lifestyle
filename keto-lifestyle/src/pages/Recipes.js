import { Link, useParams } from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'

function RecipesPage() {
    return (
        <div>

            <Jumbotron fluid>
                <Container>
                    <h1 style={{color: 'black', fontFamily: "Kaushan Script', cursive"}}>Recipes</h1>
                    <p>
                        Find recipes for your favorite type of meat
                    </p>
                </Container>
            </Jumbotron>

            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://cdn4.iconfinder.com/data/icons/kitchen-vol-1/100/4-512.png" />
                    <Card.Body>
                        <Card.Title>Beef</Card.Title>
                        <Card.Text>
                            Recipes for beef
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
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
                <Card>
                    <Card.Img variant="top" src="https://cdn3.iconfinder.com/data/icons/farm-animals/128/chicken-512.png" />
                    <Card.Body>
                        <Card.Title>Chicken</Card.Title>
                        <Card.Text>
                        Recipes for poultry
      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
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
                <Card>
                    <Card.Img variant="top" src="https://cdn4.iconfinder.com/data/icons/healthy-food/164/egg-512.png" />
                    <Card.Body>
                        <Card.Title>Breakfast</Card.Title>
                        <Card.Text>
                        Recipes for breakfast
      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://cdn1.iconfinder.com/data/icons/thanksgiving-related-solid/64/autumn_thanksgiving-06-512.png" />
                    <Card.Body>
                        <Card.Title>Turkey</Card.Title>
                        <Card.Text>
                        Recipes for turkey
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

export default RecipesPage