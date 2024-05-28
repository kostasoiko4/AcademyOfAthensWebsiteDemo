import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'

import '../styles/cardItemStyles.css'

const CardItem = ({ title, icon, image }) => {
  return (
    <Col className="col-auto">
        <Card border="light" className="cardItem bg-white shadow-sm mb-4">
          {image ? (
            <>
              {image?.length > 0 ? (
                <Card.Img className="cardItemImage" src={image[0].url}/>
              ) : (
                <div className="imageHolder"></div>
              )}
                <Card.Body className="cardItemBody">
                    <Card.Title className="cardItemTitleStart">{title}</Card.Title>
                </Card.Body>
              </>
            ) : (
              <Card.Body className="cardItemBody">
                  <Image className="bankIcon" src={icon}/>
                  <Card.Title className="cardItemTitleCenter">{title}</Card.Title>
              </Card.Body>
            )}
        </Card>
    </Col>
  )
}

export default CardItem