import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from "react-router-dom";

import Jewellery from './components/Home.jsx';
import ViewCart from './components/ViewCart.jsx'
import ViewCheckout from './components/ViewCheckout.jsx';
import ViewUserLogin from './components/ViewUserLogin.jsx';
import ViewUserRegister from './components/ViewUserRegister.jsx';
import TabView from './components/TabView.jsx';
import ViewSingleProduct from './components/ViewSingleProduct.jsx';
import MapView from './components/MapView.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home.jsx';

 {/* This line can be included in your src/index.js or App.js file*/}

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" render={(props) => <Home {...props}/>} component={Jewellery} />
    <Route exact path="/viewCart" component={ViewCart} />
    <Route exact path="/viewCheckout" component={ViewCheckout} />
    <Route exact path="/viewUserLogin" component={ViewUserLogin} />
    <Route exact path="/viewUserRegister" component={ViewUserRegister} />
    <Route exact path="/User Profile" component={TabView} />
    <Route exact path="/viewSingleProduct/:id" component={ViewSingleProduct} />
    <Route exact path="/ourLocation" component={MapView} />
  </BrowserRouter>,
 document.getElementById('root'));