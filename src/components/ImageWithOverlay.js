import React from 'react'
import { Image, Button, Card } from 'react-bootstrap'

import '../styles/imageWithOverlayStyles.css'

const ImageWithOverlay = ({ image, title, buttonText }) => {
  return (
    <>
        <Image className="overlayImage" src={image}/>
        <Card className="overlayCard">
            <Card.Body className="overlayCardBody">
                <Card.Title className="overlayTitle">{title}</Card.Title>
                <Button className="overlayButton">{buttonText}</Button>
            </Card.Body>
        </Card>
    </>
  )
}

export default ImageWithOverlay