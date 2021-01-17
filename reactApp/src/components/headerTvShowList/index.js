import React from "react";
import "./headerTvShowList.css";

const Header = ({ title, numTvShows }) => {
  return (
    <div className="row">
      <div>
        <h1 className="pgTitle">
          {`${title } `}
          <span className="badge badge-pill">{numTvShows}</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;