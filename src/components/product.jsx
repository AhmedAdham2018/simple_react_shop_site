import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Product extends Component {
    // state = {  
    //     "name": this.props.product.name,
    //     "count": this.props.product.count,  
    // }


    getClasses(){
        return this.props.product.count === 0 ? "badge badge-warning m-3" : "badge badge-primary m-3";
    }

    render() { 
        return ( <div className="row">
                     <div className="col-1">
                         <span>
                         <Link to={`products/${this.props.product.id}`}>{this.props.product.name}</Link> 
                         </span>
                     </div>
                <div className="col-3">
                <span className={this.getClasses()}>{this.props.product.count}</span>
                 <button className="btn btn-primary btn-sm m-2" onClick={this.props.onIncrement}> + </button>
                 <button className="btn btn-primary btn-sm" onClick={this.props.onDeleteProd}><i className="fas fa-trash"></i></button>
                </div>
            </div>);
    }
}
 
export default Product;