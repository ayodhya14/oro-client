import React, { Component } from "react";
import { loadReCaptcha } from 'react-recaptcha-v3';
import { ReCaptcha } from 'react-recaptcha-v3';

class Recaptcha extends Component {

    componentDidMount() {
        loadReCaptcha("6LexAsgZAAAAAD7l0oD4VS9OypmjOJuvUCUYz7NP");
    }

    verifyCallback = (recaptchaToken) => {
      // Here you will get the final recaptchaToken!!!  
      console.log(recaptchaToken, "<= your recaptcha token")
    }
  
    updateToken = () => {
      // you will get a new token in verifyCallback
      this.recaptcha.execute();
    }
    render() {
      return (
        <div>
  
          <ReCaptcha
              ref={ref => this.recaptcha = ref}
              sitekey="6LexAsgZAAAAAD7l0oD4VS9OypmjOJuvUCUYz7NP"
              verifyCallback={this.verifyCallback}
          />
        </div>
      );
    };
  };
  
  export default Recaptcha;
