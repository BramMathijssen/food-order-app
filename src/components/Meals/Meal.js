import './Meal.scss';

import { IonIcon } from "@ionic/react";
import { addOutline } from 'ionicons/icons';


const Meal = (props) => {
    console.log(props.source)
    return (
        <div className='meal'>
            <img className='meal__image' src={props.source} alt={props.alt}></img>
            <div className='content'>
                <h3 className='content__title'>{props.title}</h3>
                <p className='content__description'>{props.description}</p>
            </div>
            <div className='controls'>
                <input className='controls__amount' value='1'></input>
                <button className='controls__add btn btn--circle'>
                    <IonIcon className='button--icon'icon={addOutline} />
                </button>
            </div>
        </div>

    )

}

export default Meal;