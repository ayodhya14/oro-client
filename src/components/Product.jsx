import React, { Component, useState } from "react";
import Button from 'react-bootstrap/Button';
import "./Product.scss";

class Product extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            productId: this.props.product.id,
            cartItemIds: [],
            quantity: 1,
        };
    }

    onClickAddToCartItem = (id) => {
        let cartItem = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : {};
        let productId = id;
        cartItem[productId] = (cartItem[productId] ? cartItem[productId]: 0);
        let qty = cartItem[productId] + parseInt(this.state.quantity);
        if (this.props.product.availableQty < qty) {
            cartItem[productId] = this.props.product.availableQty; 
        } else {
            cartItem[productId] = qty
        }
        localStorage.setItem('cartItems', JSON.stringify(cartItem));
        let val = localStorage.getItem('cartItems').split(",");
        val[0] = val[0].replace("{", "");
        val[val.length - 1] = val[val.length - 1].replace("}", "");
        for (let x = 0; x < val.length; x++) {
            let obj = {
                id: "",
                qty: ""
            }
            obj.id = val[x].split(":")[0];
            obj.qty = val[x].split(":")[1];
            val[x] = obj;
        }
        localStorage.setItem('cartItemsLength', val.length);
        window.location.reload();
    }

    render() {
        return (
          <div className="card" style={{height: "95%", marginBottom: "20px"}}>
                <div className="card-body" >
                    <h5 className="card-title">{this.props.product.productType}</h5>
                        <img className="card-img productImg" src={this.props.product.imageUrl} alt="Product Image"/>
                    <div className="centerClass" >
                        <h5 className="cardProductName" onClick ={(event)=> this.props.onClick(this.props.product.id)}><a style={{color: "rgba(238, 135, 0, 0.87)"}} href={"/viewSingleProduct/" + this.props.product.id}>{this.props.product.name}</a></h5>
                    </div>
                    <div className="centerClass">
                        <h6 className="card-title">Rs.{this.props.product.unitPrice}</h6>
                    </div>
                    <Button onClick={() => this.onClickAddToCartItem(this.props.product.id)} style={{width: "100%"}} variant="warning">Add to Cart</Button>
                </div>
            </div>
        );
    }
}

export default Product;