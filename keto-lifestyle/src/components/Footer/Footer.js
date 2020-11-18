import React from "react";
import "./footer.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Footer() {
    return (
        <footer className="footer">

            <Row>
                <Col>
                    <div>
                        <h4>About</h4>
                        <p>Meet Grace</p>
                        <p>Contact</p>
                    </div>
                </Col>

                <Col>
                    <div>
                        <h4>Social</h4>
                        {/* <ul class="contacts"> */}
                        <li class="social-media-icon"><a
                            href="https://www.linkedin.com/in/jesse-a-0617881a2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkIR0XT9mQlaD%2F6EEsl6UAQ%3D%3D"
                            target="blank"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
                        <li class="social-media-icon"><a href="https://github.com/audijej" target="blank"><i
                            class="fab fa-github"></i></a></li>
                        <li class="social-media-icon"><a href="https://www.instagram.com/jesse_behind_the_camera/" target="blank"><i
                            class="fab fa-instagram-square"></i></a></li>
                        <li class="social-media-icon"><a href="https://www.instagram.com/jesse_behind_the_camera/" target="blank"><i class="fab fa-facebook"></i></a></li>
                        <li class="social-media-icon"><a href="https://www.instagram.com/jesse_behind_the_camera/" target="blank"><i class="fab fa-youtube"></i></a></li>
                        <li class="social-media-icon"><a href="https://www.instagram.com/jesse_behind_the_camera/" target="blank"><i class="fa fa-twitter"></i></a></li>

                        {/* </ul> */}
                    </div>
                </Col>

            </Row>

            <Row style={{ textAlign: "center" }}>
                <div>
                    {/* <h4 style={{ color: "white" }}>Built with React</h4>
            <i class="fab fa-react" style={{ color: "blue" }}></i> */}
                    <h5 style={{ color: "white" }}>Project By: Grace</h5>
                    <h5 style={{ color: "white" }}>© 2020 Keto Grace All Rights Reserved</h5>
                </div>
            </Row>



        </footer>

        // <div className="footer">
        //     <p>This is some content in sticky footer</p>
        // </div>
    )
}

export default Footer;
