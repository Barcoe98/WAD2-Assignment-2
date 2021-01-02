import React, { useState } from "react";
import { Redirect } from "react-router-dom";


const SignUpPage = props => {
  const [registered, setRegistered] = useState(false);

  const register = () => {
      setRegistered(true) 
    }

  const { from } = props.location.state || { from: { pathname: "/" } };

  if (registered === true) {
    return <Redirect to="./login" />;
  }

  return (
    <>
      <h2>SignUp page</h2>
      <p>You must register a username and password to log in </p>
      <button onClick={register}>Register</button>
    </>
  );
};

export default SignUpPage;
