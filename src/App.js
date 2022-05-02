import React from "react";
import "./App.css";
import Home from "./Pages";
import SingleCocktail from "./Pages/SingleCocktail";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
      </Routes>
    </div>
  );
};

export default App;
