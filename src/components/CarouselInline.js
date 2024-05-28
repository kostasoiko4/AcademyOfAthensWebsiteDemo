import React, { useEffect, useState } from 'react'
import { Button, Carousel, Row } from 'react-bootstrap'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import CardItem from './CardItem'

import "../styles/carouselInlineStyles.css"

const CarouselInline = ({ cards }) => {
    const [carouselItems, setCarouselItems] = useState([])

    useEffect(() => {
        for(let i = 0; i + 3 < cards.length; i += 4) {
            const newCarouselItems = cards.slice(i, i + 4)
            setCarouselItems(carouselItems => [...carouselItems, newCarouselItems])
        }
    },[cards])

    return (
        <Carousel 
            className="inlineCarousel justify-content-md-center"
            indicators={false} 
            interval={null}
            prevIcon={
                <Button className="carouselControlLeft shadow-sm">
                    <FaChevronLeft className="controlIconLeft"/>
                </Button>
            }
            nextIcon={
                <Button className="carouselControlRight shadow-sm">
                    <FaChevronRight className="controlIconRight"/>
                </Button>
            }
            style={{width: 'fit-content'}}
        >
            {carouselItems.map((item, index) => 
                <Carousel.Item key={`carouselItem-${index}`}>
                    <Row className="justify-content-md-center p-0">
                        {item?.map(card => <CardItem key={`card-${card.id}`} title={card.title} icon={card.icon} image={card.image}/>)}
                    </Row>
                </Carousel.Item>
            )}
        </Carousel>
    )
}

export default CarouselInline