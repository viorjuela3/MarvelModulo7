import React, { useState } from "react";
import ComicDetail from "./ComicDetail";
import "../styles/FavoriteComics.css";

export const FavoriteComics = () => {
  const [favorites, setFavorites] = useState([]);

  const handleRemoveFavorite = (comic) => {
    setFavorites((prevFavorites) => prevFavorites.filter((c) => c.id !== comic.id));
  };

  return (
    <div className="favorite-comics">
      <h2>Favorite Comics</h2>
      {favorites.length === 0 ? (
        <p>No favorite comics yet.</p>
      ) : (
        favorites.map((comic) => (
          <div key={comic.id} className="favorite-comic">
            <ComicDetail comic={comic} />
            <button onClick={() => handleRemoveFavorite(comic)}>Remove from Favorites</button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoriteComics;