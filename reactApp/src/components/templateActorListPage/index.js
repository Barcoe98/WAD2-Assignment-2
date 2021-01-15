import React, { useState } from "react";
import Header from "../headerActorList";
import ActorList from "../actorList";

// Template for list movie on a page

const ActorListPageTemplate = ({ actors, title }) => {

  //returns each element to the template when called
  //header, filter controls, list of actors
  return (
    <>
      <Header title={title} numActors={actors.length} />
      <ActorList
       actors={actors}
      ></ActorList>
    </>
  );
};

export default ActorListPageTemplate ;