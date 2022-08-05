import React, { useContext } from "react";
import { IonIcon } from "@ionic/react";
import { cartOutline } from 'ionicons/icons';
import MealContext from '../../context/meal-context'

import './ShoppingCart.scss';

const ShoppingCart = () => {
    const mealCtx = useContext(MealContext)

    return (
        <div className="shoppingcart">
            <IonIcon className="shoppingcart__icon" icon={cartOutline} />
            <p className="shoppingcart__text">Your Cart</p>
            <p className="shoppingcart__amount">{mealCtx.mealsAmount}</p>
        </div>
    )
}

export default ShoppingCart;