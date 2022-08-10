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

                        state.items[i].amount = state.items[i].amount + action.payload.amount;

                        return { items: [...state.items], totalAmount: state.totalAmount + action.payload.amount }
                    }
                }

                console.log('This item hasnt been added before... adding the item to the list');
                return { items: [...state.items, action.payload.items], totalAmount: state.totalAmount + action.payload.amount }
            }

            break;

        case 'REMOVE':
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].id === action.payload.items.id) {

                    state.items[i].amount = state.items[i].amount - action.payload.amount;

                    if(state.items[i].amount < 1){
                        state.items.splice(i, 1);
                    }

                    return { items: [...state.items], totalAmount: state.totalAmount - action.payload.amount }
                }
            }
            
            throw new Error(`Can't find and item with id ${action.payload.items.id}`);

        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}

export const CartContextProvider = (props) => {
    const [cartState, dispatch] = useReducer(cartReducer, initialState)

    const addToCartHandler = (props, amount) => {
        dispatch({ type: 'ADD', payload: { items: props, amount: amount } })

    }
    console.log(cartState);

    const removeFromCartHandler = (props, amount) => {
        dispatch({ type: 'REMOVE', payload: { items: props, amount: amount } })
    }

    return (
        <CartContext.Provider value={{ addToCart: addToCartHandler, removeFromCart: removeFromCartHandler, cartState: cartState }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;