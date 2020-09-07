import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import "./Product.scss";

class Product extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            productId: this.props.product.id,
            cartItemArray: [],
            quantity: 1,
        };
    }
    
    // //add to cart -  local storage
    // onClickAddToCartItem = event => 
    //       this.setState({[event.target.name]: event.target.value})
    //   addToCart = () => {
    //     let cart = localStorage.getItem('cart') 
    //                   ? JSON.parse(localStorage.getItem('cart')) : {};
    //     let id = this.props.product.id.toString();
    //     cart[id] = (cart[id] ? cart[id]: 0);
    //     let qty = cart[id] + parseInt(this.state.quantity);
    //     if (this.props.product.available_quantity < qty) {
    //       cart[id] = this.props.product.available_quantity; 
    //     } else {
    //       cart[id] = qty
    //     }
    //     localStorage.setItem('cart', JSON.stringify(cart));
    //   }

    //   componentDidMount() {

    //     let cart = localStorage.getItem('cart');
    //     if (!cart) return; 
    //     getCartProducts(cart).then((products) => {
    //       let total = 0;
    //       for (var i = 0; i < products.length; i++) {
    //         total += products[i].price * products[i].qty;
    //       }
    //       this.setState({ products, total });
    //       });
    //   }

    //   removeFromCart = (product) => {
    //     let products = this.state.products.filter((item) => item.id !== product.id);
    //     let cart = JSON.parse(localStorage.getItem('cart'));
    //     delete cart[product.id.toString()];
    //     localStorage.setItem('cart', JSON.stringify(cart));
    //     let total = this.state.total - (product.qty * product.price) 
    //     this.setState({products, total});
    //   }


    // clearCart = () => {
    //     localStorage.removeItem('cart');
    //     this.setState({products: []});
    //   }


    render() {
        return (
           
          <div className="card" onClick ={()=> this.props.onClick(this.props.product.id)} style={{height: "95%", marginBottom: "20px"}}>
                <div className="card-body" >
                    <h5 className="card-title">{this.props.product.productType}</h5>
                 
                         <img className="card-img productImg" src={this.props.product.imageUrl} alt="Product Image"/>
                    <div className="centerClass" >
                        
                            <h5 className="cardProductName" onClick ={(event)=> this.props.onClick(this.props.product.id)}>{this.props.product.name}</h5>
                    </div>
                    <div className="centerClass">
                        <h6 className="card-title">Rs.{this.props.product.unitPrice}</h6>
                    </div>
                    <Button onClick={() => this.onClickAddToCartItem(this.props.product)} style={{width: "100%"}} variant="warning">Add to Cart</Button>
                </div>
            </div>
        );
    }
}

export default Product;