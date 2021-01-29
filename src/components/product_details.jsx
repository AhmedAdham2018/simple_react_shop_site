import React, { Component } from 'react';
//import  qs from "query-string";


class ProductDetails  extends Component {

    
    saveHandler = () => {
        this.props.history.replace("/cart");
    }
    
    render() { 
        let prodIndex = parseInt(this.props.match.params.id);
        let product = this.props.products.filter((prod) => prod.id === prodIndex)[0];
    
        //const parse = qs.parse(this.props.location.search);
        //console.log(parse);

        return ( <div className="container">
        <h1>Products detail no. {this.props.match.params.id}</h1>
        <h4>Product name : {product.name}</h4>
        <h4>Product count in cart : {product.count}</h4>
        <button onClick={this.saveHandler} className="btn btn-primary">Save</button></div> );
    }
}
 
export default ProductDetails;

