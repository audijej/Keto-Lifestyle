import { Link, useParams } from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'

function About() {
    return(
        <div>
            <Jumbotron style={{backgroundColor: "black", textAlign: 'center'}} fluid>
                <Container>
                    <h1 style={{color: 'white', fontFamily: "Kaushan Script', cursive"}}>The Carnivore Life</h1>
                    <p style={{color: 'white', fontFamily: "Kaushan Script', cursive"}}>
                       This webpage serves as a space for carnivore junkies, fitness junkies, health nuts and someone looking for change
                       to congregate and soak up information.
                    </p>
                </Container>
            </Jumbotron>

            <div id="bodyBackground">
    <div class="shadow p-3 mb-5 bg-black rounded">
      <Row>

      <Col lg={6}>
          <img src="https://via.placeholder.com/500"></img>
    {/* <Image className="img-fluid" id="portfolioImage" style={{height:"auto", width: "auto", textAlign:"center", paddingTop: "75px"}} src={PortfolioImage} alt="PortfolioImage" rounded/> */}
    </Col>

        <Col>
    <h1 id="interests" style={{color:"black"}}>Hello. My name is Carnivore Grace</h1>
    <br></br>
    <h3>Join me thru my nutrition journey</h3>
    <br></br>

    <p id="aboutParagraph">

    </p>

    </Col>

    <Col>
   <h1 id="interests">Interests</h1>
   <br></br>
    <p>Web Development</p>
    <p>Design</p>
    <p>Photography</p>
    <p>Videography</p>
    <p>Snowboarding</p>
    <p>Traveling</p>
    <p>Motorcycles</p>
    <br></br>

    <Link
    to="/portfolio"
    className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
    <h1>See my <span style={{color: "gold"}}> projects</span> here</h1>
    </Link>

    <Link
    to="/photos"
    className={window.location.pathname === "/photos" ? "nav-link active" : "nav-link"}
            >
    <h1>See my <span style={{color: "gold"}}> photos</span> here</h1>
    </Link>

    <Row>
      <Col>
      <h1>Languages</h1>

      <p>HTML</p>
      <p>CSS</p>
      <p>Javascript</p>
      <p>node.js</p>
      <p>jquery</p>
      <p>JSON</p>
      <p>SQL</p>
      <p>Sequelize</p>
      <p>Mongo</p>
      <p>Mongoose</p>
      <p>React</p>
      </Col>
      
    </Row>
    </Col>

   
     
    </Row>

   
  </div>

   
</div>

        </div>
    )
}

export default About