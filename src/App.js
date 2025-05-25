import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import "./App.css";

const initialMovies = [
  {id: 1, title:"Interstellar", posterURL:"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg", rating: 8.6, description:"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", trailer:"https://www.youtube.com/watch?v=zSWdZVtXT7E"},
  { title: "Grave of the Fireflies (1988)", posterURL: "/GraveOfFireFlies.webp", rating: 8.5 },
  { title: "Perfume: The Story of a Murderer (2006)", posterURL: "/perfume.jpg", rating: 7.5 },
  { title: "The Machinist (2004)", posterURL: "/TheMachinist.webp", rating: 7.6 },
  { title: "Breaking Bad (2008-2013)", posterURL: "BreakingBad.jpg", rating: 9.5 },
  { title: "La La Land (2016)", posterURL: "/LaLaLand.jpg", rating: 8.0 },
  { title: "Spartacus (2010-2013)", posterURL: "/Spartacus.jpg", rating: 8.5 },
  { title: "The Basketball Diaries (1995)", posterURL: "/TheBasketballDiaries.jpg", rating: 7.3 },
  { title: "Possession (1981)", posterURL: "/Possession.jpg", rating: 7.3 },
  { title: "The Matrix (1999)", posterURL: "/matrix.webp", rating: 8.7 },
  { title: "Deliverance (1972)", posterURL: "/deliverance.jpg", rating: 7.6 },
  { title: "A Serbian Film (2010)", posterURL: "/aSerbianFilm.webp", rating: 4.9 },
  { title: "Cannibal Holocaust (1980)", posterURL: "/CannibalHolocaust.jpg", rating: 5.8 },
];


function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterRating ? movie.rating >= filterRating : true)
  );

  return (
    <div className="App bg-dark text-white min-vh-100">
      <NavBar favoriteCount={favorites.length} setSearchQuery={setSearchQuery} />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3">
            <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
            {/* <hr/> */}
            <AddMovie setMovies={setMovies} movies={movies} />
          </div>
          <div className="col-md-9">
            <MovieList movies={filteredMovies} favorites={favorites} setFavorites={setFavorites} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;