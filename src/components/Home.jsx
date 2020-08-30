import React, { Component } from "react";

import Footer from "./Footer";
import Header from "./Header";
import MainSlider from "./MainSlider";
import ProductList from "./ProductList";
import Cart from "./Cart";
import GoogleBtn from './GoogleBtn';
import Login from './Login';
import Logout from './Logout';

import "./Home.scss";

class Home extends Component{
    state = {};
    render() {
        return(
            <div className = "homePage_parentDiv">
                <div className = "mainHeaderClass">
                    <Header />
                    {/* <Logout /> */}
                    {/* <Login /> */}
                </div>
                <div className = "mainSliderClass">
                    <MainSlider />
                </div>
                <div className = "mainProductListClass">
                    <ProductList />
                    {/* <GoogleBtn /> */}
                </div>
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
//End---Create a Component---

export default Home;

// import React from 'react';
// import { Link } from 'react-router';

// class List extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>Please choose a repository from the list below.</p>
//                 <ul>
//                     <li><Link to="/Home">React</Link></li>
//                 </ul>
//             </div>
//         );
//     }
// }

// export default List;