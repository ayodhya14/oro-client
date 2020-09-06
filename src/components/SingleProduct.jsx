import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroup'

class SingleProduct extends Component{
    
    state = {
        
    };
  
  render() {
    return (
        <div className = "SingleProductParentClass">
             <Card className = "card" border="warning">
                    <Row xs={1} sm={1} md={2} lg={2}>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <div>
                            <Card style={{ width: '26rem' }}>
                              <Card.Img variant="top" src="http://www.ravijewellers.lk/images/products/38.jpg" />
                            </Card>                               
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={5} lg={5}>
                            <div className="headingClass">
                                <h2 className="card-title">Gold Necklace - A001</h2>
                            </div>
                          
                                <div>
                                <Card.Body>
                                   <Card.Text><b>Type:</b>&nbsp;  Necklace</Card.Text>
                                  <Card.Text>
                                    <b>Description:</b>&nbsp; Gold Necklace with Flower Petal Shapes as a Pendant set with White Sto...
                                  </Card.Text>
                                  <Card.Text><b>Price:</b>&nbsp; Rs.32000.00</Card.Text>
                                  <Card.Text><b>Available Quantity:&nbsp;</b> 45</Card.Text>
                                </Card.Body>

                                {/* <ListGroup className="list-group-flush">
                                  <ListGroupItem>Cras justo odio</ListGroupItem>
                                  <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                  <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                </ListGroup> */}

                                {/* <Card.Body>
                                  <Card.Link href="#">Card Link</Card.Link>
                                  <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body> */}
                                </div>

                            <br />
                                <div className = "Add to Cart" >
                                <a  href = "/" className = "btn btn-warning" onClick={this.viewCart} style = {{width: "23rem"}}>Add to Cart</a>
                                 &nbsp;&nbsp;&nbsp;

                                 {/* add qty add and reduce button */}
                                {/* <a  href = "/ViewCart" className = "btn btn-warning" onClick={this.viewCart}>Continue Shopping</a> */}
                                </div> 
                                <br/>
                                <div className = "View Cart" >
                                <a  href = "/ViewCart" className = "btn btn-warning" onClick={this.viewCart} style = {{width: "12rem"}}>View Cart</a>
                                 &nbsp;&nbsp;&nbsp;
                                <a  href = "/" className = "btn btn-warning" onClick={this.home}>Continue Shopping</a>
                                </div>
                        </Col>

                    </Row>
                </Card>
        </div>
    );
  }
    
}
export default SingleProduct;