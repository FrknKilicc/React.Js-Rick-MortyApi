import React, { useEffect, useState } from "react";
import CharacterCard from "../components/Characters/CharacterCard";
const FavoriPage = ({ setFavorites }) => {
  const [localFavorites, setLocalFavorites] = useState([]);
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setLocalFavorites(storedFavorites);
    setFavorites(storedFavorites);
  }, [setFavorites]);
  const removeFromFavorites = (itemId) => {
    const newLocalFavorites = localFavorites.filter((fItem) => fItem.id !== itemId);
    setLocalFavorites(newLocalFavorites);
    localStorage.setItem("favorites", JSON.stringify(newLocalFavorites));
    setFavorites(newLocalFavorites);
  };
  return (
    <div>
      {localFavorites.map((item) => (
        <CharacterCard
          key={item.id}
          item={item}
          setFavorites={setFavorites}
          favorites={localFavorites}
          deleteFavori={() => removeFromFavorites(item.id)}
        />
      ))}
    </div>
  );
};
export default FavoriPage;