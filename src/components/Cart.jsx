import React, { Component } from "react";
// import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import { FaPenSquare } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import Table from 'react-bootstrap/Table';
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import axios from "axios";
import Checkout from "./Checkout";
import "./Cart.scss";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

class Cart extends Component {
    constructor(props) {
        super(props)
        this.viewCheckout = this.viewCheckout.bind(this);
        this.state = {
            price: "",
            qty: "",
            tableData: []
        };
    }

    calculatePayment = () => {
        this.handleCartItems();
    };

    // handle the locle storage cart items array function.
    async handleCartItems() {
        let val = localStorage.getItem('cartItems').split(",");
        val[0] = val[0].replace("{", "");
        val[val.length - 1] = val[val.length - 1].replace("}", "");
        for (let x = 0; x < val.length; x++) {
            let obj = {
                id: "",
                qty: ""
            }
            obj.id = val[x].split(":")[0];
            obj.id = obj.id.split('"')[1];
            obj.qty = val[x].split(":")[1];
            val[x] = obj;
        }
        let { data } = await axios.get(`http://localhost:5000/api/products`);
        let products = data.map((product) => {
            return {
                id: product._id,
                productType: product.productType,
                imageUrl: product.imageUrl,
                description: product.description,
                availableQty: product.availableQty,
                unitPrice: product.unitPrice,
                name: product.name,
            };
        });
        let array = [];
        let price = 0;
        for (let x = 0; x < val.length; x++) {
            for (let y = 0; y < products.length; y++) {
                if (val[x].id === products[y].id) {
                    products[y].qtyCount = parseInt(val[x].qty);
                    products[y].subTotal = products[y].qtyCount*products[y].unitPrice;
                    price = price + products[y].subTotal;
                    array.push(products[y]);
                }
            }
        }
        this.setState({ tableData: array });
        this.setState({ price: price });
    }

    onClickRemoveItem = (id, index) => {
        for (let x = 0; x < this.state.tableData.length; x++) {
            if (this.state.tableData[x].id === id && index === x) {
                this.state.tableData.splice(index, 1);
                this.setState({ tableData: this.state.tableData });
            }
        }
        let value = localStorage.getItem('cartItems').split(id)[0];
        let value2 = localStorage.getItem('cartItems').split(id)[1];
        let value3 = value2.split(",");
        let str = "";
        for (let z = 1; z < value3.length; z++) {
            if (str !== "") {
                str = str + "," + value3[z];
            } else {
                str = str + value3[z];
            }
        }
        if (value3.length === 1) {
            str = "}";
        }
        str = value + str;
        if (str.includes('{""')) {
            str = str.replace('{""', '{"');
        } else if (str.includes(',"}')) {
            str = str.replace(',"}', '}');
        }
        localStorage.setItem('cartItems',str);
        localStorage.setItem('cartItemsLength',this.state.tableData.length);
        this.handleCartItems();
    };


    viewCheckout() {
        alert('Are you sure you want to Checkout?');
    }

    render() {
        return (
            <div className="ParentClassCart">
                {this.state.price == "" ? this.calculatePayment() : null}
                <Card className="card">
                    <Row xs={1} sm={1} md={2} lg={2}>
                        <Col xs={12} sm={12} md={8} lg={8}>
                            <div className="headingClass">
                                <h4> Shopping Cart </h4>
                            </div>
                            <div>
                                <Table responsive="sm">
                                    {this.state.tableData.map((item, index) => {
                                        return (
                                            <tbody key={index}>
                                                <tr>
                                                    <td className="tableBodyData">{index + 1}</td>
                                                    <td>
                                                        <a href="/ViewSingleProduct"><Image className="cartProductImage" src={item.imageUrl} alt="Selected Product" thumbnail /></a>
                                                    </td>
                                                    <td className="tableBodyData">{item.name}<a href="/ViewSingleProduct"></a></td>
                                                    {/* need color change to black */}
                                                    <td className="tableBodyData" style={{ color: "black" }}>{item.qtyCount}</td>
                                                    <td className="tableBodyData">Rs.{item.unitPrice}</td>
                                                    <td className="tableBodyData">Rs.{item.subTotal}</td>
                                                    <td className="tableBodyData">
                                                        <Button onClick={() => this.onClickRemoveItem(item.id, index)} className="buttonClass" variant="outline-danger"><FaTrashAlt /></Button>
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
                            <Card className="card">
                                <div>
                                    <h6 className="cardHeadingClass">Payment</h6>
                                    <Card className="card">
                                        <Row>
                                            <Col xs={6} sm={6} md={6} lg={6}>
                                                <div>
                                                    <span>Subtotal</span><br />
                                                    <span>Delivery</span><br /><br />
                                                    <span><b>Total</b></span>
                                                </div>
                                            </Col>
                                            <Col xs={6} sm={6} md={6} lg={6}>
                                                <div style={{ textAlign: "right", paddingRight: "10px" }}>
                                                    <span>Rs.{this.state.price}</span><br />
                                                    <span>Rs.250</span><br /><br />
                                                    <span>Rs.{this.state.price + 250}</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
                                </div>
                                <br />
                                <div className="checkout">
                                    <a href="/ViewCheckout" className="btn btn-warning" onClick={this.viewCheckout}>Proceed To Checkout</a>
                                    {/* <Button className = "buttonCheckoutClass" onClick={this.viewCheckout} variant="warning">Proceed To Checkout</Button> */}
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
