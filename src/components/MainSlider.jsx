import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./MainSlider.scss";

class MainSlider extends Component{

    render() {
        return (
            <Carousel interval={2000}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src="../images/slider1.png"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src="../images/slider2.png"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        );
    }

}
export default MainSlider;