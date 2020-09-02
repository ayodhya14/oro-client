import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";

import MainSlider from "./MainSlider";
import ProductList from "./ProductList";
import GoogleBtn from './GoogleBtn';

import Login from './Login';
import Logout from './Logout';

import UserProfile from "./UserProfile";


class ViewUserProfile extends Component{
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
                <div className = "viewUserProfile">
                    <UserProfile />
                </div>
                <div className = "mainFooterClass">
                    <Footer />
                </div>
                        
            </div>
            
        );

    }

}
export default ViewUserProfile;

