import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";

import MainSlider from "./MainSlider";
import ProductList from "./ProductList";
// import GoogleBtn from './GoogleBtn';

import Login from './Login';
import Logout from './Logout';

import SingleProduct from "./SingleProduct";


class ViewSingleProduct extends Component{
    state = {};
    render() {
        return(
            <div className = "homePage_parentDiv">
                <div className = "mainHeaderClass">
                    <Header />
                    {/* <Logout /> */}
                    {/* <Login /> */}
                </div>
                {/* <div className = "mainProductListClass"> */}
                    {/* <ProductList /> */}
                    {/* <GoogleBtn /> */}
                {/* </div> */}
                <div className = "viewSingleProduct" style={{display: "flex", justifyContent: "center" }}>
                    <SingleProduct />
                </div>
                <div className = "mainFooterClass">
                    <Footer />
                </div>
                        
            </div>
            
        );

    }

}
export default ViewSingleProduct;

