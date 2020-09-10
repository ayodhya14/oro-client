import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'
import FormFile from 'react-bootstrap/FormFile'
import Button from 'react-bootstrap/Button'
import axios from "axios";

import { Card } from "react-bootstrap";

class UserProfile extends Component {

    constructor(props) {
        super(props);

        // Bind fields to Input form
        this.onChangeFName = this.onChangeFName.bind(this);
        this.onChangeLName = this.onChangeLName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);

                  this.state = {
                user: {},
                firstName: '',
                lastName: '',
                mobile: '',
                address: '',
                email: '',
                gemder: '',
                id:''

            }
    }

    render() {
        return (
            <div className="UserProfileParentClass">
                <Row xs={1} sm={1} md={1} lg={1}>
                    <Col>
                        <Card className="UserProfileCardHeader" border="warning">
                            <div className="UserProfileHeadingClass">
                                <h4>User Information</h4>
                            </div>
                        </Card>
                        <Card className="UserProfileCardBody card" border="warning">
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12}>
                                    <Form>
                                        <Form.Row>
                                            <Form.Group as={Col} md="4">
                                                <Form.Label>First name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="First name"
                                                    value={this.state.firstName}
                                                    onChange={this.onChangeFName}
                                                />
                                            </Form.Group>

                                            <Form.Group as={Col} md="4">
                                                <Form.Label>Last name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Last name"
                                                    value={this.state.lastName}
                                                    onChange={this.onChangeLName}
                                                />
                                            </Form.Group>

                                            <Form.Group as={Col}>

                                                <Form.Label>Gender</Form.Label>
                                                <Form.Control as="select"
                                                    className="mr-sm-2"
                                                    id="inlineFormCustomSelect"
                                                    value={this.state.gender}
                                                    onChange={this.onChangeGender}
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
                                                <Form.Control type="email" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail} />
                                            </Form.Group>

                                            <Form.Group as={Col}>
                                                <Form.Label>Mobile</Form.Label>
                                                <Form.Control type="number" placeholder="Enter Your Mobile Number" value={this.state.mobile} onChange={this.onChangeMobile}/>
                                            </Form.Group>

                                        </Form.Row>

                                    </Form>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <br />
                <Row xs={1} sm={1} md={1} lg={1}>
                    <Col>
                        <Card className="UserProfileCardHeader" border="warning">
                            <div className="UserProfileHeadingClass">
                                <h4>Delivery Information</h4>
                            </div>
                        </Card>
                        <Card className="UserProfileCardBody card" border="warning">
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12}>
                                    <Form>
                                        <Form.Row>
                                            <Form.Group as={Col}>
                                                <Form.Label>Address</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Your Address" value={this.state.address} onChange={this.onChangeAddress} />
                                            </Form.Group>
                                        </Form.Row>

                                        <div className="functions" >
                                            <a href="" className="btn btn-success" onClick={this.update} style={{ width: "12rem" }}>Update</a>
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
    async componentDidMount() {
        this.setData();
    }
    async setData(){
        let user = JSON.parse(localStorage.OROLoginUser);
        let id = user.id;
  
        let { data } = await axios.get(`http://localhost:5000/api/users/${id}`);
        console.log(data);
        
        this.setState({ firstName: data.firstName });
        this.setState({ lastName: data.lastName });
        this.setState({ gender: data.gender });
        this.setState({ mobile: data.mobile });
        this.setState({ address: data.address});
        this.setState({ email: data.email });
        this.setState({ id : id});
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value });
    }
    onChangeFName(e) {
        this.setState({ firstName: e.target.value });
    }

    onChangeLName(e) {
        this.setState({ lastName: e.target.value });
    }
    onChangeAddress(e) {
        this.setState({ address: e.target.value });
    }
    onChangeGender(e) {
        this.setState({ gender: e.target.value });
    }
    onChangeMobile(e) {
        this.setState({ mobile: e.target.value });
    }

    update = event => {
        event.preventDefault();

        const obj = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            gender: this.state.gender,
            mobile: this.state.mobile,
            address: this.state.address,
            email: this.state.email
        };

        // append '+' mark to the mobile number.
        // let val = obj.mobile.slice(2);
        // let val2 = obj.mobile.slice(1);
        // let val1 = obj.mobile.split(val)[0];
        // let val3 = obj.mobile.split(val2)[0];
        // if (val1 == "94") {
        //     obj.mobile = "+" + obj.mobile;
        // } else if (val3 == "0") {
        //     obj.mobile = "+94" + val2;
        // } else {
        //     obj.mobile = "+94" + obj.mobile;
        // }

        axios.put(`http://localhost:5000/api/users/${this.state.id}`, obj)
            .then(res => {
                console.log(res);
                if (res.status == 200) {
                    console.log(res);
                    alert('Successfully Updated!')
                }
            })
    }
    
}
export default UserProfile;