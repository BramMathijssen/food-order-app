import React, { useContext, useState } from "react";
import { IonIcon } from "@ionic/react";
import { cartOutline } from 'ionicons/icons';
import CartContext from '../../context/cart-context'

import './ShoppingCart.scss';
import Modal from "../UI/Modal";

const ShoppingCart = () => {
    const [modal, setModal] = useState();
    const cartCtx = useContext(CartContext);

    const closeModalHandler = () => {
        console.log('clicked modal handler');
        setModal('');
    }

    const openModal = () => {
        setModal(<Modal closeModal={closeModalHandler} />)
        return;
    }

    return (
        <React.Fragment>
            <div>
                {modal}
            </div>
            <div className="shoppingcart" onClick={openModal}>
                <IonIcon className="shoppingcart__icon" icon={cartOutline} />
                <p className="shoppingcart__text">Your Cart</p>
                <p className="shoppingcart__amount">{cartCtx.cartState.totalAmount}</p>
            </div>
        </React.Fragment>
    )
}

export default ShoppingCart;