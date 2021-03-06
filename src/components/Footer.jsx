import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// import { Link } from 'react-router';

class Footer extends Component{

    render() {
        return (
            <div className = "FooterParentClass">
                <Row style={{marginTop: "2vh", backgroundColor: "Black"}}>
                    {/* Logo */}
                    <Col xs={2} sm={2} md={3} lg={3} className="headerLinks"style={{marginLeft: "5%" , marginTop: "3vh"}}>
                        <div>
                            <Image roundedCircle className="OROLogo" src="https://res.cloudinary.com/persystance-network/image/upload/v1597958481/slt/portal_user/1597958481008.jpg" alt="ORO Jewellers Main Logo" />
                        </div>
                    </Col>
                    {/* Home, About Us, Branchers */}
                    <Col xs={2} sm={2} md={3} lg={3} className="headerLinks"style={{marginLeft: "4%" , marginTop: "3vh"}}>
                         <a style={{color: "#fefefe"}} className="link" href="/">
                            <h5>Home</h5>
                        </a>
                        <a style={{color: "#fefefe"}} className="link" href="/">
                            <h5>About</h5>
                        </a>
                        <a style={{color: "#fefefe"}} className="link" href="/ourLocation">
                            <h5>Branchers</h5>
                        </a>
                    </Col>
                    {/* Contact Us */}
                    <Col xs={2} sm={2} md={3} lg={3} className="headerLinks" style={{marginLeft: "4%", marginTop: "3vh"}}>
                        <h5>Contacts</h5>
                        Mobile:&nbsp;&nbsp;<a style={{color: "#fefefe"}} className="link" href="/">+94 76 655 9314</a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Email:&nbsp;&nbsp;<a style={{color: "#fefefe"}} className="link" href="/">ORO.Jewelleries@yahoo.com</a>
                    </Col>
                    <div style ={{marginLeft: "42%"}}>
                        <p>©2020 ORO Jewllerers</p> 
                    </div>
                </Row>                                        
            </div>
        );
    }

}
export default Footer;