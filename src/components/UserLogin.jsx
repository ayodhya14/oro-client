import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormCheck from "react-bootstrap/FormCheck";
import FormFile from "react-bootstrap/FormFile";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

import "./UserLogin.scss";
import Login from "./Login";
import Recaptcha from "./Recaptcha";
import Logout from "./Logout";
import Axios from "axios";

class UserLogin extends Component {
  constructor(props) {
    super(props);

    // //Bind Login feilds to Input form
    //     this.onChangeUserId = this.onChangeUserId.bind(this);
    //     this.onChangeProductId = this.onChangeProductId.bind(this);
    //     this.onChangeQuantity = this.onChangeQuantity.bind(this);

    //     this.state = {
    //         userId: '', productId: '', qty: '', subTotal: '', total: '', date: ''
    //     }
    // }
    // onChangeUserId(e){
    //     this.setState({ userId: e.target.value});
    // }

    // onChangeProductId(e){
    //     this.setState({ productId: e.target.value});
    // }

    //   submitUser(){
    //       const obj = {
    //           userId: this.state.userId,
    //           productId: this.state.productId

    //       };
    //       Axios.post('http://localhost:5000/api/usersLogin/', obj).then(res => console.log(res.data));

    //       this.setState({
    //         userId: '', productId: '', qty: '', subTotal: '', total: '', date: ''
    //       });
    //   }

    //   componentDidMount(){
    //       Axios.get('http://localhost:5000/api/usersLogin/').then(response =>{
    //           this.setState({
    //               userId: response.date.userId,
    //               productId: response.date.productId,
    //           });
    //           console.log(response.data)
    //       })
    //       .catch(function (error){
    //           console.log(error);
    //       });
  }

  render() {
    return (
      <div className="UserLoginParentClass">
        <Row xs={1} sm={1} md={1} lg={1}>
          <Col>
            <Card className="loginCardHeader" bg="warning">
              <div className="loginHeadingClass">
                <h2>Login</h2>
              </div>
            </Card>
            <Card className="loginCardBody card" border="warning">
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <Form>
                    <Row>
                      <Col>
                        <Login />
                      </Col>
                    </Row>
                    <Row style={{ marginLeft: "48%", color: "#a4a0a7" }} className="mt-4 mb-4">
                      <div>
                        <h5>
                          OR
                        </h5>
                      </div>
                    </Row>
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
                      <Form.Check
                        type="checkbox"
                        label="Remember user details"
                      />
                    </Form.Group>

                    <div className="">
                      <Row xs={2} sm={2} md={2} lg={2}>
                        <Col>
                          <Recaptcha />
                        </Col>
                      </Row>
                    </div>
                    <br />
                    <Button
                      variant="warning"
                      type="submit"
                      style={{ width: "100%" }}
                    >
                      Login
                    </Button>
                    <div className="parentClassForAnqure">
                      <a
                        href="/ViewUserRegister"
                        onClick={this.login}
                        className="anquerTagNewUser"
                      >
                        New User?
                      </a>
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
