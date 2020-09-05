import React, { Component } from "react";

const RecaptchaComp = require('react-recaptcha');
class Recaptcha extends Component {
    render() {
      return (
        <div>
          <RecaptchaComp
            sitekey="6Lf0CcgZAAAAANiCceGbwHBnV392KX1xlt0zoH_G"
          />
        </div>
      );
    };
  };
  
  export default Recaptcha;
