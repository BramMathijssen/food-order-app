import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MealContextProvider } from './context/meal-context';
import { CartContextProvider } from './context/cart-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MealContextProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </MealContextProvider >
);

