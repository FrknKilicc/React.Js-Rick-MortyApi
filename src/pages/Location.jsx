import React, { useEffect, useState } from "react";
import CharacterCard from "../components/Characters/CharacterCard"; 

const Location = () => {
  const [id, setId] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResult] = useState([]);
  const { name, dimension } = info;

  const api = `https://rickandmortyapi.com/api/location/${id}`;
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(api).then((res) => res.json());
      setInfo(data);
      const charactersData = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResult(charactersData);
    };
    fetchData();
  }, [api]);
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center mb-4">
          Location : {name === "" ? "Unknown" : name}
        </h1>
        <h5 className="text-center">
          Dimension : {dimension === "" ? "Unknown" : dimension}
        </h5>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="row">
            {results.map((item) => (
              <CharacterCard
                item={item}
                key={item.id}
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

export default Location;
