import React, { Component } from "react";

import Footer from "./Footer";
import Header from "./Header";
import MainSlider from "./MainSlider";
import ProductSearch from "./ProductSearch";

import "./Home.scss";

class Search extends Component{
    

    getSearch = (search) => {
        console.log(search.name);
        console.log("search")
        let newState = this.state;
        newState = search.name
        this.setState(newState);
        console.log(this.state);
    }
    
    render() {
        return(
            <div className = "homePage_parentDiv">
                <div className = "mainHeaderClass">
                    <Header sendSearch={this.getSearch.bind(this)}/>
                </div>
                <div className = "ProductSearchClass">
                    <ProductSearch sendSearch={this.state} />
                </div>
                <div className = "mainFooterClass">
                    <Footer />
                </div>
                        
            </div>
            
        );

    }

}

export default Search;