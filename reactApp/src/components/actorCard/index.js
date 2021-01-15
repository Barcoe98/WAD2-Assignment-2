import React from "react";
import { Link } from "react-router-dom";
import "./actorCard.css";
import "../../globals/fontawesome";

const ActorCard = ({actor, action}) => {

  return (
    <div className="col-sm-2">
      <div className ="container">
          <Link to={`/actors/${actor.id}`}>
        <img id = "imgCard"
        className="card-img-tag center"
        alt={actor.name}
        src={
        actor.profile_path
        ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
        : "./film-poster-placeholder.png"
        }
        />
        </Link>
        <div class="text-block">
        <h4 className="card-title">{actor.name}</h4>
        </div>
      </div>
   </div>
  );
};

export default ActorCard;