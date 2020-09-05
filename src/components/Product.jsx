import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import "./Product.scss";

class Product extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            productId: this.props.product.id,
            cartItemArray: [],
        };
    }

    onClickAddToCartItem = (val) => {
        
    };

    render() {
        return (
            <div className="card" style={{height: "95%", marginBottom: "20px"}}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.product.productType}</h5>
                    <a href = "/ViewSingleProduct">
                         <img className="card-img productImg" src={this.props.product.imageUrl} alt="Product Image"/>
                    </a>
                    <div className="centerClass">
                        <a href = "/ViewSingleProduct">
                            <h5 className="cardProductName">{this.props.product.name}</h5>
                         </a> 
                    </div>
                    <div className="centerClass">
                        <h6 className="card-title">{this.props.product.unitPrice}</h6>
                    </div>
                    <Button onClick={() => this.onClickAddToCartItem(this.props.product)} style={{width: "100%"}} variant="warning">Add to Cart</Button>
                </div>
            </div>
        );
    }
}

export default Product;