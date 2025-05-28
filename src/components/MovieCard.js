import { Link } from "react-router-dom";

const MovieCard = ({ movie, favorites = [], setFavorites }) => {
  const isFavorite = favorites.some((fav) => fav.title === movie.title);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.title !== movie.title));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <div className="col-md-4 mb-4">
      <Link to={`/movies/${movie.id}`} className="movie-card">
        <div className="card bg-dark text-white movie-card-inner">
          <img src={movie.posterURL} alt={movie.title} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="tap-for-more">Tap for more</p>
            <p className="fw-bold">⭐ {movie.rating}/10</p>
            <button className="btn btn-outline-light favorite-btn" onClick={toggleFavorite}>
              {isFavorite ? "Remove from Favorite" : "Add to Favorite"}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
