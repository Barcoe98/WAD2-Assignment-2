import React from "react";
import TvShow from "../tvShowCard";
import "./tvShowList.css";

const TvShowList = ({tvShows}) => {
  const tvShowCards = tvShows.map(m => (
    <TvShow key={m.id} tvShow={m} />
  ));
  return <div className="row tvShows">{tvShowCards}</div>;
};

export default TvShowList;