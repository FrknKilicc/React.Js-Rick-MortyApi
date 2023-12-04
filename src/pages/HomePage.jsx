import React from "react";
import Characters from "../components/Characters/Characters";
import NavBar from "../components/NavBar/NavBar";
const HomePage = ({setFavorites, favorites}) => {
  return (
    <div>
      <Characters setFavorites={setFavorites} favorites={favorites} />
    </div>
  );
};
export default HomePage;
