import React, { useContext } from "react";
import CartContext from "../../context/cart-context";

import './Modal.scss';

const Modal = (props) => {
    const cartCtx = useContext(CartContext);

    return (
        <div className="modal">
            <div className="modal__content">
                {cartCtx.cartState.items.map((item) => {
                    return (

                        <div className="item" key={item.id}>
                            <div className="item__content">
                                <p className="item__name">{item.name}</p>
                                <div className="item__flexcontainer">
                                    <p className="item__price">${item.price}</p>
                                    <p className="item__amount">x {item.amount}</p>
                                </div>
                            </div>
                            <div className="item__controls">
                                <button className="btn btn--modify" onClick={() => { cartCtx.addToCart(item, 1); }}>+</button>
                                <button className="btn btn--modify" onClick={() => { cartCtx.removeFromCart(item, 1); }}>-</button>
                            </div>
                        </div>
                    )
                })}
                <div className="bottom">
                    <div className="bottom__total">
                        <p>Total : ${cartCtx.totalPrice.toFixed(2)}</p>
                    </div>
                    <div className="bottom__controls">
                        <button className="btn btn--close" onClick={props.closeModal}>close</button>
                        <button className="btn btn--order" onClick={props.closeModal}>Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;