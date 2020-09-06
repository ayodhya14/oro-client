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

import Login from './Login';
import "./UserRegister.scss";
import axios from "axios";

class UserRegister extends Component{
    constructor(props){
        super(props);

//Bind User feilds to the Input form
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeMobile = this.onChangeMobile.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.submitUser = this.submitUser.bind(this);
   
    this.state = { 
        firstName: '', lastName: '', gender: '', mobile: '', address: '', email: '', password: ''
    }
}
onChangeFirstName(e){
    this.setState({ firstName: e.target.value});
}

onChangeLastName(e){
    this.setState({ lastName: e.target.value});
}

onChangeGender(e){
    this.setState({ gender: e.target.value});
}

onChangeMobile(e){
    this.setState({ mobile: e.target.value});
}

onChangeAddress(e){
    this.setState({ address: e.target.value});
}

onChangeEmail(e){
    this.setState({ email: e.target.value});
}

onChangePassword(e){
    this.setState({ password: e.target.value});
}

submitUser = event => {
    //stop the refresh inside the DOM
    event.preventDefault();

    const obj = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        gender: this.state.gender,
        mobile: this.state.mobile,
        address: this.state.address,
        email: this.state.email,
        password: this.state.password,
    };

    // append '+' mark to the mobile number.
    let val = obj.mobile.slice(2);
    let val2 = obj.mobile.slice(1);
    let val1 = obj.mobile.split(val)[0];
    let val3 = obj.mobile.split(val2)[0];
    if (val1 == "94") {
        obj.mobile = "+" + obj.mobile;
    } else if (val3 == "0") {
        obj.mobile = "+94" + val2;
    } else {
        obj.mobile = "+94" + obj.mobile;
    }

    axios.post(`http://localhost:5000/api/users/`, obj)
        .then(res => {
        console.log(res);
    })
}

  render() {
    return (
        <div className = "UserRegisterParentClass">
            <Row xs={1} sm={1} md={1} lg={1}>
                <Col >
                    <Card className="RegisterCardHeader" bg="warning">
                        <div className="RegisterHeadingClass">
                            <h2>Register</h2>
                        </div>    
                    </Card>                      
                    <Card className = "RegisterCardBody card" border="warning">
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12}>                                    
                            <Form onSubmit={this.submitUser}>
                                <Form.Row>
                                    <Form.Group as={Col} md="4">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control className = "from-control"  type="String" value={this.state.firstName} onChange={this.onChangeFirstName}
                                        // type="text"
                                        placeholder="First Name"
                                    />
                                    </Form.Group>

                                    <Form.Group as={Col} md="4">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control className = "from-control"  type="String" value={this.state.lastName} onChange={this.onChangeLastName}
                                        // type="text"
                                        placeholder="Last Name"
                                    />
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Control  as="select" className = "from-control"  type="String" value={this.state.gender} onChange={this.onChangeGender}
                                            // className="mr-sm-2"
                                            // id="inlineFormCustomSelect"
                                            // custom
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
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control placeholder="Enter Address" className = "from-control"  type="String" value={this.state.address} onChange={this.onChangeAddress}/>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Mobile</Form.Label>
                                        <Form.Control placeholder="+94 (00 000 0000)"  className = "from-control" max="10" type="Number" value={this.state.mobile} onChange={this.onChangeMobile}/>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} md="8">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control placeholder="Enter Email" className = "from-control"  type="email" value={this.state.email} onChange={this.onChangeEmail}/>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Create Password</Form.Label>
                                        <Form.Control placeholder="Create Your Password"  className = "from-control"  type="password" value={this.state.password} onChange={this.onChangePassword}/>
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
                                    {/* <div className = "UserRegisterClass" > 
                                    <span><a  href = "/ViewUserLogin" onClick={this.login} className="anquerTagExistingUser">Already have an account?</a></span>
                                    <Col>
                                        <Login />
                                    </Col>
                                    </div> */}
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
export default UserRegister;