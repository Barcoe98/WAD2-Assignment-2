import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import { PublicPage, Movies, Profile, HomePage } from "../pages/pages";
import LoginPage from "./registration/loginPage";
import SignUpPage from "./registration/signUpPage";
import PrivateRoute from "./registration/privateRoute";
import AuthHeader from "./siteHeader/authHeader";
import MovieProvider from '../contexts/authContext';
import AuthProvider from "../contexts/authContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
      <MovieProvider>
        <AuthHeader />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/public">Public</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
       
        <Switch>
          <Route path="/public" component={PublicPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />,
          <Route exact path="/" component={HomePage} />
          <PrivateRoute path="/movies" component={Movies} />
          <PrivateRoute path="/profile" component={Profile} />
          <Redirect from="*" to="/" />
        </Switch>
        </MovieProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
