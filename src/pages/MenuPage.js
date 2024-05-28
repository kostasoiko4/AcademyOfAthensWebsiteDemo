import React, { useEffect, useState } from 'react'
import { Nav, Row, Col, ListGroup, Card } from 'react-bootstrap'
import { GoChevronRight, GoChevronDown } from "react-icons/go";
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'

import { selecetNavMenu } from '../redux/slices/menuSlice';
import { useSelector } from 'react-redux';

import '../styles/menuPageStyles.css'

const MenuPage = () => {
    const menu = useSelector(selecetNavMenu)
    const [activeItem, setActiveItem] = useState(menu.submenu[0])
    const [selected, setSelected] = useState(0)

    useEffect(() => {
        setActiveItem(menu.submenu[0])
    },[menu])

    const handleMenuChange = (item) => {
        setActiveItem(item)
    }

    return (
        <>
            <TopBar activeKey={menu.id}/>
                <Card>
                    <Card.Body>
                        <Row className="justify-content-md-center mb-5">
                            <Col className="col-auto">
                                <div className="menuNavWrapper">
                                    <Nav className="menuNav flex-column" activeKey={activeItem.id}>
                                        {menu.submenu.map(item => 
                                            <Nav.Link 
                                                key={`menu-link-${item.id}`} 
                                                eventKey={item.id}
                                                onClick={() => handleMenuChange(item)}
                                            >{item.name}</Nav.Link>)}
                                    </Nav>
                                </div>
                            </Col>
                            <Col>
                            {console.log()}
                            <Card.Title className="text-center">{activeItem.name}</Card.Title>
                                {activeItem.submenu.length > 0 && 
                                    <ListGroup variant="flush">
                                        {activeItem.submenu.map(subItem => 
                                            <ListGroup.Item 
                                                key={`subitem-${subItem.id}`}
                                                className="menuListItem d-flex justify-content-between align-items-start"
                                                onClick={() => setSelected(selected === subItem.id ? 0 : subItem.id)}
                                            >
                                                {subItem.name}
                                                {selected === subItem.id ? <GoChevronDown key={`chevron-down-${subItem.id}`} className="menuListIcon"/> : <GoChevronRight key={`chevron-right-${subItem.id}`} className="menuListIcon"/>}
                                            </ListGroup.Item>
                                        )}
                                    </ListGroup>
                                }
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            <Footer/>
        </>
  )
}

export default MenuPage