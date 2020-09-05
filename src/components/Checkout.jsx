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

import Axios from "axios";
import "./Checkout.scss";

class Checkout extends Component{
    constructor(props){
        super(props);
        
// //Bind Order feilds to Input form
//     this.onChangeUserId = this.onChangeUserId.bind(this);
//     this.onChangeProductId = this.onChangeProductId.bind(this);
//     this.onChangeQuantity = this.onChangeQuantity.bind(this);
//     this.onChangeSubTotal = this.onChangeSubTotal.bind(this);
//     this.onChangeTotal = this.onChangeTotal.bind(this);
//     this.onChangeDate = this.onChangeDatel.bind(this);
//     this.saveOrder = this.saveOrder.bind(this);
   
//     this.state = { 
//         userId: '', productId: '', qty: '', subTotal: '', total: '', date: ''
//     }
// }
// onChangeUserId(e){
//     this.setState({ userId: e.target.value});
// }

// onChangeProductId(e){
//     this.setState({ productId: e.target.value});
// }

// onChangeQuantity(e){
//     this.setState({ qty: e.target.value});
// }

// onChangeSubTotal(e){
//     this.setState({ subTotal: e.target.value});
// }

// onChangeTotal(e){
//     this.setState({ total: e.target.value});
// }

// onChangeDate(e){
//     this.setState({ date: e.target.value});
// }

//   submitUser(){
//       const obj = {
//           userId: this.state.userId,
//           productId: this.state.productId,
//           qty: this.state.qty,
//           subTotal: this.state.subTotal,
//           total: this.state.total,
//           date: this.state.date,
//       };
//       Axios.post('http://localhost:5000/api/orders/', obj).then(res => console.log(res.data));
 
//       this.setState({
//         userId: '', productId: '', qty: '', subTotal: '', total: '', date: ''
//       });   
//   }

//   componentDidMount(){
//       Axios.get('http://localhost:5000/api/orders/').then(response =>{
//           this.setState({
//               userId: response.date.userId,
//               productId: response.date.productId,
//               qty: response.date.qty,
//               subTotal: response.date.subTotal,
//               total: response.date.total,
//               date: response.date.date,
//           });
//           console.log(response.data)
//       })
//       .catch(function (error){
//           console.log(error);
//       });
 
 
 
      this.state = {
            price: "",
            qty: "",
            paymentType: "Payment Type",
            address: {
                address_Line_1: "No 2/A",
                address_Line_2: "Hortn Rd",
                city: "Yakkala",
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
                    price: 3000,
                    // subTotal: ,
                    qty: 1
                },
                {
                    image: "https://i.pinimg.com/originals/e6/22/25/e62225dca0d44d7470714dbb6b4105b5.jpg",
                    name: "Natural Russian Copper Charoite Gemstone Silver Tone Fine Jewelry",
                    price: 15000,
                    subTotal: 45000,
                    qty: 3
                },
                
            ]
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
