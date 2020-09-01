import React, { Component } from 'react'
import { GoogleLogout } from 'react-google-login';

const clientId = '96012022962-kl09sfnr1noq3q1lt93g3i7bmmrr8n2p.apps.googleusercontent.com';

class Logout extends Component {

    render() {
        const onSuccess = () => {
            window.location.reload(true);
        };

        return (
            <div className="row" style={{ float: "right", marginRight: "2%" }}>
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={onSuccess}
                >

                </GoogleLogout>
            </div>
        );

    }

}


export default Logout;
