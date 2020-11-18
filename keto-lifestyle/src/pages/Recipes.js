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

            <Jumbotron style={{backgroundColor: "purple", textAlign: 'center'}} fluid>
                <Container>
                    <h1 style={{color: 'white', fontFamily: "Kaushan Script', cursive"}}>Recipes</h1>
                    <p style={{color: 'white', fontFamily: "Kaushan Script', cursive"}}>
                        Find recipes for your favorite type of meat
                    </p>
                </Container>
            </Jumbotron>

            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://cdn4.iconfinder.com/data/icons/kitchen-vol-1/100/4-512.png" />
                    <Card.Body>
                        <Card.Title>
                        <Link
                            
                            to="/beef"
                            className={
                                window.location.pathname === "/beef" || window.location.pathname === "/beef"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Beef
              </Link>
                        </Card.Title>
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
                        <Card.Title>
                        <Link
                            to="/pork"
                            className={
                                window.location.pathname === "/pork" || window.location.pathname === "/pork"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Pork
              </Link>
                        </Card.Title>
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
                        <Card.Title>
                        <Link
                            to="/chicken"
                            className={
                                window.location.pathname === "/chicken" || window.location.pathname === "/chicken"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Chicken
              </Link>
                        </Card.Title>
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
                        <Card.Title>
                        <Link
                            to="/lamb"
                            className={
                                window.location.pathname === "/lamb" || window.location.pathname === "/lamb"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Lamb
              </Link>
                        </Card.Title>
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
                        <Card.Title>
                        <Link
                            to="/seafood"
                            className={
                                window.location.pathname === "/seafood" || window.location.pathname === "/seafood"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Seafood
              </Link>
                        </Card.Title>
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
                        <Card.Title>
                        <Link
                            to="/breakfast"
                            className={
                                window.location.pathname === "/breakfast" || window.location.pathname === "/breakfast"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Breakfast
              </Link>
                        </Card.Title>
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
                        <Card.Title>
                        <Link
                            to="/turkey"
                            className={
                                window.location.pathname === "/turkey" || window.location.pathname === "/turkey"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Turkey
              </Link>
                        </Card.Title>
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