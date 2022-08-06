import React, { useState } from "react";

const MealContext = React.createContext({
    onSubmitMeals: () => { },
    onSubmitMealsObject: () => { },
    mealsAmount: 0,
    mealsList: [{}]

});

export const MealContextProvider = (props) => {
    const [mealAmount, setMealAmount] = useState(0);
    const [mealsList, setMealsList] = useState([]);

    const submitMealsHandler = (props) => {
        console.log(`from context: ${props}`);
        setMealAmount((old) => old + props);
    }

    const submitMealsObjectHandler = (props) => {
        console.log(`from context: ${props}`);
        setMealsList((old) => ([...old, props]));

    }

    console.log(mealsList);

    return (
        <MealContext.Provider value={{ onSubmitMeals: submitMealsHandler, onSubmitMealsObject: submitMealsObjectHandler, mealsAmount: mealAmount, mealsList: mealsList}}>
            {props.children}
        </MealContext.Provider>
    )
}

export default MealContext;