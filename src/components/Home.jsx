import React, { Component } from "react";

import Footer from "./Footer";
import Header from "./Header";
import MainSlider from "./MainSlider";
import ProductList from "./ProductList";
import Cart from "./Cart";

import "./Home.scss";

class Home extends Component{
    state = {};
    render() {
        return(
            <div className = "homePage_parentDiv">
                <div className = "mainHeaderClass">
                    <Header />
                </div>
                <div className = "mainSliderClass">
                    <MainSlider />
                </div>
                <div className = "mainProductListClass">
                    <ProductList />
                </div>
                <div className = "viewCartClass">
                    <Cart />
                </div>
                <div className = "mainFooterClass">
                    <Footer />
                </div>
                        
            </div>
            
        );

        // var homePage;
        // var viewCart;
        // if (this.state === Home.jsx) {
            
        // } else {
        //     viewCart = <Cart />;
        // }

        // return (
        //     <nav>
        //         <Home />
        //         {homePage}
        //     </nav>
        // );

    }
}
//End---Create a Component---

export default Home;