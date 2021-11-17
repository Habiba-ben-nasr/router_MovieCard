import React from "react";
import "./SearchMovie.css";

const SearchMovie = ({ setFilterByTitle }) => {
  return (
    <div class="box">
      <form name="search">
        <input
          type="text"
          class="input"
          name="txt"
          onmouseout="document.search.txt.value = ''"
          onChange={(e) => setFilterByTitle(e.target.value)}
        />
      </form>
      <i class="fas fa-search"></i>
    </div>
  );
};

export default SearchMovie;