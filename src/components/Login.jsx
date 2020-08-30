import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login';

const clientId = '96012022962-kl09sfnr1noq3q1lt93g3i7bmmrr8n2p.apps.googleusercontent.com';

function Login() {
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
    };

    const onFailure = (res) => {
        console.log('[Login Failed] res:', res);
    };

    return (
        <div className="row" style={{float: "right", marginRight: "2%"}}>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={true}>
            </GoogleLogin>
        </div>
    );
}

export default Login; 