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
                <QRCode value={this.state.value} />,
            </div>
        );
    }
}

export default AccountTab;