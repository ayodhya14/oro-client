import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Link, Route } from "react-router-dom";

import Jewellery from './components/Home.jsx';
import ViewCart from './components/ViewCart.jsx'
import ViewCheckout from './components/ViewCheckout.jsx';
import ViewUserLogin from './components/ViewUserLogin.jsx';
import ViewUserRegister from './components/ViewUserRegister.jsx';
import ViewUserProfile from './components/ViewUserProfile.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search.jsx';

 {/* This line can be included in your src/index.js or App.js file*/}


ReactDOM.render(<BrowserRouter>
    <Route exact path="/" component={Jewellery} />
    <Route exact path="/viewCart" component={ViewCart} />
    <Route exact path="/search" component={Search}/>
    <Route exact path="/viewCheckout" component={ViewCheckout} />
    <Route exact path="/viewUserLogin" component={ViewUserLogin} />
    <Route exact path="/viewUserRegister" component={ViewUserRegister} />
    <Route exact path="/viewUserProfile" component={ViewUserProfile} />
    
  </BrowserRouter>,
 document.getElementById('root'));