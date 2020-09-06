import React, { Component } from "react";
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
            let name = res.profileObj.name;
            let imageUrl = res.profileObj.imageUrl;
            console.log(imageUrl);
            this.setState({ userName: name });
            window.location.href = "http://localhost:3000/";
        };

        const onFailure = (res) => {
            console.log("[Login Failed] res:", res);
        };

        const facebookResponse = (res) => {
            console.log(res);
            let name = res.name;
            this.setState({ userName: name });
            window.location.href = "http://localhost:3000/";
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
