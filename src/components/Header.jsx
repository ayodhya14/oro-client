import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { FaShoppingCart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';

import axios from "axios";

import Login from './Login';
import Logout from './Logout';
import ViewCart from "./ViewCart";
import TabView from "./TabView";

import "./Header.scss";

class Header extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            name : String,
        };
    };

    logOut() {
        // remove all the localStorage values
        localStorage.removeItem("userTokenORO");
        localStorage.removeItem("LoginWithGoogle");
        localStorage.removeItem("OROLoginUser");
        localStorage.removeItem("cartItems");
        localStorage.removeItem("username");
        localStorage.removeItem("cartItemsLength");
    }

    render() {
        return (
            <div className="headerParentClass">
                <Row>
                    <Col xs={3} sm={2} md={2} lg={2}>
                        <div>
                        <a href = "/"> <Image roundedCircle className="OROLogo" src="https://res.cloudinary.com/persystance-network/image/upload/v1597958481/slt/portal_user/1597958481008.jpg" alt="ORO Jewellers Main Logo" /></a>
                        </div>
                    </Col>
                    <Col xs={9} sm={10} md={10} lg={10}>
                        <Row style={{ marginTop: "60px" }}>
                            <Col xs={10} sm={10} md={10} lg={10} className="headerLinks">
                                <div className="search">
                                    <form
                                        action="#"
                                        method="get"
                                        className={
                                            "search-form active"
                                        }
                                    >
                                        <input
                                            type="search"
                                            ref="searchBox"
                                            placeholder="Search for Jewellery by Name"
                                            className="search-keyword"
                                            onChange={(event)=> this.props.onChange(event.target.value)}
                                        />
                                    </form>
                                </div>
                            </Col>
                            <Col xs={2} sm={2} md={2} lg={2} className="headerLinks">
                                <a href={localStorage.getItem('cartItemsLength') && localStorage.getItem('userTokenORO') ? "/viewCart" : "/"}><Badge pill variant="warning" style={{cursor: "pointer", marginRight: "30px" }}><FaShoppingCart style={{ cursor: "pointer", width: "2vh", height: "3vh" }}  />&nbsp; {localStorage.getItem('cartItemsLength')}</Badge></a>
                            </Col>
                        </Row>
                        <Row className="loginRowCall" style={{marginTop: "16px"}}>
                            <Col xs={4} sm={4} md={2} lg={2} className="headerLinks">
                                {
                                   !localStorage.userTokenORO ? <a style={{color: "#fefefe"}} href="/ViewUserLogin">User Login</a> : localStorage.LoginWithGoogle == true ? <a style={{color: "#fefefe"}} onClick={() => this.logOut()} href="/">Log Out</a> : <a style={{color: "#fefefe"}} onClick={() => this.logOut()} href="/">Log Out</a>
                                }   
                            </Col>
                            <Col xs={4} sm={4} md={2} lg={2} style={{display: "flex", justifyContent: "center"}} className="headerLinks">
                                <a style={{color: "#fefefe"}} href="/User Profile" >User Profile</a>
                            </Col>
                            <Col xs={4} sm={4} md={8} lg={8} className="headerLinks"></Col>
                            {/* <Col>{ localStorage.getItem("username")}</Col> */}
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;