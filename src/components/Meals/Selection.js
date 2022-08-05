import Meal from './Meal';
import './Selection.scss';

import sandwich from './../../assets/images/sandwich.jpg';


const Selection = () => {
    return (
        <section className='selection'>
            <h2 className='selection__title'>Our Selection</h2>
            <div className='grid-container'>
                <Meal source={sandwich} alt='sandwich' title='Sandwich' description='best sandwich' />
                <Meal source={sandwich} alt='sandwich' title='Sandwich' description='best sandwich' />
                <Meal source={sandwich} alt='sandwich' title='Sandwich' description='best sandwich' />
                <Meal source={sandwich} alt='sandwich' title='Sandwich' description='best sandwich' />
                <Meal source={sandwich} alt='sandwich' title='Sandwich' description='best sandwich' />
                <Meal source={sandwich} alt='sandwich' title='Sandwich' description='best sandwich' />

            </div>
        </section>
    )
}

export default Selection;