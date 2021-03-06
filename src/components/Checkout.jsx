import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Table from 'react-bootstrap/Table';
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import Axios from "axios";
import "./Checkout.scss";

class Checkout extends Component{
    constructor(props){
        super(props);
         
        this.state = {
            price: "",
            qty: "",
            paymentType: "Payment Type",
            address: "",
            tableData: [ ]
        };
    }

    CalculateSubTotalPayment =  () => {
      let qty = 0;
      let subTotal = 0; 
      for(let y = 0; y < this.state.tableData.length; y++) {
          subTotal =  this.state.tableData[y].subTotal * qty;
      }
      this.setState({
        subTotal: subTotal
    });
    }

    calculateTotalPayment = () => {
        let price = 0;
        // let qty = 0;
        for (let x = 0; x < this.state.tableData.length; x++) {
            price = this.state.tableData[x].subTotal + price;
            // qty = this.state.tableData[x].qty + qty;
        }
        this.setState({
            price: price,
            // qty: qty
        });
    };

    handlePaymentType = (str) => {
        this.setState({
            paymentType: str
        });
    };

    render() {
        return(
            <div className = "ParentClassCheckout">
                {/* {this.state.price == "" ? this.calculateSubTotalPayment() : null} */}
                {this.state.price == "" ? this.calculateTotalPayment() : null}
                <Card className = "card" onSubmit={this.saveOrder}>
                    <Row xs={1} sm={1} md={2} lg={2}>
                        <Col xs={12} sm={12} md={8} lg={8}>
                            <div className="headingClass">
                                <h4>Checkout Cart Summary</h4>
                            </div>
                            <div>
                                <Table responsive="sm">
                                    {this.state.tableData.map((item, index) => {
                                        return (
                                            <tbody key={index}>
                                                <tr>
                                                    <td className="tableBodyData">{index + 1}</td>
                                                    <td className="tableBodyData">{item.date}</td>
                                                    <td>
                                                        <Image className="cartProductImage" src={item.image} alt="Selected Product" thumbnail  />
                                                    </td>
                                                    <td className="tableBodyData">{item.name}</td>
                                                    <td className="tableBodyData">{item.qty}</td>
                                                    <td className="tableBodyData">{item.price}</td>
                                                    <td className="tableBodyData">{item.subTotal}</td>
                                                </tr>
                                            </tbody>
                                        );
                                    })}
                                </Table>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <div className="headingClass">
                                <h4>Order Summary</h4>
                            </div>
                            <Card className = "card">
                                <div>
                                    <h6 className="cardHeadigClass">Delivering Address</h6>
                                    <Card className = "card">
                                        <Row>
                                            <Col xs={10} sm={10} md={10} lg={10}>
                                                <div>
                                                    <span>{this.state.address.address_Line_1}{this.state.address.address_Line_2 != "" ? " ," : ""}</span><br />
                                                    <span>{this.state.address.address_Line_2}{this.state.address.city != "" ? " ," : ""}</span><br />
                                                    <span>{this.state.address.city}{this.state.address.country != "" ? " ," : ""}</span><br />
                                                    <span>{this.state.address.country}</span>
                                                </div>
                                            </Col>
                                            <Col xs={2} sm={2} md={2} lg={2}>
                                                {/* <FaPenSquare style={{fontSize: "18px"}}/> */}
                                            </Col>
                                        </Row>
                                    </Card>
                                </div>
                                <br />
                                <div>
                                    <h6 className="cardHeadigClass">Payment Type</h6>
                                    <DropdownButton variant="secondary" id="dropdown-item-button" title={this.state.paymentType} style={{marginLeft: "8px"}}>
                                        <Dropdown.Item onClick={() => this.handlePaymentType("Cash on Delivery")} as="button">PayPal</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.handlePaymentType("Pick up")} as="button">Credit Card</Dropdown.Item>
                                    </DropdownButton>
                                </div>
                                <br />
                                <div>
                                    <h6 className="cardHeadigClass">Payment</h6>
                                    <Card className = "card">
                                        <Row>
                                            <Col xs={6} sm={6} md={6} lg={6}>
                                                <div>
                                                    <span>Subtotal</span><br />
                                                    <span>Delivery</span><br /><br />
                                                    <span><b>Total</b></span>
                                                </div>
                                            </Col>
                                            <Col xs={6} sm={6} md={6} lg={6}>
                                                <div style={{textAlign: "right", paddingRight: "10px"}}>
                                                    <span>{this.state.price}</span><br />
                                                    <span>250</span><br /><br />
                                                    <span>{this.state.price+250}</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
                                </div>
                                <br />
                                <div className = "placeOrder">
                                    <Button className = "buttonPlaceOrderClass" variant="warning">Confirm and Place Order</Button>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    
    }
}
export default Checkout;
