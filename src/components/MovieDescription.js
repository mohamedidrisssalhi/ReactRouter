import { useParams, useNavigate } from "react-router-dom";

const MovieDescription = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id.toString() === id);

  return (
    <div className="container text-center mt-4">
      {/* Back Button - Positioned Lower to Avoid Navbar Overlap */}
      <button className="btn btn-light back-button" onClick={() => navigate("/")}>
        ⬅ Back to Home
      </button>

      <h1 className="mt-4">{movie.title}</h1>
      <p className="mt-2 movie-description">{movie.description}</p>

      {/* Embedded Trailer */}
      <iframe 
        width="560" 
        height="315" 
        src={movie.trailerLink} 
        title={movie.title} 
        className="movie-trailer" 
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieDescription;
