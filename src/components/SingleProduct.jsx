import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroup'

class SingleProduct extends Component{
    
    state = {
        productId : this.props.id,
        product :{}
    };
  
  render() {
    return (
        <div className = "SingleProductParentClass">
             <Card className = "card" border="warning">
                    <Row xs={1} sm={1} md={2} lg={2}>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <div>
                            <Card style={{ width: '26rem' }}>
                              <Card.Img variant="top" src={this.state.product.imageUrl} />
                            </Card>                               
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={5} lg={5}>
                            <div className="headingClass">
                                <h2 className="card-title">{this.state.product.name}</h2>
                            </div>
                          
                                <div>
                                <Card.Body>
                                   <Card.Text><b>Type:</b>&nbsp;  {this.state.product.productType}</Card.Text>
                                  <Card.Text>
                                    <b>Description:</b>&nbsp; {this.state.product.description}
                                  </Card.Text>
                                  <Card.Text><b>Price:</b>&nbsp; Rs.{this.state.product.unitPrice}</Card.Text>
                                  <Card.Text><b>Available Quantity:&nbsp;</b> {this.state.product.availableQty}</Card.Text>
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
  async componentDidMount() {
    this.allProducts();
}
async allProducts() {
  console.log('id');
  console.log(this.props.id);
  let  {data}  = await axios.get(`http://localhost:5000/api/products/${this.props.id}`);
  // let  {data}  = await axios.get(`http://localhost:5000/api/products/5f47bdee06a1185b20995999`);
  console.log(data);
  this.setState({ product: data });
  
}

}
export default SingleProduct;