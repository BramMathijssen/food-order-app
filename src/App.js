import React from "react";
import Header from "./components/MainHeader/Header";
import Selection from "./components/Meals/Selection";
import Modal from "./components/UI/Modal";


function App() {
  return (
    <div className="App">
      <Header />
      <Selection />
      <Modal />
    </div>
  );
}

export default App;
