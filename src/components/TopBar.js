import React, { useEffect } from 'react'
import { Image, Nav, Navbar, NavDropdown, Button, Row, Col, Container } from 'react-bootstrap'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import { getMenu } from '../redux/slices/menuSlice';
import { selectMenuItems, setNavMenu } from '../redux/slices/menuSlice';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import academy from "../assets/images/akadimia_Logo.png"
import flag from "../assets/images/greeceFlag.png"
import "../styles/topBarStyles.css"

const TopBar = ({ activeKey }) => {
    const menuItems = useSelector(selectMenuItems)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getMenu())
    },[])

    const handleMenuSelect = (item) => {
        if (item.submenu?.length > 0) { 
            navigate("/menu") 
            dispatch(setNavMenu(item))
        }
        else { navigate(`/`) }
    }

    return (
        <>
            <Navbar className="brandBar justify-content-md-center">
                <Navbar.Brand href="/">
                    <Image className="brandImage" src={academy}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
            </Navbar>
            <Navbar className="navBar" expand="md">
            <Container>
                <Navbar.Toggle aria-controls="navbar-nav"/>
                <Navbar.Collapse className="justify-content-md-center" id="navbar-nav">
                    <Nav activeKey={activeKey} >
                        <Row className="d-flex justify-content-md-center align-items-md-center p-0">
                            {menuItems.map(item =>
                                <Col className="col-auto p-3">
                                    <Nav.Link
                                        key={`link-${item.id}`}
                                        id={item.id}
                                        eventKey={item.id} 
                                        // href={item.url}
                                        onClick={() => handleMenuSelect(item)}
                                    >
                                        {item.name}
                                    </Nav.Link>
                                </Col>
                            )}

                            <Col xs={1} lg={1}>
                                <Row className="langRow d-flex justify-content-md-center">
                                    <Col xs={4} lg={4}>
                                        <Button className="searchButton">
                                            <MagnifyingGlassIcon className="searchIcon"/>
                                        </Button>
                                    </Col>
                                    <Col xs={4} lg={4}>
                                        <Image className="flagImage" src={flag}/>
                                    </Col>
                                    <Col xs={4} lg={4}>
                                        <NavDropdown className="langDropdown" title="ΕΛ" id="lang-dropdown">
                                            <NavDropdown.Item href="/"> 
                                                <Image className="flagDropdown" src={flag}/>
                                                Ελληνικά
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider style={{backgroundColor: 'white'}}/>
                                            <NavDropdown.Item href="/">English</NavDropdown.Item>
                                        </NavDropdown>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default TopBar