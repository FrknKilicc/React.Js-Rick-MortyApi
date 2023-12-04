import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import Pagination from "./Paginations";
import Episode from "../../pages/Episode";
import "./SearchBox.css"
const Characters = ({ setFavorites, favorites, allCharacters }) => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 12;
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://rickandmortyapi.com/api/character`);
      const data = await res.json();
      const totalCharacters = data.results;
      const filteredCharacters = totalCharacters.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const startIndex = (currentPage - 1) * charactersPerPage;
      const slicedCharacters = filteredCharacters.slice(startIndex, startIndex + charactersPerPage);
      setCharacters(slicedCharacters);
      setTotalPages(Math.ceil(filteredCharacters.length / charactersPerPage));
    }
    fetchData();
  }, [currentPage, charactersPerPage, searchTerm]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Karakter Ara"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {characters.map((item) => (
        <CharacterCard item={item} key={item.id} setFavorites={setFavorites} favorites={favorites} />
      ))}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default Characters;
