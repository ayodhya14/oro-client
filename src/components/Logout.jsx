import React, { Component } from 'react'
import { GoogleLogout } from 'react-google-login';
import "./Logout.scss";

const clientId = '96012022962-kl09sfnr1noq3q1lt93g3i7bmmrr8n2p.apps.googleusercontent.com';

class Logout extends Component {

    render() {
        const onSuccess = () => {
            // localStorage.removeItem();
            window.location.href = "http://localhost:3000/";
        };

        return (
            <div className="row" style={{ float: "right", marginRight: "2%" }}>
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout"
                    className="logoutBtn"
                    onLogoutSuccess={onSuccess}
                >
                </GoogleLogout>
            </div>
        );

    }

}


export default Logout;
