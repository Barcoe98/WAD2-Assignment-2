import React, { useContext, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { AuthContext } from '../../contexts/authContext';
import{ Form, Button, Card, Alert } from 'react-bootstrap'
import "./auth.css";


const SignUpPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);

  const register = () => {
    if (password.length > 0 && password === passwordAgain) {
      context.register(userName, password);
      setRegistered(true);
    }
  }

  const { from } = props.location.state || { from: { pathname: "/" } };

  if (registered === true) {
    return <Redirect to="./login" />;
  }

  return (
    <>
      
        <Card.Body className = " text-center mt-5 bgColor">
          <h1 className="text-center mb-4"> Sign Up</h1>
          <h4 className="text-center">You must register a username and password to log in </h4>

            <Form.Group className="text-left" id = "password">
              <Form.Label> Username</Form.Label>
              <Form.Control value={userName} placeholder="user name" onChange={e => {setUserName(e.target.value);}}></Form.Control>
            </Form.Group>

            <Form.Group className="text-left" id = "password">
              <Form.Label> Password</Form.Label>
              <Form.Control value={password} type="password" placeholder="password" onChange={e => {setPassword(e.target.value);}}></Form.Control>
            </Form.Group>

           <Form.Group className="text-left" id = "password">
              <Form.Label> Password Again</Form.Label>
              <Form.Control value={passwordAgain} type="password" placeholder="password again" onChange={e => {setPasswordAgain(e.target.value);}}></Form.Control>
            </Form.Group>

          <Button onClick={register} className = "text-center w-50 btnAuth" type = "submit" > Sign Up</Button>

          <div  className = "w-100 text-center mt-2">
           Have an Account ? <Link className = "link" to = "/login" > Login</Link>
          </div>
          
        </Card.Body>
    </>
  );
};

export default SignUpPage;