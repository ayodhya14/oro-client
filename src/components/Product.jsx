import React, { Component } from "react";

class Product extends Component {
    state = {
        productId: this.props.product.id,
    };

    render() {
        return (
            <div className="card" style={{width: "18rem", marginLeft: "5%"}}>
                    <div className="card-body">
                        <h5 className="card-title">Necklace</h5>
                         <img className="card-img" src={this.props.product.imageUrl} alt="Neckalace Collection"/>
                         <a href="#" className="btn btn-primary"  style={{width: "15.4rem"}}>Add to Cart</a>
                     </div>
                 </div>
        );
    }
}

export default Product;