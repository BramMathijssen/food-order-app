import React from "react";
import { IonIcon } from "@ionic/react";
import { cartOutline } from 'ionicons/icons';

import './ShoppingCart.scss';

const ShoppingCart = (props) => {

    return (
        <div className="shoppingcart">
            <IonIcon className="shoppingcart__icon" icon={cartOutline} />
            <p className="shoppingcart__text">Your Cart</p>
            <p className="shoppingcart__amount">1</p>
        </div>
    )
}

export default ShoppingCart;