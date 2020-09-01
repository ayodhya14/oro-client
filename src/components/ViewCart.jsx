import React, { Component } from "react";

import Footer from "./Footer";
import Header from "./Header";
import MainSlider from "./MainSlider";
import ProductList from "./ProductList";
import Cart from "./Cart";

import "./ViewCart.scss";

class ViewCart extends Component{
    state = {};
    render() {
        return(
            <div className = "homePage_parentDiv">
                <div className = "mainHeaderClass">
                    <Header />
                </div>
                {/* <div className = "mainProductListClass"> */}
                {/* </div> */}
                <div className = "viewCartClass">
                    <Cart />
                </div>
                <div className = "mainFooterClass">
                    <Footer />
                </div>
                        
            </div>
            
        );

    }

}


export default ViewCart;

