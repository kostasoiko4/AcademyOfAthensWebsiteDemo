import React, { useState } from 'react'
import { Card, Row, Col, Button, Nav } from 'react-bootstrap'

import NewsItemVertical from './NewsItemVertical';
import NewsItemHorizontal from './NewsItemHorizontal';

import news1 from "../assets/images/news1.png"
import news2 from "../assets/images/news2.png"
import news3 from "../assets/images/news3.png"
import news4 from "../assets/images/news4.png"

import "../styles/newsCardStyles.css"

const news = [
    { id: 0, image: news1, tag: 'Κέντρον Ερεύνης της Ελληνικής Λαογραφίας', title: 'Πανηγυρική Συνεδρία για τον Εορτασμό της Επετείου της 28ης Οκτωβρίου 1940, Πέμπτη 26 Οκτωβρίου 2023 και ώρα 19.00', date: '23 Οκτωβρίου 2023', description: 'Είναι πλέον κοινά παραδεκτό ότι ένας αναγνώστης αποσπάται από το περιεχόμενο που διαβάζει, όταν εξετάζει τη διαμόρφωση μίας σελίδας. Η ουσία της χρήσης του Lorem ...' },
    { id: 1, image: news2, tag: 'Κέντρον Ερε΄θνης της Ελληνικής Λαογραφίας', title: 'Πανηγυρική Συνεδρία για τον Εορτασμό της Επετείου της 28ης Οκτωβρίου 1940..', date: '23 Οκτωβρίου 2023', description: '' },
    { id: 2, image: news3, tag: 'Κέντρον Ερεύνης της Ελληνικής Φιλοσοφίας', title: 'Πανηγυρική Συνεδρία για τον Εορτασμό της Επετείου', date: '23 Οκτωβρίου 2023', description: '' },
    { id: 3, image: news4, tag: 'Ακαδημία Αθηνών', title: 'Πανηγυρική Συνεδρία για τον Εορτασμό της Επετείου της 28ης Οκτωβρίου 1940..', date: '23 Οκτωβρίου 2023', description: '' },
]

const NewsCard = () => {
    const [activeLink, setActiveLink] = useState('lectures')

    const handleLinkChange = (e) => {
        setActiveLink(e.target.eventKey)
    }

    return (
        <Card className="newsCard text-center">
            <Card.Body className="newsCardBody">
                <Row className="d-flex justify-content-center">
                    <Card.Title className="newsCardTitle">Τα Νέα μας</Card.Title>
                    <Row className="d-flex justify-content-center align-items-md-center">
                        <Nav className="researchNav justify-content-md-center" activeKey={activeLink} variant="pills">
                            <Nav.Item>
                                <Nav.Link eventKey="events" onClick={(e) => handleLinkChange(e)}>Εκδηλώσεις</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="lectures" onClick={(e) => handleLinkChange(e)}>Διαλέξεις</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="announcements" onClick={(e) => handleLinkChange(e)}>Ανακοινώσεις</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Row>

                    <Row className="justify-content-md-center mt-5">
                        {window.innerWidth > 1400 ? (
                            <>
                                <Col xs={5} lg={5}>
                                    <NewsItemVertical key={`newsItem-0`}{...news[0]}/>
                                </Col>
                                <Col xs={7} lg={7}>
                                    {news.map(item => 
                                        <>
                                            {item.id !== 0 && <NewsItemHorizontal key={`newsItem-${item.id}`} {...item}/>}
                                        </>
                                    )}
                                </Col>
                            </>
                        ) : (
                            <>
                                {news.map(item => <NewsItemVertical key={`newsItem-${item.id}`} {...item}/>)}
                            </>
                        )}
                    </Row>

                    <Button className="moreButton">Περισσότερα</Button>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default NewsCard