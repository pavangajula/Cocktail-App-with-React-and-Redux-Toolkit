import React from "react";
import CocktailList from "../Components/CocktailList";
import SearchInput from "../Components/SearchInput";

const Home = () => {
  return (
    <div>
      <SearchInput />
      <CocktailList />
    </div>
  );
};

export default Home;
