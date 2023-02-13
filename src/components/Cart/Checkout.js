import { useState, useContext } from "react";
import "./Checkout.scss";
import OrderComplete from "./OrderComplete";
import CartContext from "../../context/cart-context";

const Checkout = (props) => {
    const cartCtx = useContext(CartContext);
    const [orderComplete, setOrderComplete] = useState(false);

    const confirmHandler = (event) => {
        props.order();
        setOrderComplete(true);
        cartCtx.resetCart();
    };

    if (!orderComplete) {
        return (
            <form className="checkout" onSubmit={confirmHandler}>
                <div className="checkout__control">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" />
                </div>
                <div className="checkout__control">
                    <label htmlFor="street">Street</label>
                    <input type="text" id="street" />
                </div>
                <div className="checkout__control">
                    <label htmlFor="postal">Postal Code</label>
                    <input type="text" id="postal" />
                </div>
                <div className="checkout__control">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" />
                </div>
                <div className="checkout__control--buttons">
                    <button className="btn btn--order" onClick={confirmHandler}>
                        Order
                    </button>
                    <button className="btn btn--close" onClick={props.closeModal}>
                        Cancel
                    </button>
                </div>
            </form>
        );
    } else {
        return <OrderComplete data={props.data} closeModal={props.closeModal} />;
    }
};

export default Checkout;
