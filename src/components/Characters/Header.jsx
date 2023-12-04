import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Header.css";
import NavBar from '../NavBar/NavBar';

const Header = ({ favorites, allCharacters, setFilteredCharacters, setEpisodes }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const filteredCharacters = allCharacters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCharacters(filteredCharacters);
    navigate(`/search?query=${searchTerm}`);
  };
  return (
    <div id='HeaderBox'>
      <h3>TestProje</h3>
      <NavBar />
      <button onClick={() => navigate("/")}>Anasayfa</button>
      <button onClick={() => navigate("/favorites")}>Favoriler ({favorites.length})</button>
    </div>
  );
};

export default Header;
