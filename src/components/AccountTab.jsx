import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import UserProfile from "./UserProfile";
import UserOrders from "./UserOrders";

class AccountTab extends Component {
    
    constructor(props) {
        super(props)
        this.state = {

        };
    }

    render() {
        return (
            <div className = "accountTabParentClass">
            <Row xs={1} sm={1} md={2} lg={2}>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <Tabs defaultActiveKey="userProfile" id="tab-account">
                            <Tab eventKey="userProfile" title="Profile">
                            <br/>
                                <UserProfile />
                            </Tab>
                            <Tab eventKey="userOrders" title="Orders">
                            <br/>
                                <UserOrders />
                            </Tab>
                        </Tabs>
                    </Col>
            </Row>
        </div>
        );
    }
}

export default AccountTab;