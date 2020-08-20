import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Footer extends Component{

    render() {
        return (
            <div className = "FooterParentClass">
               <Row>
                   
                        <div className="card-body">
                            <p className="card-title">Footer</p>
                        </div>
                   
                </Row>
            </div>
        );
    }

}
export default Footer;