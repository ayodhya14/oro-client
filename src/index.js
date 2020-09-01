import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Link, Route } from "react-router-dom";
import Jewellery from './components/Home.jsx';
import ViewCart from './components/ViewCart.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'; {/* This line can be included in your src/index.js or App.js file*/}


ReactDOM.render(<BrowserRouter>
    <Route exact path="/" component={Jewellery} />
    <Route exact path="/viewCart" component={ViewCart} />
  </BrowserRouter>,
 document.getElementById('root'));