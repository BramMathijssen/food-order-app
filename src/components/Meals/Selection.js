import Meal from './Meal';
import './Selection.scss';

const Selection = (props) => {
    return (
        <section className='selection'>
            <h2 className='selection__title'>Our Selection</h2>
            <div className='grid-container'>
                {props.mealData.map((item => <Meal  key={item.id} id={item.id} source={item.src} alt={item.name} title={item.name} description={item.description} price={item.price}/>))}
            </div>
        </section>
    )
}

export default Selection;