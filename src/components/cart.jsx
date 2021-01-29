import React from 'react';


const Cart = props => {
    const style = !props.product.isInCart 
        ? {color: "#80808080" , cursor: "pointer"}
        : {cursor: "pointer"};

    return (  <span style={style} onClick={() => props.onInCart(props.product) }>
        <i className="fas fa-shopping-cart"></i>
    </span>);
}
 
export default Cart;