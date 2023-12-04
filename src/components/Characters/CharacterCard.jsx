import React from "react";
import "./CharacterCard.css";

const CharacterCard = ({ item, setFavorites, favorites, deleteFavori }) => {
  const filteredFavorite = favorites.find((fItem) => fItem.id === item.id);

  const addToFavorites = () => {
    if (favorites.length < 10) {
      const newFavorites = [...favorites, item];
      setFavorites(newFavorites);
      saveFavoritesToLocalStorage(newFavorites);
    } else if (favorites.length >= 10) {
      alert("Maksimum 10 favori karakter ekleyebilirsiniz.");
    }
  };

  const saveFavoritesToLocalStorage = (favorites) => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const removeFromFavorites = () => {
    const newFavorites = favorites.filter((fItem) => fItem.id !== item.id);
    setFavorites(newFavorites);
    saveFavoritesToLocalStorage(newFavorites);
  };

  return (
    <div className="card-item">
      <img src={item.image} alt="" />
      <strong>{item.name}</strong>

      <div className="info">
        <span>Status: {item.status}</span>
        <span>Species: {item.species}</span>
        <span>Type: {item.type}</span>
        <span>Gender: {item.gender}</span>
      </div>

      {deleteFavori ? (
        <button onClick={removeFromFavorites}>Favorilerden Çıkar</button>
      ) : (
        <button
          id="Favorite"
          onClick={() => addToFavorites()} 
          disabled={filteredFavorite || favorites.length >= 10}
        >
          Favorilere Ekle
        </button>
      )}
    </div>
  );
};

export default CharacterCard;
