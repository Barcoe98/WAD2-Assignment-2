import React from "react";
import "./headerActorList.css";

const Header = ({ title, numActors }) => {
  return (
    <div className="row">
      <div>
        <h2 className="pgTitle">
          {`${title } `}
          <span className="badge badge-pill">{numActors}</span>
        </h2>
      </div>
    </div>
  );
};

export default Header;