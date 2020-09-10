// import React, { Component } from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { render } from "@testing-library/react";

// class UserLogin extends Component {
    
//     constructor(props) {
//       super(props);
//       name: React,
//       cart: [
//         {
//             image: "https://i.pinimg.com/originals/eb/95/d3/eb95d3eafbf6d85ec230c13eedcbd8db.png",
//             name: "Pin on Women jewelry",
//             price: 3000,
//             subTotal: 3000,
//             qty: 1,
//             count: 1
//         }
//       ]
//    };

//     render() {
//         return(
//             <main className = "pa3 pa5-na flex flex-wrap">
//                 <ul>
//                     this.state.cart.map(c => <li>{c.name} | units {c.units}</li>)
//                 </ul>
//                 {
//                 products.map(p => <Product key ={p.id} {...p}  onClickAddToCartItem ={} />) 
//                 }
//             </main>
//         );
//     } 
// }

// render(<ViewCart />, document.getElementById('root'));
import React, { Component } from "react";
import React from 'react';
import Product from './Product';
import axios from "axios";

    export default class ProductItem extends React.Component {
      constructor(props) {
        super(props);
        this.state = {quantity: 1}
      }

      handleInputChange = event => 
          this.setState({[event.target.name]: event.target.value})
        addToCart = () => {
          let cart = localStorage.getItem('cart') 
                ? JSON.parse(localStorage.getItem('cart')) : {};
          let id = this.props.product.id.toString();
          cart[id] = (cart[id] ? cart[id]: 0);
          let qty = cart[id] + parseInt(this.state.quantity);
          if (this.props.product.available_quantity < qty) {
            cart[id] = this.props.product.available_quantity; 
          } else {
            cart[id] = qty
          }
          localStorage.setItem('cart', JSON.stringify(cart));
      }
      
      render(){
        const { product } = this.props;
        return (
         <div className="card" style={{ marginBottom: "10px"}}>
           <div className="card-body">
             <h4 className="card-title">{product.name}</h4>
             <p className="card-text">{product.description}</p>
             <h5 className="card-text"><small>price: </small>${product.price}</h5>
             <span className="card-text">
               <small>Available Quantity: </small>{product.available_quantity}
             </span>
             { product.available_quantity > 0 ?
              <div>
                 <button className="btn btn-sm btn-warning float-right" 
                    onClick={this.addToCart}>Add to cart</button>
                 <input type="number" value={this.state.quantity} name="quantity" 
                    onChange={this.handleInputChange} className="float-right" 
                    style={{ width: "60px", marginRight: "10px", borderRadius: "3px"}}/>
              </div> : 
              <p className="text-danger"> product is out of stock </p>
            }
          </div>
        </div>
       )
     }
    }