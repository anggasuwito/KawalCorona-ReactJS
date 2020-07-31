import React from 'react'
import { Carousel } from 'react-bootstrap'
import image1 from './../assets/images/image1.jpg'
import image2 from './../assets/images/image2.jpg'
import image3 from './../assets/images/image3.jpg'
export default function Header() {
    return (
        <div className="container-fluid">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                        height="500"
                    />
                    <Carousel.Caption>
                        <h3>Corona Virus (COVID-19)</h3>
                        <p>Keep distance, always wash your hand, and stay healthy</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                        height="500"
                    />

                    <Carousel.Caption>
                        <h3>Always Wearing Mask</h3>
                        <p>Wearing a mask not only protect you from the others, but also protect the others from you</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                        height="500"
                    />

                    <Carousel.Caption>
                        <h3>New Normal</h3>
                        <p>Get Used to new normal condition</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
