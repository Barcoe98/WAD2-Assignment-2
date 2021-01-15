import React from "react";
import Actor from "../actorCard";
import "./actorList.css";

const ActorList = ({actors, action}) => {
  const actorCards = actors.map(m => (
    <Actor key={m.id} actor={m} action={action} />
  ));
  return <div className="row actors">{actorCards}</div>;
};

export default ActorList;