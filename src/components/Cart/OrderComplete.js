import React, { useContext } from "react";

import "./OrderComplete.scss";

const OrderComplete = (props) => {
    
    return (
        <div className="order_complete">
            <h3 className="order_complete__title">Thanks for your order!</h3>
            <p className="order_complete__message">Your order has been received and will be deliverd shortly</p>
            <button className="btn btn--order" onClick={props.closeModal}>Close</button>
        </div>
    );
};

export default OrderComplete;
