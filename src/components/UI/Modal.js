import React, { useContext } from "react";
import MealContext from "../../context/meal-context";

import './Modal.scss';

const Modal = (props) => {
    const mealCtx = useContext(MealContext);
    console.log(mealCtx.mealsList);

    return (
        <div className="modal">
            <div className="modal__content">
                <h3 className="modal__title">Modal Window</h3>
                <p className="text">Orders</p>
                {mealCtx.mealsList.map((item) => {
                    return (
                        <div>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                        </div>
                    )
                })}
                <button className="btn" onClick={props.closeModal}>close</button>
            </div>

        </div>

    )
}

export default Modal;