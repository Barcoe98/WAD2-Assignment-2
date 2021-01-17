import React, { useState, createContext, useEffect, useReducer } from "react";
import { getTvShows } from "../api/movie-api";

export const TvShowsContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { tvShows: action.payload.result};
    default:
      return state;
  }
};

const TvShowsContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { tvShows: []});
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getTvShows().then(result => {
      console.log(result);
      dispatch({ type: "load", payload: {result}});
    });
  },[]);

  return (
    <TvShowsContext.Provider
      value={{
        tvShows: state.tvShows,
        setAuthenticated
      }}
    >
      {props.children}
    </TvShowsContext.Provider>
  );
};

export default TvShowsContextProvider