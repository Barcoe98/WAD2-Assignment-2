import React, { useContext } from "react";
import PageTemplate from '../components/templateTvShowListPage'
import {TvShowsContext} from '../contexts/tvShowContext'

const TvShowListPage = () => {
  const context = useContext(TvShowsContext);
  const tvShows = context.tvShows

  return (
      <PageTemplate 
        title='Tv Shows'
        tvShows={tvShows}
        />
  );
};

export default TvShowListPage;