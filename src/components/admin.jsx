import React, { Component } from 'react';


class Admin extends Component {
    
    addProdHandler = () => {
        this.props.history.push("/addProd/new");
    }

    editProd = product => {
        this.props.history.push(`/addProd/${product.id}`);
    }


    render() { 
        return ( <React.Fragment>
            <h1>Admin Page..</h1>
            <div><button onClick={this.addProdHandler} className="btn btn-primary m-2">Add Product</button></div> 
            <table className="table">
                <thead>
                    <tr>
                    <th>Name</th>
                     <th>Price</th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.products.map(prod => (
                        <tr key={prod.id}>
                            <td>{prod.name}</td>
                            <td>{prod.price}</td>
                            <td><span onClick = {() => this.editProd(prod)}><i className="fas fa-edit"></i></span></td>
                            <td><span onClick = {() => this.props.onDeleteProd(prod)}><i className="fas fa-trash"></i></span></td>
                        </tr>))
                    }
                </tbody>
                </table>
        </React.Fragment> );
    }
}
 
export default Admin;