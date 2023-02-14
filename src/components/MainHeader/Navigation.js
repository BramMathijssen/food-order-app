import React from "react";

import './Navigation.scss';
import ShoppingCart from "./ShoppingCart";

const Navigation = () => {
    
    return (
        <nav className="navigation">
            <h3 className="navigation__logo">QuickBite</h3>
            <ShoppingCart />
        </nav>
    )
}

export default Navigation;