import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

import '../styles/newsHorizontalCardStyles.css'

const NewsItemHorizontal = ({ image, tag, title, date }) => {
    return (
        <Card className="newsHorizontalCard">
            <Row className="justify-content-md-start">
                <Col xs={5} lg={5}>
                    <Card.Img className="newsHorizontalCardImage" src={image}/>
                </Col>
                <Col xs={7} lg={7}>
                    <Card.Body className="newsHorizontalCardBody">
                        <Card.Text className="newsHorizontalCardTag">
                            {tag}
                        </Card.Text>
                        <Card.Title className="newsHorizontalCardTitle">
                            {title}
                        </Card.Title>
                        <Card.Subtitle className="newsHorizontalCardDate">
                            {date}
                        </Card.Subtitle>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

export default NewsItemHorizontal