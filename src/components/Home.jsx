import React, { Component } from "react";

import Footer from "./Footer";
import Header from "./Header";
import MainSlider from "./MainSlider";
import ProductList from "./ProductList";

class Home extends Component{
    state = {};
    render() {
        return(
            <div className = "homePage_parentDiv">
                <div className = "header">
                    <Header />
                </div>
                <div className = "slider">
                    <MainSlider />
                </div>
                <div className = "product_list">
                    <ProductList />
                </div>
                <div className = "footer">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Home;