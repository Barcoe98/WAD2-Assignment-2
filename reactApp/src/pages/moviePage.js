import React, { useContext } from "react";
import {MoviesContext} from '../contexts/movieContext'

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  return (
    <>
        <h1>Movies Data </h1>
        <h1>Movies Data </h1>
        <h1>Movies Data </h1>
        <h1>Movies Data </h1>
        <h1>Movies Data </h1>
        <h1>Movies Data </h1>
    
        
        <div>
            {context.movies.map(movie => { return <>{movie.id},{movie.title}<br /></> })}
        </div>
    </>
  );
};

export default MovieListPage;