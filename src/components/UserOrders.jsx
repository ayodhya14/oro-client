import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { Card } from "react-bootstrap";
import axios from "axios";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


class UserOrders extends Component{
    constructor(props) {
        super(props)
        this.state = {
            price: "",
            qty: "",
            products: {},
            paymentType: "Payment Type",
            address: "",
            tableData: [ ]
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
            <div className = "ParentClassUserOrders">
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
                                                    <td className="tableBodyData">{item.date}</td>
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
export default UserOrders;
