import React, { Component } from "react";
var QRCode = require('qrcode-react');

class AccountTab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "http://facebook.github.io/react/"
        };
    }
    render() {
        return (
            <div className = "qrClass">
                <QRCode value="http://facebook.github.io/react/" />,
            </div>
        );
    }
}

export default AccountTab;