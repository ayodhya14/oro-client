import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./MainSlider.scss";

class MainSlider extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
            sliderValues: [
                {
                    image: "../images/slider.png",
                    alt: "First slide image"
                },
                {
                    image: "../images/slider1.png",
                    alt: "Second slide image"
                },
                {
                    image: "../images/slider2.png",
                    alt: "Third slide image"
                }
            ]
        };
    }

    render() {
        return (
            <Carousel interval={2500}>
                {this.state.sliderValues.map((value, index) => {
                    return (
                        <Carousel.Item index={index}>
                            <img
                                className="d-block w-100 imageSlider"
                                src={value.image}
                                alt={value.alt}
                            />
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        );
    }

}
export default MainSlider;