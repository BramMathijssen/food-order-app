import React, { useReducer, useState } from "react";

const CartContext = React.createContext({
    addToCart: () => { },
    removeFromCart: () => { },

});

const initialState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            if (state.items.length === 0) {
                console.log(`items list is empty, adding first one`);
                return { items: [...state.items, action.payload.items], totalAmount: state.totalAmount + action.payload.amount }
            }
            else if (state.items.length > 0) {
                for (let i = 0; i < state.items.length; i++) {

                    if (state.items[i].id === action.payload.items.id) {
                        console.log('This item has already been added... Changing the amount value of the current item');

                        state.items[i].amount = state.items[i].amount + action.payload.items.amount;

                        return {items: [...state.items], totalAmount: state.totalAmount + action.payload.items.amount }
                    }
                }

                console.log('This item hasnt been added before... adding the item to the list');
                return { items: [...state.items, action.payload.items], totalAmount: state.totalAmount + action.payload.amount }
            }

            break;

        case 'REMOVE':
            console.log('from dispatch Function: called ADD');
            return
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}

export const CartContextProvider = (props) => {
    const [cartState, dispatch] = useReducer(cartReducer, initialState)


    // this function is to be called from Meal.js to call the add cart reducer (dispatch)
    const addToCartHandler = (props, amount) => {

        //call dispatch action = ADD
        dispatch({ type: 'ADD', payload: { items: props, amount: amount } })

        //setMealsList((old) => ([...old, props]));
    }
    console.log(cartState);


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