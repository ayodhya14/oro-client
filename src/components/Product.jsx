import React, { Component } from "react";

class Product extends Component {
    state = {
        productId: this.props.product.id,
    };

    render() {
        return (
            <div className="card" style={{width: "18rem", marginLeft: "5%"}}>
                    <div className="card-body">
                       
                         <img className="card-img" src={this.props.product.imageUrl} alt="Jewellery Collection"/>
                         {/* <h5 className="card-title">Necklace</h5> */}
                         <p>Gold Necklace with Flower Petal Shapes as a Pendant set with White Stones.</p>
                         <h6 className="card-title">Rs.32,000</h6>
                         <a href="#" className="btn btn-primary"  style={{width: "15.4rem"}}>Add to Cart</a>
                    </div>
             </div>
        );
    }
}

export default Product;