import React from 'react'
import { Image, Nav, Navbar, NavDropdown, Button, Container, Row, Col } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

import academy from "../assets/images/akadimia_Logo.png"
import espa from "../assets/images/espaLogo.png"
import "../styles/footerStyles.css"

const Footer = () => {
  return (
    <>
        <Navbar className="footerBarMain justify-content-md-center">
            <Container className="justify-content-md-center">
                <Row className="justify-content-md-center">
                    {/* <Navbar.Brand href="/" style={{float: 'center'}}>
                        <Image className="footerImage" src={academy}/>
                    </Navbar.Brand> */}
                    {/* <Navbar.Toggle aria-controls="navbar-nav" /> */}

                    <Col className="col-auto" style={{marginLeft: '-30px', marginBottom: '20px'}}><Image className="footerImage" src={academy}/></Col>
               
                    <Col xs={12} lg={12}>
                        <Row className="justify-content-md-center">
                            <Button className="mediaButton">
                                <FaFacebookF className="mediaIcon"/>
                            </Button>
                            <Button className="mediaButton">
                                <FaInstagram className="mediaIcon"/>
                            </Button>
                            <Button className="mediaButton">
                                <FaYoutube className="mediaIcon"/>
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container>
                <p className="footerText">
                <h3 className="footerTitle">ΕΠΙΚΟΙΝΩΝΙΑ</h3>
                    <div>Πανεπιστημίου 28, 106 79 Αθήνα</div>
                    <div>Τ: 210 3634700</div>
                    <div>F: 210 3634806</div>
                    <div>E-mail: info@academyofathens.gr</div>
                </p>
            </Container>

            <Container>
                <Nav>
                    <p className="footerText">
                    <h3 className="footerTitle">ΧΡΗΣΙΜΕΣ ΠΛΗΡΟΦΟΡΙΕΣ</h3>
                        <div href="/" className="footerLink">Ευρετήριο Προσώπων</div>
                        <div href="/" className="footerLink">Πρόσβαση</div>
                        <div href="/" className="footerLink">Δικαιώματα</div>
                        <div href="/" className="footerLink">Προκηρύξεις</div>
                    </p>
                    {/* <Nav.Link href="/">Ευρετήριο Προσώπων</Nav.Link>
                    <Nav.Link href="/">Πρόσβαση</Nav.Link>
                    <Nav.Link href="/">Δικαιώματα</Nav.Link>
                    <Nav.Link href="/">Προκηρύξεις</Nav.Link> */}
                </Nav>
            </Container>
        </Navbar>

        <Navbar className="footerBarProgram justify-content-md-center">
            <Navbar.Brand href="/">
                <Image className="programImage" src={espa}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
        </Navbar>

        <Navbar className="footerBarRights justify-content-md-center">
            <div className='rightsText'>© 2023 Dotsoft. All Rights Reserved.</div>
        </Navbar>
    </>
  )
}

export default Footer