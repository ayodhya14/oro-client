import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'
import FormFile from 'react-bootstrap/FormFile'
import Button from 'react-bootstrap/Button'
import { Card } from "react-bootstrap";

import "./UserLogin.scss";
import Login from './Login';


class UserLogin extends Component{
   
    state = {
        
      };
    
    render() { 
        return (
            <div className = "UserLoginParentClass">

                <Row xs={1} sm={1} md={1} lg={1}>
                    {/* <Col xs={12} sm={6} md={4} lg={3} key={index}> */}
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <Card className = "cardHeader" bg = "warning">
                        <div className="headingClass">
                            <h4 style= {{ marginLeft: "44%"}}>Login</h4>
                        </div>    
                        </Card>                        
                        <Card className = "card" border="warning"  >
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12}>                                    
                                    <Form >
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Remember user details" />
                                        </Form.Group>

                                        <Button variant="warning" type="submit" style= {{ width: "100%"}} >
                                            Login
                                        </Button>

                                        <div className = "UserRegisterClass"> 
                                        <span><a  href = "/ViewUserRegister" onClick={this.login}>New User?</a></span>
                                        <Col>
                                            <Login />
                                        </Col>
                                        </div>
                                       
                                    </Form>    
                                </Col>    
                            </Row>   
                        </Card>                               
                    </Col>                                             
                </Row>
            </div>
       
       );
    }
}
export default UserLogin;