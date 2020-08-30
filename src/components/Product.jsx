import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import "./Product.scss";
class Product extends Component {
    state = {
        productId: this.props.product.id,
    };

    render() {
        return (
            <div className="card" style={{height: "95%", marginBottom: "20px"}}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.product.productType}</h5>
                    <img className="card-img productImg" src={this.props.product.imageUrl} alt="Product Image"/>
                    <div className="centerClass">
                        <h5 className="card-title">{this.props.product.name}</h5>
                    </div>
                    <div className="centerClass">
                        <h6 className="card-title">{this.props.product.unitPrice}</h6>
                    </div>
                    <Button style={{width: "100%"}} variant="warning">Add to Cart</Button>
                </div>
             </div>
        );
    }
}

export default Product;