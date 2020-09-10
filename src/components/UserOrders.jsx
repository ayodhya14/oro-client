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
import axios from "axios";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import "./Login.scss";

class Checkout extends Component{
    constructor(props) {
        super(props)
        this.state = {
            price: "",
            qty: "",
            products: {},
            paymentType: "Payment Type",
            address: {
                address_Line_1: "No 2/A",
                address_Line_2: "Hortn Rd",
                city: "Yakkala",
                country: "Sri Lanka"
            },
            tableData: [
                // {
                //     date: "2020-08-20",
                //     image: "https://ae01.alicdn.com/kf/HTB1.AgdajzuK1RjSspeq6ziHVXaS/Rhinestone-Happy-Family-Ring-Mother-Father-Girl-Boy-Design-Rings-for-Family-Merry-Christmas-New-Year.jpg_960x960.jpg",
                //     name: "Gold Family Ring",
                //     price: 10000,
                //     subTotal: 20000,
                //     qty: 2
                // }
                // ,
                // {
                //     date: "2020-08-20",
                //     image: "https://i.pinimg.com/originals/eb/95/d3/eb95d3eafbf6d85ec230c13eedcbd8db.png",
                //     name: "Pin on Women jewelry",
                //     price: 8000,
                //     subTotal: 8000,
                //     qty: 1
                // },
                // {
                //     date: "2020-08-22",
                //     image: "https://i.pinimg.com/originals/e6/22/25/e62225dca0d44d7470714dbb6b4105b5.jpg",
                //     name: "Natural Russian Copper Charoite Gemstone Silver Tone Fine Jewelry",
                //     price: 15000,
                //     subTotal: 45000,
                //     qty: 3
                // },
                // {
                //     date: "2020-08-24",
                //     image: "https://i.pinimg.com/originals/e6/22/25/e62225dca0d44d7470714dbb6b4105b5.jpg",
                //     name: "Natural Russian Copper Charoite Gemstone Silver Tone Fine Jewelry",
                //     price: 15000,
                //     subTotal: 15000,
                //     qty: 1
                // },
                
            ]
        };
    }

    calculatePayment = () => {        
        let price = 0;
        let qty = 0;
        let prods = {};
        
        for (let x = 0; x < this.state.tableData.length; x++) {
            price = this.state.tableData[x].subTotal + price;
            qty = this.state.tableData[x].qty + qty;
            prods = this.state.tableData[x].products;            
        }        
        this.setState({
            price: price,
            qty: qty,
            products: prods
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
                {this.state.price === "" ? this.calculatePayment: null}
                <Card className = "card"  border="warning">
                    <Row xs={1} sm={1} md={1} lg={1}>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <div className="headingClass">
                                <h4>Orders</h4>
                            </div>
                            <div>
                                <Table responsive="sm" striped bordered hover>
                                    {this.state.tableData.map((item, index) => {
                                        return (
                                            <>
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>OrderId</th>
                                                    <th>Ordered Date</th>
                                                    {/* <th></th> */}
                                                    <th>Total Quantity</th>                
                                                    <th>Total Price</th>
                                                </tr>
                                            </thead>                                            
                                            <tbody key={index}>
                                                <tr>
                                                    <td className="tableBodyData">{index + 1}</td>
                                                    <td className="tableBodyData">{item.id}</td>
                                                    {/* <td> */}
                                                        {/* <a href = "/ViewSingleProduct">
                                                            <Image className="cartProductImage" src={item.image} alt="Selected Product" thumbnail />
                                                        </a> */}
                                                    {/* </td> */}
                                                    <td className="tableBodyData">{item.date}</td>
                                                    {/* <td className="tableBodyData"><a className="tableAnqureTag" href = "/ViewSingleProduct">{item.name}</a></td> */}
                                                    <td className="tableBodyData">{item.totQty}</td>
                                                    <td className="tableBodyData">{item.subTotal}</td>
                                                </tr>
                                            </tbody>
                                            </>
                                            
                                        );
                                    })}
                                </Table>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    
    }
    async componentDidMount(){
       
        let { data } = await axios.get("http://localhost:5000/api/orders");
        console.log(data);
        let user = JSON.parse(localStorage.OROLoginUser);
        let orders = data.filter(order => {
            return order.userId === user.id;
        }).map((order) => {
            return {
                id : order._id,
                userId: order.userId,
                products: order.products,
                totQty: order.totQty,
                subTotal: order.subTotal,
                total: order.total,
                date: order.date,
            };
        });
        console.log(orders);
        this.setState({ tableData: orders });
    }
}
export default Checkout;
