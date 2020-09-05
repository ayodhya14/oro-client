import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SingleProduct extends Component{
    
    state = {
        
    };
  
  render() {
    return (
        <div className = "SingleProductParentClass">
            <Row xs={1} sm={2} md={3} lg={4}>
                <Col xs={12} sm={6} md={4} lg={3}>
                
                    
                </Col>
            </Row>
        </div>
    );
  }
    
}
export default SingleProduct;