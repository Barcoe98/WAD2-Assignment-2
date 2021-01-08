import React, { useContext, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { AuthContext } from '../../contexts/authContext';
import{ Form, Button, Card, Alert } from 'react-bootstrap'


const LoginPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");


  const login = () => {
    context.authenticate(userName, password);
  };

  // Set 'from' to path where browser is redirected after a successful login.
  // Either / or the protected path user tried to access.
  const { from } = props.location.state || { from: { pathname: "/" } };

  if (context.isAuthenticated === true) {
    return <Redirect to={from} />;
  }
  return (
    <>
     <Card className = "mt-5 card">
        <Card.Body>
          <h1 className="text-center mb-4"> Login</h1>
          <h4 className ="text-center" >Log In to View Full Website</h4>

            <Form.Group className="text-left" id = "password">
              <Form.Label> Username</Form.Label>
              <Form.Control id="username" placeholder="user name" onChange={e => {setUserName(e.target.value);}}></Form.Control>
            </Form.Group>

           <Form.Group className="text-left" id = "password">
              <Form.Label> Password</Form.Label>
              <Form.Control id="password" type="password" placeholder="password" required onChange={e => {setPassword(e.target.value);}}></Form.Control>
            </Form.Group>

          <Button onClick={login} className = "text-center w-50 btnAuth" type = "submit" > Log in</Button>

          <div  className = "w-100 text-center mt-2">
            Need an account ? <Link className = "link" to = "/signup" > Sign up</Link>
          </div>
          
        </Card.Body>
      </Card>
      </>
  );
};

export default LoginPage;