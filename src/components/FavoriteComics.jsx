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
        <p>Comics Favoritos</p>
      ) : (
        favorites.map((comic) => (
          <div key={comic.id} className="favorite-comic">
            <h3>{comic.title}</h3>
            <img src={comic.imageUrl} alt={comic.title} />
            <button onClick={() => handleRemoveFavorite(comic)}>
              Quitar de favoritos
            </button>
          </div>
        ))
      )}

      <button onClick={() => addToFavorites({ id: 1, title: "", imageUrl: "" })}>
        Agregar a los Favoritos
      </button>
    </div>
  );
};

export default FavoriteComics;