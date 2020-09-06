import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './Product';
import axios from "axios";
import "./ProductList.scss";

class ProductList extends Component {

    state = {
        allProducts: [],
        filterallProducts: []

    };

    render() {
        return (
            <div className="productListParentClass">

                <Row>
                    <Col sm="12" md={{ size: 6, offset: 4 }}>
                        <Button onClick={() => this.allProducts()} style={{ width: "10%", borderRadius: 0, borderTopLeftRadius: "20px", marginBottom: "1%" }} variant="warning" size="lg">All</Button>
                        <Button onClick={() => this.categoryFilterFunction('Bangle')} style={{ width: "10%", borderRadius: 0, marginBottom: "1%" }} variant="warning" size="lg">Bangle</Button>
                        <Button onClick={() => this.categoryFilterFunction('Necklace')} style={{ width: "11%", borderRadius: 0, marginBottom: "1%" }} variant="warning" size="lg">Necklace</Button>
                        <Button onClick={() => this.categoryFilterFunction('Earring')} style={{ width: "10%", borderRadius: 0, marginBottom: "1%" }} variant="warning" size="lg">Earring</Button>
                        <Button onClick={() => this.categoryFilterFunction('Pendent')} style={{ width: "11%", borderRadius: 0, borderTopRightRadius: "20px", marginBottom: "1%" }} variant="warning" size="lg">Pendent</Button>
                    </Col>
                </Row>
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
        this.allProducts();
    }

    async componentDidUpdate(prevProps, prevState) {        
        
        // if(prevState.allProducts !== this.state.allProducts){
        //     this.dynamicSearch();
        // }
        if(prevProps.term !== this.props.term){
            this.allProducts();
        }
    }
    async allProducts() {
        let { data } = await axios.get("http://localhost:5000/api/products");
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
        this.dynamicSearch()
        


    }

    dynamicSearch() {

        console.log("term is");
        console.log(this.props.term);

        //Dynamic search according to the product name            
        let products = this.state.allProducts.filter(product => {
            return product.name.toLowerCase().includes(this.props.term.toLowerCase())
        })
            .map(product => {
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
        console.log(products);
        this.setState({ allProducts: products });
    }

    async categoryFilterFunction(categoryName) {
        
        let { data } = await axios.get("http://localhost:5000/api/products");
        this.setState({ filterallProducts: data }, () => {
            this.filterCategory(categoryName);
        });
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

        //Loop filtered array
        let products = filterProduct.map((product) => {
            return {
                id: product.id,
                productType: product.productType,
                imageUrl: product.imageUrl,
                description: product.description,
                availableQty: product.availableQty,
                unitPrice: product.unitPrice,
                name: product.name,
            };
        });
        //Assing new array to display values
        this.setState({ allProducts: products });
    }
}
export default ProductList;