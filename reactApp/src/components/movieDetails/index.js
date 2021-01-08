import React from "react";
import "./movieDetails.css";

export default ({ movie }) => {
  return (
    <>
      <h3 className="col-2 overview">Overview</h3>
      <p>{movie.overview}</p>

      <ul className="list-group list-group-horizontal">
        <li key="rdh" className="itemTitle list-group-item list-group-item-dark">
        <h5>{"Movie Tagline"}</h5>
        </li>
        <li key="rdv" className="itemList list-group-item">
          <h5>{movie.tagline}</h5>
        </li>
      </ul>

      <ul className="list-group list-group-horizontal">
        <li key="rdh" className="itemTitle list-group-item list-group-item-dark">
         Popularity
        </li>
        <li key="rdv" className="bbb itemList list-group-item">
          {movie.popularity}
        </li>
      </ul>

      <ul className="list-group list-group-horizontal">
        <li key="ruh" className=" itemTitle list-group-item list-group-item-dark">
          Movie Budget
        </li>
        <li key="rut" className="itemList list-group-item ">
          {movie.budget}
        </li>
        </ul>

        <ul className="list-group list-group-horizontal">
        <li key="ruh" className=" itemTitle list-group-item list-group-item-dark">
          Movie Revenue
        </li>
        <li key="rut" className="itemList list-group-item ">
          {movie.revenue}
        </li>
        </ul>


        <ul className="list-group list-group-horizontal">
        <li key="rdh" className="itemTitle list-group-item list-group-item-dark">
          Release Date
        </li>
        <li key="rdv" className=" itemList list-group-item">
          {movie.release_date}
        </li>
      </ul>

      <ul className="list-group list-group-horizontal">
        <li key="gh" className=" itemTitle list-group-item list-group-item-dark">
          Genres
        </li>
        {movie.genres.map(g => (
          <li key={g.name} className=" itemList list-group-item">
            {g.name + ","}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="slh" className="itemTitle list-group-item list-group-item-dark">
          Spoken Languages
        </li>
        {movie.spoken_languages.map(lang => (
          <li key={lang.name} className="itemList list-group-item">
            {lang.name + ","}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pch" className=" itemTitle list-group-item list-group-item-dark">
          Production Companies
        </li>
        {movie.production_companies.map(pc => (
          <li key={pc.name} className="itemList list-group-item">
            {pc.name + ","}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pconth" className="itemTitle list-group-item list-group-item-dark">
          Production Countries
        </li>
        {movie.production_countries.map(pc => (
          <li key={pc.name} className="itemList list-group-item">
            {pc.name + ","}
          </li>
        ))}
      </ul>
    </>
  );
};