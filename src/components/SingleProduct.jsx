import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import Product from './Product';
import axios from "axios";

class SingleProduct extends Component{

  constructor(props) {
    super(props);
    this.state = {
      productId : this.props.id,
      product :{}
    }
  };


  onClickAddToCartItem = () => {
    let productIdValue = localStorage.getItem('myData');
    // alert(productId);
    let cartItem = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : {};
    let productId = productIdValue;
    cartItem[productId] = (cartItem[productId] ? cartItem[productId]: 0);
    let qty = cartItem[productId] + parseInt(this.state.quantity);
    if (this.state.product.availableQty < qty) {
        cartItem[productId] = this.state.product.availableQty; 
    } else {
        cartItem[productId] = qty
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItem));
    let val = localStorage.getItem('cartItems').split(",");
    val[0] = val[0].replace("{", "");
    val[val.length - 1] = val[val.length - 1].replace("}", "");
    for (let x = 0; x < val.length; x++) {
        let obj = {
            id: "",
            qty: ""
        }
        obj.id = val[x].split(":")[0];
        obj.qty = val[x].split(":")[1];
        val[x] = obj;
    }
    localStorage.setItem('cartItemsLength', val.length);
    window.location.reload();
}

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
                        <a  className = "btn btn-warning" onClick={() => this.onClickAddToCartItem()} style = {{width: "23rem"}}>Add to Cart</a>
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