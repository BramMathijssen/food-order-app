import React, { useState } from "react";
import Selection from "../Selection";

import sandwich from './../../../assets/images/sandwich.jpg';
import burger from './../../../assets/images/burger.jpg';
import bowl from './../../../assets/images/bowl.jpg';
import kebab from './../../../assets/images/kebab.jpg';
import pizza from './../../../assets/images/pizza.jpg';
import sushi from './../../../assets/images/sushi.jpg';

const MealData = () => {
    const meals = [
        {
            id: 1,
            src: sandwich,
            name: 'Sandwich',
            description: 'Mayonaise, Cheese, Ham, Tomato, Lettuce, Egg, Bacon',
            price: '6.99'
        },
        {
            id: 2,
            src: burger,
            name: 'Burger',
            description: '100% Ground Beef, Cheese, Lettuce, Tomato, Bacon',
            price: '10.99'
        },
        {
            id: 3,
            src: bowl,
            name: 'Pokebowl',
            description: 'Avocado, Beans, Carrot, Corn, Rice, Salmon',
            price: '12.99'
        },
        {
            id: 4,
            src: kebab,
            name: 'Kebab',
            description: 'Shoarma, Tomato, Lettuce, Garlic Sauce',
            price: '8.99'
        },
        {
            id: 5,
            src: pizza,
            name: 'Pizza',
            description: 'Tomato Sauce, Mozarella, Basil, Ham',
            price: '9.99'
        },
        {
            id: 6,
            src: sushi,
            name: 'Sushi',
            description: 'Tuna, Salmon, Avocado, Rice, Crab, Seaweed',
            price: '15.99'
        }]


    return (
        <React.Fragment>
            <Selection mealData={meals} />
        </React.Fragment>

    )
}

export default MealData;