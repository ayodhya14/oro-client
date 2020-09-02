import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './Product';
import axios from "axios";
import "./ProductSearch.scss";

class ProductSearch extends Component{

    state = {
        allProducts: [],
    };

    render() {
        return (
            <div className = "productListParentClass">
                <Row xs={1} sm={2} md={3} lg={4}>
                    {this.state.allProducts.map((product, index) => (
                        <Col xs={12} sm={6} md={4} lg={3} key={index}>
                            <Product
                                key={index} 
                                product={product}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }

    async componentDidMount() {
        let name = this.props.sendSearch;
        console.log(name);
        
            let { data } = await axios.get("http://localhost:5000/api/products");
            this.setState({ filterallProducts: data }, () => {
                this.filterCategory(name);
            });
        

        // let {data} = await axios.get(`http://localhost:5000/api/products/name/${Header.state.name}`);

        console.log(data);
    
        let products = data.map((product) => {
          return {
            id: product._id,
            productType: product.productType,
            imageUrl: product.imageUrl,
            description: product.description,
            availableQty: product.availableQty,
            unitPrice: product.unitPrice,
            name: product.name,
          };
        });
    
        this.setState({ allProducts: products });
      }
      
      filterCategory(categoryName) {
        //Assing all product to new variable
        let filterProduct;
        filterProduct = this.state.filterallProducts;
        //Filter new variable 
        if (categoryName === "Bangle") {
            filterProduct = filterProduct.filter(function (item) {
                return item.productType === 'Bangle';
            }).map(function ({ id, imageUrl, description, availableQty, unitPrice, name }) {
                return { id, imageUrl, description, availableQty, unitPrice, name };
            });

        } if (categoryName === "Necklace") {
            filterProduct = filterProduct.filter(function (item) {
                return item.productType === 'Necklace';
            }).map(function ({ id, imageUrl, description, availableQty, unitPrice, name }) {
                return { id, imageUrl, description, availableQty, unitPrice, name };
            });

        } if (categoryName === "Earring") {
            filterProduct = filterProduct.filter(function (item) {
                return item.productType === 'Earring';
            }).map(function ({ id, imageUrl, description, availableQty, unitPrice, name }) {
                return { id, imageUrl, description, availableQty, unitPrice, name };
            });

        } if (categoryName === "Pendent") {
            filterProduct = filterProduct.filter(function (item) {
                return item.productType === 'Pendent';
            }).map(function ({ id, imageUrl, description, availableQty, unitPrice, name }) {
                return { id, imageUrl, description, availableQty, unitPrice, name };
            });
        }
    }

    //   async searchProduct(){
    //     console.log(this.props.name);
    //     let product = await axios.get(`http://localhost:5000/api/products/name/${this.props.name}`);
    //     console.log(product);
    //   }

}
export default ProductSearch;