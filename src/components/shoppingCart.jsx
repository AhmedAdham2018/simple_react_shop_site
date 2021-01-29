import React, { Component } from 'react';
import Product from './product';

class ShoppingCart extends Component {

    render() { 
        return (<React.Fragment>
            <h2>Shopping Cart.</h2>
            <button className="btn btn-warning btn-lg" onClick={this.props.onReset}>Reset</button> 
            {this.props.products.map((product) => <Product key={product.id}  product={product} onDeleteProd={() => this.props.onDelete(product)} onIncrement={() => this.props.onIncrement(product)}/>)}
        </React.Fragment>     
        );
    }
}
 
export default ShoppingCart;