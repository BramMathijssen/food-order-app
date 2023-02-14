# QuickBite Food Order App

![](https://github.com/BramMathijssen/react-meals/blob/master/public/quick-bite.gif)

## Description
This is a food ordering app, it has a couple of meals which can be added to a cart. It's possible to
add or remove items inside the cart and the total price is calculated based on the contents of the cart.
An order can be placed which will be stored in the database.

### Technologies
- Firebase Realtime database: for storing the available meals and the placed orders
- Firebase Storage: for storing images of the available meals
- React
- SASS

### Techniques 
- Used React's Context API for handling global state for the shopping cart
- Using the useReducer Hook for handling the shopping cart state
- SCSS global variables for storing colors which improves maintainability. 

### How to install and run the app
1. `npm install`
2. `npm install react-loading-skeleton`
3. `npm start`

To add your own meals replace the fetch URL inside the `<Selection>` component to your personal Firebase database,
or alternatively use the hardcoded meals from the `<MealData>` component
