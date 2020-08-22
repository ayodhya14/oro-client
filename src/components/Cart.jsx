import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

import "./Cart.scss";

class Cart extends Component{
    state = {};
    render() {
        return(
            <div className = "ParentClassCart">
                <Card className = "card">
                <Table responsive bordered hover>
                <thead className = "tableHeader" style = {{backgroundColor: "#0B0500"}}>
                    {/* <tr>
                        <th>#</th>
                          {Array.from({ length: 6 }).map((_, index) => (
                             <th key={index}>Table heading</th>
                          ))}
                    </tr> */}
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>SubTotal</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                {/* <tbody>
                    <tr>
                        <td>1</td>
                        {Array.from({ length: 7 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                </tbody> */}
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>
                        <Col xs={6} md={4}>
                        <Image src="holder.js/171x180" thumbnail  />
                        </Col>
                    </td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td> <Button className = "buttonClass" variant="outline-success">View</Button>{' '}</td>
                    <td> <Button className = "buttonClass" variant="outline-danger">Remove</Button>{' '}</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>
                        <Col xs={6} md={4}>
                        <Image src="holder.js/171x180" thumbnail  />
                        </Col>
                    </td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td> <Button className = "buttonClass" variant="outline-success"> View </Button>{' '}</td>
                    <td> <Button className = "buttonClass" variant="outline-danger">Remove</Button>{' '}</td>
                    </tr>               
                </tbody>
                </Table>
                </Card>
            </div>
    );
    }
}
export default Cart;
