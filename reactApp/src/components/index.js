import React from "react";
import ReactDOM from "react-dom";
import "../app.css"
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import { PublicPage, Profile } from "../pages/pages";
import LoginPage from "./registration/loginPage";
import MoviesPage from "../pages/moviePage";
import ActorsPage from "../pages/actorsPage";
import PopularMoviesPage from "../pages/PopularMoviesPage";
import HomePage from "../pages/homePage";

import SignUpPage from "./registration/signUpPage";
import PrivateRoute from "./registration/privateRoute";
import SiteHeader from "./siteHeader/index";
import MovieProvider from '../contexts/movieContext';
import ActorsProvider from '../contexts/actorContext';
import AuthProvider from "../contexts/authContext";

const App = () => {
  return (
    <div className = "page-temp">
    <BrowserRouter>
    <div className ="page-template">
      <div className="container-fluid">
      <AuthProvider>
      <SiteHeader/>
      <MovieProvider>
      <ActorsProvider>
        <Switch>
          <Route path="/public" component={PublicPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />,
          <Route exact path="/" component={HomePage} />
          <PrivateRoute path="/api/actors" component={ActorsPage} />
          <PrivateRoute path="/api/movies" component={MoviesPage} />
          <PrivateRoute path="/api/movies/popular" component={PopularMoviesPage} />
          <PrivateRoute path="/profile" component={Profile} />
          <Redirect from="*" to="/" />
        </Switch>
        </ActorsProvider>
        </MovieProvider>
      </AuthProvider>
      </div>
      </div>
    </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
