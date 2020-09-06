import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";

import MainSlider from "./MainSlider";
import ProductList from "./ProductList";

import "./Home.scss";

import { useState } from "react";
import { useEffect } from "react";

function Home (){
    let [term, setTerm] = useState('');
 
        
        return(
            <div className = "homePage_parentDiv">
                <div className = "mainHeaderClass">
                    <Header onChange={(value) => setTerm(value)} />           
                </div>
                <div className = "mainSliderClass">
                    <MainSlider />
                </div>
                <div className = "mainProductListClass">
                    <ProductList term={term}  />
                </div>
                <div className = "mainFooterClass">
                    <Footer />
                </div>
                        
            </div>
            
        );

    

}

export default Home;