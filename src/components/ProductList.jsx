import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { FaCartPlus } from "react-icons/fa";

import "./ProductList.scss";
class Productlist extends Component{

    render() {
        return (
            <div className = "productListParentClass">
                
                {/* dummy data 1st row */}
                <Row>
                <div className="card" style={{width: "18rem", marginLeft: "5%"}}>
                    <div className="card-body">
                        <h5 className="card-title">Necklace</h5>
                         <img className="card-img" src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" alt="Neckalace Collection"/>
                         <a href="#" className="btn btn-primary"  style={{width: "15.4rem"}}>Add to Cart</a>
                     </div>
                 </div>
                 <div className="card" style={{width: "18rem", marginLeft: "2%"}}>
                    <div className="card-body">
                        <h5 className="card-title">Necklace</h5>
                         <img className="card-img" src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" alt="Neckalace Collection"/>
                         <a href="#" className="btn btn-primary" style={{width: "15.4rem"}}>Add to Cart</a>
                     </div>
                 </div>
                 <div className="card" style={{width: "18rem", marginLeft: "2%"}}>
                    <div className="card-body">
                        <h5 className="card-title">Necklace</h5>
                         <img className="card-img" src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" alt="Neckalace Collection"/>
                         <a href="#" className="btn btn-primary" style={{width: "15.4rem"}}>Add to Cart</a>
                     </div>
                 </div>
                 <div className="card" style={{width: "18rem", marginLeft: "2%"}}>
                    <div className="card-body">
                        <h5 className="card-title">Necklace</h5>
                         <img className="card-img" src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" alt="Neckalace Collection"/>
                         <a href="#" className="btn btn-primary" style={{width: "15.4rem"}}>Add to Cart</a>
                     </div>
                 </div>
               </Row>
               
               {/* dummy data 2nd row */}
               <Row style= {{marginTop: "4vh"}}>
                <div className="card" style={{width: "18rem", marginLeft: "5%"}}>
                    <div className="card-body">
                        <h5 className="card-title">Necklace</h5>
                         <img className="card-img" src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" alt="Neckalace Collection"/>
                         <a href="#" className="btn btn-primary" style={{width: "15.4rem"}}>Add to Cart</a>
                     </div>
                 </div>
                 <div className="card" style={{width: "18rem", marginLeft: "2%"}}>
                    <div className="card-body">
                        <h5 className="card-title">Necklace</h5>
                         <img className="card-img" src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" alt="Neckalace Collection"/>
                         <a href="#" className="btn btn-primary" style={{width: "15.4rem"}}>Add to Cart</a>
                     </div>
                 </div>
                 <div className="card" style={{width: "18rem", marginLeft: "2%"}}>
                    <div className="card-body">
                        <h5 className="card-title">Necklace</h5>
                         <img className="card-img" src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" alt="Neckalace Collection"/>
                         <a href="#" className="btn btn-primary" style={{width: "15.4rem"}}>Add to Cart</a>
                     </div>
                 </div>
                 <div className="card" style={{width: "18rem", marginLeft: "2%"}}>
                    <div className="card-body">
                        <h5 className="card-title">Necklace</h5>
                         <img className="card-img" src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" alt="Neckalace Collection"/>
                         <a href="#" className="btn btn-primary" style={{width: "15.4rem"}}>Add to Cart</a>
                     </div>
                 </div>
               </Row>
            </div>
        );
    }

}
export default Productlist;