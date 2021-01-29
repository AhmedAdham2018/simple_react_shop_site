import React, { Component } from 'react';
import Cart from './cart';


class Menu extends Component {
    state = {  }
    render() { 
        const {products , onInCart} = this.props;
        return ( <React.Fragment>
            <h1>Menu</h1>
            <table className="table">
                <thead>
                    <tr>
                    <th>Name</th>
                     <th>Price</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                         products.map(prod => (
                        <tr key={prod.id}>
                            <td>{prod.name}</td>
                            <td>{prod.price}</td>
                            <td><Cart onInCart={onInCart} product={prod}/></td>
                        </tr>))
                    }
                </tbody>
                </table>
        </React.Fragment> );
    }
}
 
export default Menu;