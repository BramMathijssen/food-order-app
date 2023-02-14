import React, { useContext, useState } from "react";
import { IonIcon } from "@ionic/react";
import { cartOutline } from "ionicons/icons";
import CartContext from "../../context/cart-context";

import "./ShoppingCart.scss";
import Modal from "../UI/Modal";

const ShoppingCart = () => {
    const [modal, setModal] = useState();
    const [responseData, setResponseData] = useState();
    const cartCtx = useContext(CartContext);

    const orderHandler = async () => {
        console.log(`hey from orderHandler`);
        console.log(cartCtx.cartState.items);
        const response = await fetch("https://react-meals-a793d-default-rtdb.europe-west1.firebasedatabase.app/orders.json", {
            method: "POST",
            body: JSON.stringify(cartCtx.cartState.items),
            headers: {
                "Content-type": "application/json",
            },
        });
        const data = await response.json();
        console.log(data);
        setResponseData(data)
    };

    const closeModalHandler = () => {
        setModal("");
    };

    // bad practice to save a component inside state
    const checkoutHandler = () => {
        console.log(`checkout handler called`)
        setModal(<Modal closeModal={closeModalHandler} isCheckout={true} order={orderHandler} data={responseData}/>);
    };

    // bad practice to save a component inside state
    const openModal = () => {
        setModal(<Modal closeModal={closeModalHandler} checkout={checkoutHandler} data={responseData}/>);
        return;
    };

    return (
        <React.Fragment>
            <div>{modal}</div>
            <div className="shoppingcart" onClick={openModal}>
                <IonIcon className="shoppingcart__icon" icon={cartOutline} />
                <p className="shoppingcart__text">Your Cart</p>
                <p className="shoppingcart__amount">{cartCtx.cartState.totalAmount}</p>
            </div>
        </React.Fragment>
    );
};

export default ShoppingCart;