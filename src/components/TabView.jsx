import React, { Component } from "react";

import Tab from 'react-bootstrap/Tab';

import Footer from "./Footer";
import Header from "./Header";
import MainSlider from "./MainSlider";
import ProductList from "./ProductList";
import AccountTab from "./AccountTab";


class TabView extends Component{
    state = {};
    render() {
        return(
            <div className = "homePage_parentDiv">
                <div className = "mainHeaderClass">
                    <Header />
                </div>
                <div className = "viewCheckout">
                    <AccountTab />
                </div>
                <div className = "mainFooterClass">
                    <Footer />
                </div>      
            </div>
            
        );

    }

}
export default TabView;

