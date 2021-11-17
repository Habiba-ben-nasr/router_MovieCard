import React, { useState, useEffect } from "react";

const MovieDetails = ({ match, movies }) => {
  console.log(movies);

  const [movie, setMovie] = useState({});

  const findMovie = () => {
    setMovie(movies.find((el) => el.id === match.params.id));
  };

  useEffect(()=> {
    findMovie()
  })

 
  return (
    <div>
      {/* {JSON.stringify(movie)} */}
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <img src={movie.posterURL} />
    </div>
  );
};

export default MovieDetails;