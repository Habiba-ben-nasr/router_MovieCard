import React from "react";

import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

const MoviesList = ({ searchRating, filterByTitle, movies }) => {
  return (
    <div className="List" style={{ display: "flex", flexWrap: "wrap" }}>
      {movies
        .filter(
          (movie) =>
            movie.title.toLowerCase().includes(filterByTitle.toLowerCase()) &&
            movie.rating >= searchRating
        )
        .map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
    </div>
  );
};

export default MoviesList;
