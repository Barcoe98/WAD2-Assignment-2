import React from "react";
import "./headerMovieList.css";

const Header = ({ title, numMovies }) => {
  return (
    <div className="row">
      <div>
        <h2 className="pgTitle">
          {`${title } `}
          <span className="badge badge-pill">{numMovies}</span>
        </h2>
      </div>
    </div>
  );
};

export default Header;