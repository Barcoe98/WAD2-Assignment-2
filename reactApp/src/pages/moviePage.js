import React, { useContext } from "react";
import {MoviesContext} from '../contexts/movieContext'
import PageTemplate from '../components/templateMovieListPage'


const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.movies

  return (
    <PageTemplate 
      title='Movies'
      movies={movies}
      />
);
};

export default MovieListPage;