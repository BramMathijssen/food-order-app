import './Meal.scss';

import { IonIcon } from "@ionic/react";
import { addOutline } from 'ionicons/icons';
import { useContext, useEffect, useRef, useState } from 'react';
import MealContext from '../../context/meal-context'
import CartContext from '../../context/cart-context';

const Meal = (props) => {
    const mealInputRef = useRef();
    const mealCtx = useContext(MealContext);
    const cartCtx = useContext(CartContext);
    const [mealObject, setMealObject] = useState({ name: props.title, amount: '', price: props.price });

    const submitHandler = (e) => {
        e.preventDefault();
        const enteredMealAmount = + mealInputRef.current.value;
        // mealCtx.onSubmitMeals(enteredMealAmount);
        // setMealObject({ id: props.id, name: props.title, amount: enteredMealAmount, price: props.price });
        // console.log(`from submit handler ${props.name} and ${enteredMealAmount}`);
        // mealCtx.onSubmitMealsObject(mealObject);

        //call cart-context dispatchHandler
        cartCtx.addToCart();
    }

    // useEffect(() => {
    //     const enteredMealAmount = + mealInputRef.current.value;
    //     console.log(`from useffect handler ${props.name} and ${enteredMealAmount}`);
    // }, [props.name])


    return (
        <div className='meal'>
            <img className='meal__image' src={props.source} alt={props.alt}></img>
            <div className='content'>
                <h3 className='content__title'>{props.title}</h3>
                <p className='content__description'>{props.description}</p>
            </div>
            <form className='controls' onSubmit={submitHandler}>
                <input className='controls__amount' type="number" defaultValue={1} ref={mealInputRef}></input>
                <button className='controls__add btn btn--circle' type="submit">
                    <IonIcon className='button--icon' icon={addOutline} />
                </button>
            </form>

        </div>

    )
}

export default Meal;