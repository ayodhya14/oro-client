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
        filterallProducts: [],
        productId:1

    };
    // setProductValue(value){
    //     this.setState({ productId: value });
    //     this.props.onClick(this.state.productId);
    // }

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
                                onClick={(value) => this.props.onClick(value)}
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
            this.dynamicSearch();
        }
    }
    async allProducts() {
        console.log('in all');
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
        
    }

    async dynamicSearch() {
        await this.allProducts();
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
        console.log('in category');
        //filtering data according to category
        let { data } = await axios.get(`http://localhost:5000/api/products/name/${categoryName}`);
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
        console.log(products);
        this.setState({ allProducts: products });
        // this.setState({ filterallProducts: data }, () => {
        //     this.filterCategory(categoryName);
        // });
    }

   
}
export default ProductList;