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

class UserRegister extends Component{
    
    state = {
        
    };
  
  render() {
    return (
        <div className = "UserRegisterParentClass">
            <Row xs={1} sm={2} md={3} lg={4}>
                {/* {this.state.allProducts.map((product, index) => ( */}
                    {/* <Col xs={12} sm={6} md={4} lg={3} key={index}> */}
                    <Col xs={12} sm={12} md={9} lg={9}>
                    <Card className = "cardHeader"   bg = "warning">
                        <div className="headingClass">
                            <h4 style= {{ marginLeft: "44%"}}>Register</h4>
                        </div>    
                        </Card>                        
                        <Card className = "card" border="warning"  >
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12}>                                    
                                <Form>
                                    <Form.Row>
                                        <Form.Group as={Col} md="4">
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="First name"
                                        />
                                        </Form.Group>

                                        <Form.Group as={Col} md="4">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Last name"
                                        />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                          
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Control  as="select"
                                                className="mr-sm-2"
                                                id="inlineFormCustomSelect"
                                                custom
                                           >
                                                <option value="0">Choose...</option>
                                                <option value="1">Male</option>
                                                <option value="2">Female</option>
                                                <option value="3">Other</option> 
                                        </Form.Control>
                                        </Form.Group>
                                        </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} md="8">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Email"/>
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>

                                    </Form.Row>

                                    <Form.Group>
                                        <Form.Check
                                        label="Agree to terms and conditions"
                                        feedback="You must agree before submitting."
                                        />
                                    </Form.Group>

                                    <Button variant="warning" type="submit" style= {{ width: "100%"}} >
                                           Register
                                    </Button>
 

                                        <div className = "UserRegisterClass" > 
                                        <span><a  href = "/ViewUserLogin" onClick={this.login}>Already have an account?</a></span>
                                        </div>

                                    </Form>    
                                </Col>    
                            </Row>   
                        </Card>                           
                    </Col>
                {/* ))} */}
            </Row>
        </div>
    );
  }
    
}
export default UserRegister;