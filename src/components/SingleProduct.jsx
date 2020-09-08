import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'

import axios from "axios";

class SingleProduct extends Component{

  constructor(props) {
    super(props);
    this.state = {
      productId : this.props.id,
      product :{}
    }
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
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className="headingClass">
                <h2 className="card-title">{this.state.product.name}</h2>
              </div>
              <div>
                <Card.Body>
                  <Card.Text>
                    <b>Type:</b>&nbsp;  {this.state.product.productType}
                  </Card.Text>
                  <Card.Text>
                    <b>Description:</b>&nbsp; {this.state.product.description}
                  </Card.Text>
                  <Card.Text>
                    <b>Price:</b>&nbsp; Rs.{this.state.product.unitPrice}
                  </Card.Text>
                  <Card.Text>
                    <b>Available Quantity:&nbsp;</b> {this.state.product.availableQty}
                  </Card.Text>
                  <Form>
                  <Form.Row>
                    <Form.Group as={Col} md="4">
                        <Form.Label><b>Quantity</b></Form.Label>
                        <Form.Control placeholder="0" className = "from-control"  type="Number" value={this.state.qty} onChange={this.onChangeAddress}/>
                    </Form.Group>
                  </Form.Row>
                  </Form>  
                </Card.Body>
                  <div className = "Add to Cart" >
                        <a href = "/" className = "btn btn-warning" onClick={this.viewCart} style = {{width: "23rem"}}>Add to Cart</a>
                  </div> 
                  <br/>
                  <div className = "View Cart" >
                        <a href = "/ViewCart" className = "btn btn-warning" onClick={this.viewCart} style = {{width: "12rem"}}>View Cart</a>
                        <a href = "/" className = "btn btn-warning" style={{marginLeft: "15px"}} onClick={this.home}>Continue Shopping</a>
                  </div>
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
    // get the product id from url   =>    window.location.pathname.split("/viewSingleProduct/")[1];
    let  {data}  = await axios.get(`http://localhost:5000/api/products/${window.location.pathname.split("/viewSingleProduct/")[1]}`);
    this.setState({ product: data });
    console.log(window.location.pathname);
  }
}
export default SingleProduct;