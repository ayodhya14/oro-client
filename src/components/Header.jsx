import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { FaShoppingCart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';

import "./Header.scss";
class Header extends Component{

    render() {
        return (
            <div className="headerParentClass">
                <Row>
                    <Col xs={3} sm={2} md={2} lg={2}>
                        <div>
                            <Image roundedCircle className="OROLogo" src="https://res.cloudinary.com/persystance-network/image/upload/v1597958481/slt/portal_user/1597958481008.jpg" alt="ORO Jewellers Main Logo" />
                        </div>
                    </Col>
                    <Col xs={9} sm={10} md={10} lg={10}>
                        <Row>
                            <div className="searchWidget">
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Search by product name"
                                        aria-label="Search by product name"
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="warning">Search</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </div>
                        </Row>
                        <Row style={{marginTop: "2vh"}}>
                            <Col xs={3} sm={3} md={3} lg={3} className="headerLinks">
                                <a className="link" href="/">Login</a>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a className="link" href="/">Register</a>
                            </Col>
                            <Col xs={3} sm={3} md={3} lg={3} className="headerLinks">
                                Mobole:&nbsp;&nbsp;<a className="link" href="/">+94 76 655 9314</a>
                            </Col>
                            <Col xs={3} sm={3} md={3} lg={3} className="headerLinks">
                                Email:&nbsp;&nbsp;<a className="link" href="/">ORO.Jewelleries@yahoo.com</a>
                            </Col>
                            <Col xs={3} sm={3} md={3} lg={3} className="headerLinks">
                                <Badge pill variant="warning" style={{cursor: "pointer" }}><FaShoppingCart style={{ cursor: "pointer", width: "2vh", height: "3vh" }} />&nbsp; 9</Badge>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }

}
export default Header;