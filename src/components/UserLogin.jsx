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
import axios from "axios";
import Alert from 'react-bootstrap/Alert'

class UserLogin extends Component {
  constructor(props) {
    super(props);

    //Bind Login feilds to Input form
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      

      this.state = {
        email: '', password: '', token: ''
      }
    }
    onChangeEmail(e){
      this.setState({ email: e.target.value});
    }

    onChangePassword(e){
      this.setState({ password: e.target.value});
    }

    login = event => {
      //stop the refresh inside the DOM
      event.preventDefault();

      const obj = {
        email: this.state.email,
        password: this.state.password,
        loginWithGoogle: false
      };
      axios.post(`http://localhost:5000/api/auth`, obj)
        .then(res => {
          this.setState({
            token: res.data.token
          });
          localStorage.setItem("userTokenORO", res.data.token);
          localStorage.setItem("OROLoginUser", JSON.stringify(res.data));
          window.location.reload();
          window.location.href = "http://localhost:3000/";
      })
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
                  <Form onSubmit={this.login}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control value={this.state.email} onChange={this.onChangeEmail} type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control value={this.state.password} onChange={this.onChangePassword} type="password" placeholder="Password" />
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
                      style={{ width: "100%" , fontSize: "18px"}}
                    >
                      Login
                    </Button>
                     
                    <div className="parentClassForAnqure">
                    <a
                      href="/ViewUserRegister"
                      className="anquerTagNewUser"
                    >
                      Not Registered Yet? Click Here
                    </a>
                  </div>
                  <Row style={{ marginLeft: "48%", color: "#a4a0a7" }} className="mt-4 mb-4">
                      <div>
                        <h4>
                          OR
                        </h4>
                      </div>
                    </Row>
                  <Row>
                      <Col>
                        <Login />
                      </Col>
                    </Row>
                   
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
