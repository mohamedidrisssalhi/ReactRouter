import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import MovieDescription from "./components/MovieDescription"; 
import "./App.css";

const initialMovies = [
  { id: 1, title: "Grave of the Fireflies (1988)", posterURL: "/GraveOfFireFlies.webp", rating: 8.5, description: "A moving story of siblings during war.", trailerLink: "https://www.youtube.com/embed/4vPeTSRd580" },
  { id: 2, title: "Perfume: The Story of a Murderer (2006)", posterURL: "/perfume.jpg", rating: 7.5, description: "A man obsessed with creating the perfect scent.", trailerLink: "https://www.youtube.com/embed/9WU_s8q2eQo?si=o_TYfI8Y_JQocN6G" },
  { id: 3, title: "The Machinist (2004)", posterURL: "/TheMachinist.webp", rating: 7.6, description: "A psychological thriller about insomnia and paranoia.", trailerLink: "https://www.youtube.com/embed/-R4rQMImHwE?si=q91YR-mwVY_ib6jq" },
  { id: 4, title: "Breaking Bad (2008-2013)", posterURL: "/BreakingBad.jpg", rating: 9.5, description: "A high school chemistry teacher turns to crime.", trailerLink: "https://www.youtube.com/embed/HhesaQXLuRY" },
  { id: 5, title: "La La Land (2016)", posterURL: "/LaLaLand.jpg", rating: 8.0, description: "A love story set in the world of music and dreams.", trailerLink: "https://www.youtube.com/embed/0pdqf4P9MB8" },
  { id: 6, title: "Spartacus (2010-2013)", posterURL: "/Spartacus.jpg", rating: 8.5, description: "A gladiator fights for survival and freedom.", trailerLink: "https://www.youtube.com/embed/l4nbTc4nbnU?si=SPEtqcZHRfRBFC-Q" },
  { id: 7, title: "The Basketball Diaries (1995)", posterURL: "/TheBasketballDiaries.jpg", rating: 7.3, description: "A teenager struggles with addiction and dreams of becoming a star.", trailerLink: "https://www.youtube.com/embed/-Zc7T0vUpj0?si=8ryhd43aEaKr2LAS" },
  { id: 8, title: "Possession (1981)", posterURL: "/Possession.jpg", rating: 7.3, description: "A disturbing psychological horror about a crumbling marriage.", trailerLink: "https://www.youtube.com/embed/aLXW-oVbTxE?si=VYoXp4fjykiX1WMf" },
  { id: 9, title: "The Matrix (1999)", posterURL: "/matrix.webp", rating: 8.7, description: "A hacker discovers the truth about reality.", trailerLink: "https://www.youtube.com/embed/vKQi3bBA1y8" },
  { id: 10, title: "Deliverance (1972)", posterURL: "/deliverance.jpg", rating: 7.6, description: "A canoe trip turns into a fight for survival.", trailerLink: "https://www.youtube.com/embed/sckWeXMLsac?si=l-czNCVHj52E2exx" },
  { id: 11, title: "A Serbian Film (2010)", posterURL: "/aSerbianFilm.webp", rating: 4.9, description: "A controversial horror film pushing moral boundaries.", trailerLink: "https://www.youtube.com/embed/RcHq2W1dXRU?si=aa3Zs6PJyNx9gQwd" },
  { id: 12, title: "Cannibal Holocaust (1980)", posterURL: "/CannibalHolocaust.jpg", rating: 5.8, description: "An infamous horror film depicting brutality.", trailerLink: "https://www.youtube.com/embed/Zh8Xj-608v8?si=GWo38c-sQXP-SxXn" }
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
    <Router>
      <div className="App bg-dark text-white min-vh-100">
        <NavBar favoriteCount={favorites.length} setSearchQuery={setSearchQuery} />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={
              <div className="row">
                <div className="col-md-3">
                  <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
                  <AddMovie setMovies={setMovies} movies={movies} />
                </div>
                <div className="col-md-9">
                  <MovieList movies={filteredMovies} favorites={favorites} setFavorites={setFavorites} />
                </div>
              </div>
            } />
            <Route path="/movies/:id" element={<MovieDescription movies={movies} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;