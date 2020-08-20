import React, { Component } from "react";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';

import Footer from "./Footer";
import Header from "./Header";
import MainSlider from "./MainSlider";
import ProductList from "./ProductList";

//Start---Create a Component---
class Home extends Component{
    state = {};
    render() {
        return(
            <div className = "homePage_parentDiv">
                <div className = "header">
                    <Header />
                </div>
                <div className = "slider">
                    <MainSlider />
                </div>
                <div className = "product_list">
                    <ProductList />
                </div>
                <div className = "footer">
                    <Footer />
                </div>
                {/* <Container>
                    <Row sm={1} md={2} lg={4}>
                        <Col style={{border: "1px solid red"}}>1 of 3</Col>
                        <Col style={{border: "1px solid green"}}>2 of 3</Col>
                        <Col style={{border: "1px solid black"}}>3 of 3</Col>
                        <Col style={{border: "1px solid yellow"}}>3 of 3</Col>
                    </Row>
                </Container> */}
            </div>
        );
    }
}
//End---Create a Component---

export default Home;