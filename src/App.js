import React from "react";
import Header from "./components/MainHeader/Header";
import Navigation from "./components/MainHeader/Navigation";
import Selection from "./components/Meals/Selection";


function App() {
  return (
    <div className="App">
      <Header />
      <Selection />
    </div>
  );
}

export default App;
