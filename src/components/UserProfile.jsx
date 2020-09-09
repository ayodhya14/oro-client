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

class UserProfile extends Component{
    
    state = {
        
    };
  
  render() {
    return (
        <div className = "UserProfileParentClass">
            <Row xs={1} sm={1} md={1} lg={1}>
                <Col>
                <Card className="UserProfileCardHeader"  border="warning">
                        <div className="UserProfileHeadingClass">
                            <h4>User Information</h4>
                        </div>    
                </Card>                      
                <Card className = "UserProfileCardBody card" border="warning">
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
                                    <Form.Control  as="select">
                                            <option value="0">Choose...</option>
                                            <option value="1">Male</option>
                                            <option value="2">Female</option>
                                            <option value="3">Other</option> 
                                    </Form.Control>
                                </Form.Group>
    
                                <Form.Group as={Col} md="8">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Email"/>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Mobile</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Your Mobile Number" />
                                </Form.Group>

                            </Form.Row>

                            </Form>    
                        </Col>    
                    </Row>   
                </Card>                          
                </Col>
            </Row>
            <br/>
            <Row xs={1} sm={1} md={1} lg={1}>
                <Col>
                <Card className="UserProfileCardHeader" border="warning">
                        <div className="UserProfileHeadingClass">
                            <h4>Delivery Information</h4>
                        </div>    
               </Card>                      
                <Card className = "UserProfileCardBody card" border="warning">
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12}>                                    
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Address" />
                                </Form.Group>
                            </Form.Row>

                            <div className = "functions" >
                                <a  href = "" className = "btn btn-success" onClick={this.update} style = {{width: "12rem"}}>Update</a>
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
export default UserProfile;