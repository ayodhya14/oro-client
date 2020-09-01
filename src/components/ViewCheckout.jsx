import React, { Component } from "react";

import Footer from "./Footer";
import Header from "./Header";
import MainSlider from "./MainSlider";
import ProductList from "./ProductList";
import Checkout from "./Checkout";

import "./ViewCart.scss";

class ViewCheckout extends Component{
    state = {};
    render() {
        return(
            <div className = "homePage_parentDiv">
                <div className = "mainHeaderClass">
                    <Header />
                </div>
                {/* <div className = "mainProductListClass"> */}
                {/* </div> */}
                <div className = "viewCheckout">
                    <Checkout />
                </div>
                <div className = "mainFooterClass">
                    <Footer />
                </div>
                        
            </div>
            
        );

    }

}

export default ViewCheckout;

