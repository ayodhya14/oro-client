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
    state = {
        name : String,
      };
    

    //Check the user login or not before click the cart
    //   ViewCartFunction = () => {

    //       let userLogin = "login"
    //       let userLogout = "logout"
    //       if(userid === login){
    //           <ViewCart />
    //       }
    //       else if(userid === logout){
    //           <UserLogin />
    //       }
    //   };



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
                            <Col xs={6} sm={6} md={6} lg={6} className="headerLinks">
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
                                {
                                    !localStorage.userTokenORO ? <a style={{color: "#fefefe"}} href="/ViewUserLogin">Login</a> : <Logout />
                                }
                                {/* <a style={{color: "#fefefe"}} href="/ViewUserLogin">Login</a> */}
                            </Col>
                            <Col xs={2} sm={2} md={2} lg={2} className="headerLinks">
                                <a style={{color: "#fefefe"}} href="/User Profile" >Profile</a>
                            </Col>
                            <Col xs={2} sm={2} md={2} lg={2} className="headerLinks">
                                <a href = "/viewCart" onClick = "ViewCartFunction" ><Badge pill variant="warning" style={{cursor: "pointer", marginRight: "30px" }}><FaShoppingCart style={{ cursor: "pointer", width: "2vh", height: "3vh" }}  />&nbsp;</Badge></a>
                            </Col>
                        </Row>
                        {/* <Col>
                            <Logout />
                        </Col> */}
                    </Col>
                </Row>
            </div>
        );
    }

   
    
    constructor(props) {

        super(props);
       
      }

    

}

export default Header;