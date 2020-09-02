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

import "./Header.scss";

class Header extends Component{
    state = {
        name : String,
      };
    
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
                        <Row>
                            <div className="searchWidget">
                                <InputGroup className="mb-3">
                                    <FormControl
                                        onChange={this.handleSearchChange}
                                        placeholder="Search by product name"
                                        aria-label="Search by product name"
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                    <a href = "/search"><Button variant="warning" onClick={() => this.setSearch()}> Search </Button></a>
                                    </InputGroup.Append>
                                </InputGroup>
                            </div>
                        </Row>
                        <Row style={{ marginTop: "2vh" }}>
                            <Col xs={3} sm={3} md={3} lg={3} className="headerLinks">
                                <a className="link" href="/" style={{ marginRight: "30px" }}>Login</a>
                                <a className="link" href="/">Register</a>
                            </Col>
                            <Col xs={3} sm={3} md={3} lg={3} className="headerLinks">
                                Mobile:&nbsp;&nbsp;<a className="link" href="/">+94 76 655 9314</a>
                            </Col>
                            <Col xs={3} sm={3} md={3} lg={3} className="headerLinks">
                                Email:&nbsp;&nbsp;<a className="link" href="/">oro.jewelleries@yahoo.com</a>
                            </Col>
                            <Col xs={3} sm={3} md={3} lg={3} className="headerLinks">
                            <a href = "/viewCart"><Badge pill variant="warning" style={{cursor: "pointer" }}><FaShoppingCart style={{ cursor: "pointer", width: "2vh", height: "3vh" }}  />&nbsp; 3</Badge></a>
                            </Col>   
                            <Col>
                                <Login />
                            </Col>
                            <Col>
                                <Logout />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }

    //sends the search name to parent : ProductSearch
    setSearch = () => {
        this.props.sendSearch(this.state.name);
        console.log("name is set");
        console.log(this.state.name);
    }

    
    constructor(props) {

        super(props);
        this.handleSearchChange = this.handleSearchChange.bind(this);
       
      }

    //Captures the text in the search
    handleSearchChange (e) {

        this.setState({name: e.target.value});
        console.log(this.state.name);
     }

}

export default Header;