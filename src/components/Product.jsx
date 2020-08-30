import React, { Component } from "react";
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
                    <a href="#" className="btn btn-warning"  style={{width: "100%", color: "black"}}>Add to Cart</a>
                </div>
             </div>
        );
    }
}

export default Product;