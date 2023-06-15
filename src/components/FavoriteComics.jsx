import React from "react";
import "../styles/FavoriteComics.css";

export const FavoriteComics = ({ favorites, setFavorites, addToFavorites }) => {
  const handleRemoveFavorite = (comic) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((c) => c.id !== comic.id)
    );
  };
  return (
    <div className="favorite-comics">
      <h2>Favorite Comics</h2>
      {favorites.length === 0 ? (
        <p>No hay cómics favoritos</p>
      ) : (
        favorites.map((favComic) => (
          <div key={favComic.id} className="favorite-comic">
            <h3>{favComic.title}</h3>
            <img src={favComic.imageUrl} alt={favComic.title} />
            <button onClick={() => handleRemoveFavorite(favComic)}>
              Quitar de favoritos
            </button>
          </div>
        ))
      )}

      <button onClick={() => addToFavorites()}>Quitar de los favoritos</button>
    </div>
  );
};

export default FavoriteComics;