import React, { useState } from "react";
import MovieList from "../movieList/index";
import Header from "../headerMovieList";


// Template for list movie on a page

const MovieListPageTemplate = ({ movies, title }) => {

  //returns each element to the template when called
  //header, filter controls, list of movies
  return (
    <>
      <Header title={title} numMovies={movies.length} />
      {/* <FilterControls onUserInput={handleChange} numMovies={displayedMovies.length}/> */}
      <MovieList
       movies={movies}
      ></MovieList>
    </>
  );
};

export default MovieListPageTemplate ;