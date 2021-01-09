import React, { useContext } from "react";
import {MoviesContext} from '../contexts/movieContext'
import PageTemplate from '../components/templateMovieListPage'


const PopularMovieListPage = () => {
  const context = useContext(MoviesContext);
  const popularMovies = context.movies

  return (
    <PageTemplate 
      title='Popular Movies'
      movies={popularMovies}
      />
);
};

export default PopularMovieListPage;