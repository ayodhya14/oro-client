import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

class Cart extends Component{
    state = {};
    render() {
        return(
            <div className = "ParentClassCart">
                <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                          {Array.from({ length: 7 }).map((_, index) => (
                             <th key={index}>Table heading</th>
                          ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        {Array.from({ length: 7 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                </tbody>
                </Table>
            </div>
    );
    }
}
export default Cart;
