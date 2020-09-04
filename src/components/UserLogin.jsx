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
import Logout from './Logout';


class UserLogin extends Component{
   
    state = {
        
      };
    
    render() { 
        return (
            <div className = "UserLoginParentClass">

                <Row xs={1} sm={1} md={1} lg={1}>
                    <Col >
                        <Card className="loginCardHeader" bg="warning">
                            <div className="loginHeadingClass">
                                <h2>Login</h2>
                            </div>    
                        </Card>                        
                        <Card className="loginCardBody card" border="warning">
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

                                        <div className = ""> 
                                        <a href = "/ViewUserRegister" onClick={this.login} className="anquerTagNewUser">New User?</a>
                                        <Col>
                                            <Login />
                                            {/* <Logout /> */}
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