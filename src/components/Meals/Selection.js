import Meal from './Meal';
import './Selection.scss';

import sandwich from './../../assets/images/sandwich.jpg';
import burger from './../../assets/images/burger.jpg';
import bowl from './../../assets/images/bowl.jpg';
import kebab from './../../assets/images/kebab.jpg';
import pizza from './../../assets/images/pizza.jpg';
import sushi from './../../assets/images/sushi.jpg';


const Selection = () => {
    return (
        <section className='selection'>
            <h2 className='selection__title'>Our Selection</h2>
            <div className='grid-container'>
                <Meal source={sandwich} alt='sandwich' title='Sandwich' description='Mayonaise, Cheese, Ham, Tomato, Lettuce, Egg, Bacon' />
                <Meal source={burger} alt='burger' title='Burger' description='100% Ground Beef, Cheese, Lettuce, Tomato, Bacon' />
                <Meal source={bowl} alt='poke bowl' title='Pokebowl' description='Avocado, Beans, Carrot, Corn, Rice, Salmon' />
                <Meal source={kebab} alt='kebab' title='Kebab' description='Shoarma, Tomato, Lettuce, Garlic Sauce' />
                <Meal source={pizza} alt='pizza' title='Pizza' description='Tomato Sauce, Mozarella, Basil, Ham' />
                <Meal source={sushi} alt='sushi' title='Sushi' description='Tuna, Salmon, Avocado, Rice, Crab, Seaweed' />

            </div>
        </section>
    )
}

export default Selection;