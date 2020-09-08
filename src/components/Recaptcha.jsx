import React, { Component } from "react";

const RecaptchaComp = require('react-recaptcha');
class Recaptcha extends Component {
  render() {
    function callback(value) {
      // print recapture value
      console.log(value);
    }
    return (
      <div>
        <RecaptchaComp onloadCallback={callback} sitekey="6Lf0CcgZAAAAANiCceGbwHBnV392KX1xlt0zoH_G"/>
      </div>
    );
  };
};
export default Recaptcha;
