import React, { useState } from "react";
import TvShowList from "../tvShowList/index";
import Header from "../headerTvShowList";


// Template for list tv show on a page

const TvShowListPageTemplate = ({ tvShows, title }) => {

  //returns each element to the template when called
  //header, filter controls, list of movies
  return (
    <>
      <Header title={title} numTvShows={tvShows.length} />
      {/* <FilterControls onUserInput={handleChange} numMovies={displayedMovies.length}/> */}
      <TvShowList
       tvShows={tvShows}
      ></TvShowList>
    </>
  );
};

export default TvShowListPageTemplate ;