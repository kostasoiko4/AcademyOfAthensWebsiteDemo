import React from 'react'
import { Card, Button, Row } from 'react-bootstrap'

import CarouselInline from './CarouselInline';

import "../styles/publicationsCardStyles.css"

import { selectPublicationsItems } from '../redux/slices/publicationsSlice';
import { useSelector } from 'react-redux';

const PublicationsCard = () => {
    const cards = useSelector(selectPublicationsItems)

    return (
        <Card className="publicationsCard text-center">
            <Card.Body className="d-flex justify-content-md-center" style={{width: '100%'}}>
                <Row className="justify-content-md-center">
                    <Card.Title className="publicationsTitle">Εκδόσεις</Card.Title>
                    <Card.Text className="publicationsText">
                        Είναι πλέον κοινά παραδεκτό ότι ένας αναγνώστης αποσπάται από το περιεχόμενο που διαβάζει, όταν εξετάζει τη διαμόρφωση μίας σελίδας.      
                    </Card.Text>
                    <CarouselInline cards={cards}/>
                    <Row className="justify-content-md-center"><Button className="moreButton">Περισσότερα</Button></Row>
                </Row>
            </Card.Body>
        </Card>
      )
}

export default PublicationsCard