import React from 'react'
import { Card, Button, Row } from 'react-bootstrap'

import CarouselInline from './CarouselInline';

import bank from "../assets/icons/bankIcon.png"
import "../styles/researchCardStyles.css"

const cards = [
    { id: 0, title: 'Κέντρον Ερεύνης της Αρχαιότητος', icon: bank },
    { id: 1, title: 'Κέντρο Ερεύνης Φυσικής της Ατμόσφαιρας και Κλιματολογίας', icon: bank },
    { id: 2, title: 'Κέντρον Ερεύνης της Ελληνικής Λαογραφίας', icon: bank },
    { id: 3, title: 'Κέντρον Ερεύνης Νεοελληνικών Διαλέκτων και Ιδιωμάτων Ι.Λ.Ν.Ε', icon: bank },
]

const ResearchCard = () => {
  return (
    <Card className="researchCard text-center">
        <Card.Body className="d-flex justify-content-md-center" style={{width: '100%'}}>
          <Row className="d-flex justify-content-md-center">
            <Card.Title className="researchTitle">Ερευνητικά Κέντρα</Card.Title>
            <Card.Text className="researchText">
                Είναι πλέον κοινά παραδεκτό ότι ένας αναγνώστης αποσπάται από το περιεχόμενο που διαβάζει, όταν εξετάζει τη διαμόρφωση μίας σελίδας. Η ουσία της χρήσης του Lorem Ipsum είναι ότι έχει λίγο-πολύ μία ομαλή κατανομή γραμμάτων.            
            </Card.Text>
            <CarouselInline cards={cards}/>
            <Row className="d-flex justify-content-md-center"><Button className="moreButton">Περισσότερα</Button></Row>
            </Row>
        </Card.Body>
    </Card>
  )
}

export default ResearchCard