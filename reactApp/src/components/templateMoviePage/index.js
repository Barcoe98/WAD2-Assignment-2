import React from "react";
import MovieHeader from '../headerMovie'
import "./moviePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Template for movie Details Page

const TemplateMoviePage = ({ movie, children }) => {
  return (
    <>
    <div className="page">
      <MovieHeader movie={movie} />
          <div className="row">
            <div className="col-3">
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : "./film-poster-placeholder.png"
                  }
                  className="movie"
                  alt={movie.title}
                />
              </div>
              <div className=" mTitle col-8">
                <h1 className=" mName">
                {movie.title}
                
                {"  "}
                <a href={movie.homepage}>
                  <FontAwesomeIcon className = "homeIcon" icon={["fas", "home"]} size="1x" />
                </a>
               
              </h1>
              {children}
            </div>
        </div>
   </div>
    </>
  );
};

export default TemplateMoviePage