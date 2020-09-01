import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login';

const clientId = '96012022962-kl09sfnr1noq3q1lt93g3i7bmmrr8n2p.apps.googleusercontent.com';


class Login extends Component {

    state = { userName: " " };
    render () {

        const onSuccess = (res) => {
            //    console.log('[Login Success] currentUser:', res.profileObj);
            let name = res.profileObj.name;
            let imageUrl = res.profileObj.imageUrl;
            console.log(imageUrl);
            this.setState({userName: name});
                
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
                        isSignedIn={true}
                    >
                        
                    </GoogleLogin>
            <p style={{color: "#ffffff"}}>{this.state.userName}</p>

            <div></div>
                    
                </div>
            );
        
    }

}
// function Login() {
   

   
// }

export default Login; 