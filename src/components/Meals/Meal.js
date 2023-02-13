import "./Meal.scss";

import { IonIcon } from "@ionic/react";
import { addOutline, checkmarkOutline } from "ionicons/icons";
import { useContext, useRef, useState } from "react";
import CartContext from "../../context/cart-context";

const Meal = (props) => {
  const mealInputRef = useRef();
  const cartCtx = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredMealAmount = +mealInputRef.current.value;

    cartCtx.addToCart(
      {
        id: props.id,
        name: props.title,
        amount: enteredMealAmount,
        price: props.price,
      },
      enteredMealAmount
    );
  };

  const onClickHandler = () => {
    console.log(`exectued`);
    setAdded(true);
  };

  return (
    <div className="meal">
      <img className="meal__image" src={props.source} alt={props.alt}></img>
      <div className="content">
        <h3 className="content__title">{props.title}</h3>
        <p className="content__description">{props.description}</p>
      </div>
      <form className="controls" onSubmit={submitHandler}>
        <input
          className="controls__amount"
          type="number"
          defaultValue={1}
          ref={mealInputRef}
        ></input>
        <button
          className="controls__add btn btn--circle"
          type="submit"
          onClick={onClickHandler}
        >
          {added ? (
            <IonIcon className="button--icon" icon={checkmarkOutline} />
          ) : (
            <IonIcon className="button--icon" icon={addOutline} />
          )}
        </button>
      </form>
    </div>
  );
};

export default Meal;
