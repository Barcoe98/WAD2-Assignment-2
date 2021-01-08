import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import { PublicPage, Movies, Profile, HomePage } from "../pages/pages";
import LoginPage from "./registration/loginPage";
import MoviesPage from "../pages/moviePage";
import SignUpPage from "./registration/signUpPage";
import PrivateRoute from "./registration/privateRoute";
import SiteHeader from "./siteHeader/index";
import MovieProvider from '../contexts/movieContext';
import AuthProvider from "../contexts/authContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
      <SiteHeader/>
      <MovieProvider>
        <Switch>
          <Route path="/public" component={PublicPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />,
          <Route exact path="/" component={HomePage} />
          <PrivateRoute path="/api/movies" component={MoviesPage} />
          <PrivateRoute path="/profile" component={Profile} />
          <Redirect from="*" to="/" />
        </Switch>
        </MovieProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
