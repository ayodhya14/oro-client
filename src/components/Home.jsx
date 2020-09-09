import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";

import MainSlider from "./MainSlider";
import ProductList from "./ProductList";

import "./Home.scss";

import { useState } from "react";
import { useEffect } from "react";
import SingleProduct from "./SingleProduct";

function Home() {
    let [term, setTerm] = useState('');
    let [productId, setId] = useState('');
    return (
        <div className="homePage_parentDiv">
            <div className="mainHeaderClass">
                <Header onChange={(value) => setTerm(value)} />
            </div>
            <div className = "mainProductListClass">
                {
                    !(productId) ?
                        <div>
                            <div className="mainSliderClass"><MainSlider />
                        </div><div className="mainProductListClass"><ProductList term={term} onClick={(value) => setId(value)} /></div></div> :
                        <div className="SingleProductParentClass"><SingleProduct  id={productId} /> </div>
                }
            </div>
            <div className="mainFooterClass">
                <Footer />
            </div>
        </div>
    );
}

export default Home;