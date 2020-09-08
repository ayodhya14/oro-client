import React, { Component } from "react";
import axios from "axios";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";

import "./Login.scss";

const clientId =
    "96012022962-kl09sfnr1noq3q1lt93g3i7bmmrr8n2p.apps.googleusercontent.com";
const appId = "1798874110260550";

class Login extends Component {
    state = { userName: " " };
    render() {
        const onSuccess = (res) => {
            //    console.log('[Login Success] currentUser:', res.profileObj);
            console.log(res.profileObj);
            // let name = res.profileObj.name;
            this.setState({ userName: res.profileObj.name });
            localStorage.setItem("LoginWithGoogle", true);
            // window.location.href = "http://localhost:3000/";
            localStorage.setItem("username", res.profileObj.name);

            const obj = {
                firstName: res.profileObj.givenName,
                lastName: res.profileObj.familyName,
                googleId: res.profileObj.googleId,
                email: res.profileObj.email,
                loginWithGoogle: true
              };
              
              axios.post(`http://localhost:5000/api/auth`, obj)
                .then(res => {
                  this.setState({
                    token: res.data.token
                  });
                  localStorage.setItem("userTokenORO", res.data.token);
                  localStorage.setItem("OROLoginUser", JSON.stringify(res.data));
                  console.log(localStorage.OROLoginUser);
                  window.location.reload();
                  window.location.href = "http://localhost:3000/";
              })
        };

        const onFailure = (res) => {
            console.log("[Login Failed] res:", res);
            localStorage.setItem("LoginWithGoogle", false);
        };

        const facebookResponse = (res) => {
            console.log(res);
            let name = res.name;
            this.setState({ userName: name });
            localStorage.setItem("LoginWithGoogle", true);
            // window.location.href = "http://localhost:3000/";
        };

        return (
            <div>
                <GoogleLogin
                    className="google-btn"
                    clientId={clientId}
                    buttonText="Login with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={"single_host_origin"}
                    style={{ marginTop: "100px" }}
                    isSignedIn={true}
                />

                <FacebookLogin
                    appId={appId}
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={facebookResponse}
                />

                <p style={{ color: "#000000" }}>{this.state.userName}</p>

                <div></div>
            </div>
        );
    }
}
// function Login() {

// }

export default Login;
