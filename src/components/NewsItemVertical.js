import React from 'react'
import { Card } from 'react-bootstrap'

import '../styles/newsVerticalCardStyles.css'

const NewsItemVertical = ({ image, tag, title, date, description }) => {
  return (
    <Card className="newsVerticalCard">
        <Card.Img className="newsVerticalCardImage" src={image}/>
        <Card.Body className="newsVerticalCardBody">
            <Card.Text className="newsVerticalCardTag">
                {tag}
            </Card.Text>
            <Card.Title className="newsVerticalCardTitle">
                {title}
            </Card.Title>
            <Card.Subtitle className="newsVerticalCardDate">
                {date}
            </Card.Subtitle>
            <Card.Text className="newsVerticalCardDescription">
                {description}
            </Card.Text>
            <Card.Text className="newsVerticalCardLink">
                Διαβάστε περισσότερα
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default NewsItemVertical