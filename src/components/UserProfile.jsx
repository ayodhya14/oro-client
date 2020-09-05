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
            <Row xs={1} sm={2} md={3} lg={4}>
                <Col>
                <Card className="UserCardHeader" bg="warning">
                        <div className="UserHeadingClass">
                            <h2>Register</h2>
                        </div>    
                    </Card>                      
                    <Card className = "UserCardBody card" border="warning">
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
     
                                    <Form.Group as={Col} md="8">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Email"/>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Your Address" />
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Mobile</Form.Label>
                                        <Form.Control type="number" placeholder="Enter Your Mobile Number" />
                                    </Form.Group>

                                </Form.Row>

                                <Button variant="warning" type="submit" style= {{ width: "100%"}} >
                                        Save
                                </Button>

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