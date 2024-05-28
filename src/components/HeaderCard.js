import React from 'react'
import { Image, Carousel, Card } from 'react-bootstrap'

import home from "../assets/images/home.png"
import image2 from "../assets/images/headerImage2.png"
import "../styles/headerCardStyles.css"

const HeaderCard = () => {
  return (
    <Card className="text-center">
        <Carousel controls={false}>
            <Carousel.Item>
                <Image className="headerImage" src={home}/>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="headerImage" src={home}/>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="headerImage" src={home}/>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="headerImage" src={home}/>
            </Carousel.Item>
        </Carousel>
        <Card.Body>
                <Card.Title>Καλώς ήρθατε στη δικτυακή πύλη της Ακαδημίας Αθηνών</Card.Title>
                <Card.Text className="headerText">
                    Είναι πλέον κοινά παραδεκτό ότι ένας αναγνώστης αποσπάται από το περιεχόμενο που διαβάζει, όταν εξετάζει τη διαμόρφωση μίας σελίδας. Η ουσία της χρήσης του Lorem Ipsum είναι ότι έχει λίγο-πολύ μία ομαλή κατανομή γραμμάτων, αντίθετα με το να βάλει κανείς κείμενο.
                </Card.Text>
                <Image className="headerImage2" src={image2}/>
        </Card.Body>
    </Card>
  )
}

export default HeaderCard