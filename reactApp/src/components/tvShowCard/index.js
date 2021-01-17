import React from "react";
import { Link } from "react-router-dom";
import "./tvShowCard.css";

const TvShowCard = ({tvShow}) => {

  return (
    <div className="col-sm-2">
      <div className="card">
      <div className="container">
        <Link to={`/tvshow/${tvShow.id}`}>
      <img
      className="card-img-tag center"
      alt={tvShow.title}
      src={
        tvShow.poster_path
      ? `https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`
      : "./film-poster-placeholder.png"
      }
      />
      </Link>
      <h4 className="card-title">{tvShow.name}</h4>
      </div>
      </div>
    </div>
  );
};

export default TvShowCard;