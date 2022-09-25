import React from 'react';
import './Cart.css'

const Cart = (props) => {
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Selected Item: {props.cart.length}</p>
        </div>
    );
};

export default Cart;