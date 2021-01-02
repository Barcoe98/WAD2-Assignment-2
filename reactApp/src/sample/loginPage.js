import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import {AuthContext} from './authContext';
import {Link } from "react-router-dom";

const LoginPage = props => {
  const context = useContext(AuthContext)

  const login = () => {
    context.authenticate("user1", "pass1");
  };
  
  // Set 'from' to path where browser is redirected after a successful login.
  // Either / or the protected path user tried to access.
  const { from } = props.location.state || { from: { pathname: "/" } };

  if (context.isAuthenticated === true) {
    return <Redirect to={from} />;
  }
  return (
    <>
      <h2>Login page</h2>
      <p>You must log in to view the protected pages </p>
      {/* Login web form  */}
      <button onClick={login}>Log in</button>
      <Link to="/signup">Sign Up!</Link>
    </>
  );
};

export default LoginPage;
