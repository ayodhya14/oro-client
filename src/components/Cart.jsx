import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaPenSquare } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import Table from 'react-bootstrap/Table';
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import "./Cart.scss";

class Cart extends Component{
    constructor(props) {
        super(props)
        this.state = {
            price: "",
            qty: "",
            paymentType: "Payment Type",
            address: {
                address_Line_1: "No 42",
                address_Line_2: "Samudrasanna Rd",
                city: "Mt Lavinia",
                country: "Sri Lanka"
            },
            tableData: [
                {
                    image: "https://ae01.alicdn.com/kf/HTB1.AgdajzuK1RjSspeq6ziHVXaS/Rhinestone-Happy-Family-Ring-Mother-Father-Girl-Boy-Design-Rings-for-Family-Merry-Christmas-New-Year.jpg_960x960.jpg",
                    name: "Gold Family Ring",
                    price: 10000,
                    subTotal: 20000,
                    qty: 2
                },
                {
                    image: "https://i.pinimg.com/originals/eb/95/d3/eb95d3eafbf6d85ec230c13eedcbd8db.png",
                    name: "Pin on Women jewelry",
                    price: 8000,
                    subTotal: 8000,
                    qty: 1
                },
                {
                    image: "https://i.pinimg.com/originals/e6/22/25/e62225dca0d44d7470714dbb6b4105b5.jpg",
                    name: "Natural Russian Copper Charoite Gemstone Silver Tone Fine Jewelry",
                    price: 15000,
                    subTotal: 45000,
                    qty: 3
                }
            ]
        };
    }

    calculatePayment = () => {
        let price = 0;
        let qty = 0;
        for (let x = 0; x < this.state.tableData.length; x++) {
            price = this.state.tableData[x].subTotal + price;
            qty = this.state.tableData[x].qty + qty;
        }
        this.setState({
            price: price,
            qty: qty
        });
    };

    onClickRemoveItem = (id) => {
        alert(id);
    };

    handlePaymentType = (str) => {
        this.setState({
            paymentType: str
        });
    };

    render() {
        return(
            <div className = "ParentClassCart">
                {this.state.price == "" ? this.calculatePayment() : null}
                <Card className = "card">
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
                                                    <td>
                                                        <Image className="cartProductImage" src={item.image} alt="Selected Product" thumbnail  />
                                                    </td>
                                                    <td className="tableBodyData">{item.name}</td>
                                                    <td className="tableBodyData">{item.qty}</td>
                                                    <td className="tableBodyData">{item.price}</td>
                                                    <td className="tableBodyData">{item.subTotal}</td>
                                                    <td className="tableBodyData">
                                                        <Button onClick={() => this.onClickRemoveItem(index)} className = "buttonClass" variant="outline-danger"><FaTrashAlt /></Button>
                                                    </td>
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
                                        <Dropdown.Item onClick={() => this.handlePaymentType("PayPal")} as="button">PayPal</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.handlePaymentType("Credit Card")} as="button">Credit Card</Dropdown.Item>
                                    </DropdownButton>
                                </div>
                                <br />
                                <div>
                                    <h6 className="cardHeadigClass">Payment</h6>
                                    <Card className = "card">
                                        <Row>
                                            <Col xs={6} sm={6} md={6} lg={6}>
                                                <div>
                                                    <span>Total Quantity:</span><br />
                                                    <span>Total Price:</span><br />
                                                </div>
                                            </Col>
                                            <Col xs={6} sm={6} md={6} lg={6}>
                                                <div style={{textAlign: "right", paddingRight: "10px"}}>
                                                    <span>{this.state.qty}</span><br />
                                                    <span>{this.state.price}</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
                                </div>
                                <br />
                                <div className = "checkout">
                                    <Button className = "buttonCheckoutClass" variant="warning">Proceed To Checkout</Button>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    
    }
}
export default Cart;
