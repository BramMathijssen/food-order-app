import React from "react";
import Header from "./components/MainHeader/Header";
import MealData from "./components/Meals/Data/MealData";
import Selection from "./components/Meals/Selection";
import Modal from "./components/UI/Modal";


function App() {
  return (
    <div className="App">
      <Header />
      <MealData />
    </div>
  );
}

export default App;
