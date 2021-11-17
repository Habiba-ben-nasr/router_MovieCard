
import "./MovieCard.css";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div
      className="card"
      style={{ width: "300px", height: "400px", borderRadius: "5px" }}
    >
      <Link to={`/moviedesc/${movie.id}`}>
      <div className="image">
        <img src={movie.posterURL} alt="tof" />
      </div>
      <div className="details">
        <div className="center">
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
          <ReactStars
            count={5}
            
            size={24}
            color2={"#ffd700"}
            value={movie.rating}
             edit={true}
            
          />
        </div>
      </div>
      </Link>
    </div>
  );
};
export default MovieCard;
