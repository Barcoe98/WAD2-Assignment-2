import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";
import "./headerMovie.css";

const MovieHeader = ({history }) => {
  return (
    <div className="row">
             <div className="col-2">
          <button onClick={() => history.goBack()}>
            <FontAwesomeIcon icon={["fas", "arrow-circle-left"]} size="2x" color="#009dff"/>
          </button>
        </div>
    
    </div>
  );
};

export default withRouter( MovieHeader );