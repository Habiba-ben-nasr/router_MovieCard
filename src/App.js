import React, { useState } from "react";
import "./App.css";

import NavBar from "./Components/NavBar/NavBar";
import { Data } from "./Data";
import { Route } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import MoviesList from "./Components/MovieList/MoviesList";

const App = () => {
  const [movies, setMovies] = useState(Data);
  const [searchRating, setSearchRating] = useState(0);
  const [filterByTitle, setFilterByTitle] = useState("");

  const addMovie = (newMovie) => {
    return setMovies([...movies, newMovie]);
  };
  return (
    <div style={{ backgroundColor: "#FCD8D4" }}>
      <NavBar
        setFilterByTitle={setFilterByTitle}
        addMovie={addMovie}
        setSearchRating={setSearchRating}
      />
      <h1 style={{fontFamily:'roboto' ,fontSize:'60px',textDecoration:'underline', color:'#7D1935', textAlign:'center',padding:'50px' , letterSpacing:'15px'}}>Movies:</h1>
      /
      <Route
        exact
        path="/"
        render={() => (
          <MoviesList
            movies={movies}
            filterByTitle={filterByTitle}
            searchRating={searchRating}
          />
        )}
      />
      <Route
        exact
        path="/moviedesc/:id"
        render={(rest) => <MovieDetails {...rest} movies={movies}/>}
      />{" "}
    </div>
  );
};

export default App;
