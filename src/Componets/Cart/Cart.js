import React from 'react';


const Cart = (props) => {
    const {cart} =props ;
    let total = 0 ;
    for(const product of cart){
        total += product.price ;
    }
    return (
        <div>
             <h4> Order Summery </h4>
                <p>Item selected = {cart.length}</p>
                <p>Total Price = {total}</p>
        </div>
    );
};

export default Cart;