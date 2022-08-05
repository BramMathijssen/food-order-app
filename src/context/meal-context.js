import React, { useState } from "react";

const MealContext = React.createContext({
    onSubmitMeals: () => { },
});

export const MealContextProvider = (props) => {
    const [mealAmount, setMealAmount] = useState(0);

    const submitMealsHandler = (props) => {
        console.log(`from context: ${props}`);
        setMealAmount((old) => old + props);
    }

    console.log(mealAmount);

    return (
        <MealContext.Provider value={{ onSubmitMeals: submitMealsHandler, myVal: 1 }}>
            {props.children}
        </MealContext.Provider>
    )
}

export default MealContext;