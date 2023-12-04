import React, { useEffect, useState } from "react";
import CharacterCard from "../components/Characters/CharacterCard";
const Episode = () => {
  const [id, setId] = useState(1);
  const [info, setInfo] = useState({});
  const [characters, setCharacters] = useState([]);

  const api = `https://rickandmortyapi.com/api/episode/${id}`;
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(api).then((res) => res.json());
      setInfo(data);

      const charactersData = await Promise.all(
        data.characters.map((characterUrl) => {
          return fetch(characterUrl).then((res) => res.json());
        })
      );
      setCharacters(charactersData);
    };
    fetchData();
  }, [api]);

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center mb-4">
          Episode: {info.name || "Unknown"}
        </h1>
        <h5 className="text-center">
          Air Date: {info.air_date || "Unknown"}
        </h5>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="row">
            {characters.map((character) => (
              <CharacterCard
                key={character.id}
                item={character}
                setFavorites={() => {}}
                favorites={[]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episode;
