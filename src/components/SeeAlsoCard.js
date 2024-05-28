import React from 'react'
import { Image, Card, Row, Col } from 'react-bootstrap'
 
import ImageWithOverlay from './ImageWithOverlay';

import see1 from "../assets/images/see1.png"
import see2 from "../assets/images/see2.png"
import see3 from "../assets/images/see3.png"

import image2 from "../assets/images/headerImage2.png"
import "../styles/seeAlsoCardStyles.css"

const moreItems = [
    { id: 0, image: see1, title: 'Ακαδημία Αθηνών', buttonText: 'Πλοηγηθείτε' },
    { id: 1, image: see2, title: 'Αποθετήριο Ακαδημίας', buttonText: 'Εξερευνήστε' },
    { id: 2, image: see3, title: 'Κεντρική Βιβλιοθήκη', buttonText: 'Πλοηγηθείτε' },
]

const SeeAlsoCard = () => {
    return (
        <Card className="seeAlsoCard text-center">
            <Card.Body className="seeAlsoCardBody">
                <Row className="d-flex justify-content-md-center">
                    <Card.Title className="seeAlsoCardTitle">Δείτε επίσης</Card.Title>
                    <Row className="justify-content-md-center">
                        {moreItems.map(item => 
                            <Col key={item.id} className="col-auto mb-4">
                                <ImageWithOverlay key={`overlay-${item.id}`} {...item}/>
                            </Col>
                        )}
                    </Row>

                    <Image className="seeAlsoBanner" src={image2}/>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default SeeAlsoCard