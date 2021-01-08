import React from "react";
import "./headerMovieList.css";

const Header = ({ title, numMovies }) => {
  return (
    <div className="row">
      <div>
        <h1 className="pgTitle">
          {`${title } `}
          <span className="badge badge-pill">{numMovies}</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;