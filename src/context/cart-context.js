import React, { useEffect, useReducer, useState } from "react";

const CartContext = React.createContext({
    addToCart: () => {},
    removeFromCart: () => {},
    resetCart: () => {},
    totalPrice: 0,
});

const initialState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            if (state.items.length === 0) {
                console.log(`items list is empty, adding first one`);
                return { items: [...state.items, action.payload.items], totalAmount: state.totalAmount + action.payload.amount };
            } else if (state.items.length > 0) {
                for (let i = 0; i < state.items.length; i++) {
                    if (state.items[i].id === action.payload.items.id) {
                        state.items[i].amount = state.items[i].amount + action.payload.amount;

                        return { items: [...state.items], totalAmount: state.totalAmount + action.payload.amount };
                    }
                }

                console.log("This item hasnt been added before... adding the item to the list");
                return { items: [...state.items, action.payload.items], totalAmount: state.totalAmount + action.payload.amount };
            }

            break;

        case "REMOVE":
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].id === action.payload.items.id) {
                    state.items[i].amount = state.items[i].amount - action.payload.amount;

                    if (state.items[i].amount < 1) {
                        state.items.splice(i, 1);
                    }

                    return { items: [...state.items], totalAmount: state.totalAmount - action.payload.amount };
                }
            }

            throw new Error(`Can't find and item with id ${action.payload.items.id}`);

        case "RESET":
            return { items: [], totalAmount: 0 };

        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
};

export const CartContextProvider = (props) => {
    const [cartState, dispatch] = useReducer(cartReducer, initialState);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCartHandler = (props, amount) => {
        dispatch({ type: "ADD", payload: { items: props, amount: amount } });
    };

    const removeFromCartHandler = (props, amount) => {
        dispatch({ type: "REMOVE", payload: { items: props, amount: amount } });
    };

    const resetCartHandler = (props, amount) => {
        dispatch({ type: "RESET", payload: {} });
    };

    useEffect(() => {
        if (cartState.items.length > 0) {
            const total = cartState.items.reduce((acc, curr) => {
                let multiplied = curr.amount * curr.price;
                console.log(`current item amount ${curr.amount} * current item price ${curr.price} = ${multiplied}`);

                return acc + multiplied;
            }, 0);
            setTotalPrice(total);
        }
    }, [cartState.totalAmount, cartState.items]);

    return <CartContext.Provider value={{ addToCart: addToCartHandler, removeFromCart: removeFromCartHandler, resetCart: resetCartHandler, cartState: cartState, totalPrice: totalPrice }}>{props.children}</CartContext.Provider>;
};

export default CartContext;
