import React, { useContext, useEffect } from "react";
import CartContext from "../../context/cart-context";

import './Modal.scss';

const Modal = (props) => {
    const cartCtx = useContext(CartContext);



    return (
        <div className="modal">
            <div className="modal__content">
                <h3 className="modal__title">Modal Window</h3>
                {cartCtx.cartState.items.map((item) => {
                    return (

                        <div className="item" key={item.id}>
                            <div className="item__content">
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                                <p>{item.amount}</p>
                            </div>
                            <div className="item__controls">
                                <button className="btn" onClick={() => { cartCtx.addToCart(item, 1); }}>+</button>
                                <button className="btn" onClick={() => { cartCtx.removeFromCart(item, 1); }}>-</button>
                            </div>
                        </div>
                    )
                })}
                <div className="total">
                    <p>Total Amount: {cartCtx.totalPrice}</p>
                </div>
                <button className="btn" onClick={props.closeModal}>close</button>
            </div>

        </div>

    )
}

export default Modal;