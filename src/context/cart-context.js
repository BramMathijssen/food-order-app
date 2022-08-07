import React, { useReducer, useState } from "react";

const CartContext = React.createContext({
    addToCart: () => { },
    removeFromCart: () => { },

});

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            console.log('from dispatch Function: called ADD');
            console.log(`from dispatch Function received payload: ${state}`);
            return
        case 'REMOVE':
            console.log('from dispatch Function: called ADD');
            return
        default:
            return state;
    }
}

export const CartContextProvider = (props) => {
    const [cartState, dispatch] = useReducer(cartReducer, { items: [], amount: 0 })


    // this function is to be called from Meal.js to call the add cart reducer (dispatch)
    const addToCartHandler = (props) => {

        //call dispatch action = ADD
        dispatch({ type: 'ADD' }, props)

        console.log(`cart-context: Called the AddToCartHandler Function`);
        //setMealsList((old) => ([...old, props]));
    }

    // this function is to be called from Meal.js to call the remopve cart reducer (dispatch)
    const removeFromCartHandler = (props) => {

        //call dispatch action = REMOVE

        console.log(`cart-context: Called the RemoveCartHandler Function`);
        //setMealsList((old) => ([...old, props]));
    }


    return (
        <CartContext.Provider value={{ addToCart: addToCartHandler, removeFromCart: removeFromCartHandler }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;