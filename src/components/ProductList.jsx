import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './Product';
import axios from "axios";
// import { FaCartPlus } from "react-icons/fa";

import "./ProductList.scss";
class ProductList extends Component{

    state = {
        allProducts: [],
    };

    render() {
        return (
            <div className = "productListParentClass">
                <div className="row">
                    {this.state.allProducts.map((product) => (
                        <div className="col" key={product.id}>
                            <Product
                                key={product.id} 
                                product={product}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    async componentDidMount() {
        let { data } = await axios.get("http://localhost:5000/api/products");
        console.log(data);
    
        let products = data.map((product) => {
          return {
            id: product._id,
            productType: product.productType,
            imageUrl: product.imageUrl,
            description: product.description,
            availableQty: product.availableQty,
          };
        });
    
        this.setState({ allProducts: products });
      }

}
export default ProductList;