import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Characters/Header";
import HomePage from "./pages/HomePage";
import FavoriPage from "./pages/FavoriPage";
import NavBar from "./components/NavBar/NavBar";
import Episode from "./pages/Episode";
import Location from "./pages/Location";
function App() {
  const [favorites, setFavorites] = useState([]);
  return (
    <BrowserRouter>
      <Header favorites={favorites} />
      <Routes>
        <Route
          path="/"
          element={<HomePage setFavorites={setFavorites} favorites={favorites} />}
        />
        <Route
          path="/Episode"
          element={<Episode />}
        />
        <Route
          path="/location"
          element={<Location />}
        />
        <Route
          path="/favorites"
          element={<FavoriPage setFavorites={setFavorites} favorites={favorites} />}
        />
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;
