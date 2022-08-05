import './Meal.scss';


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
                <button className='controlls__add btn btn--circle'>+</button>
            </div>
        </div>

    )

}

export default Meal;