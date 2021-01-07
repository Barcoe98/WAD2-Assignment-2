import React, { useContext } from "react";
import { withRouter, Link} from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import {  Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "./siteHeader.css";
import 'bootstrap/dist/css/bootstrap.min.css';



const SiteHeader = (props) => {
  const context = useContext(AuthContext);
  const { history } = props;

  return context.isAuthenticated ? (
  
<Navbar collapseOnSelect variant="dark"expand="lg" fixed="top">
  <Navbar.Brand className="text-dark brand " href="/">Movie Universe</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
    {/* <Nav.Item>Welcome {context.userName}!</Nav.Item> */}
    <Nav.Item><Link className="nav-link text-dark" to="/"> HOME</Link></Nav.Item>
    <Nav.Item><Link className="nav-link text-dark" to="/Movies"> MOVIES</Link></Nav.Item>
    {/* <Nav.Item><Link className="nav-link text-dark" to="/users"> USERS</Link></Nav.Item> */}
    <Nav.Item><Link className="nav-link text-light" onClick={() => context.signout()}>SIGN OUT</Link></Nav.Item>
  </Nav>
 </Navbar.Collapse>
</Navbar>

  ) : (
  
<Navbar collapseOnSelect variant="dark"expand="lg" fixed="top">
  <Navbar.Brand className="text-dark brand " href="/">Movie Universe</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
    <Nav.Item><Link className="nav-link text-dark" to="/"> HOME</Link></Nav.Item>
    <Nav.Item><Link className="nav-link text-dark" to="/login"> LOGIN</Link></Nav.Item>
    <Nav.Item><Link className="nav-link text-dark" to="/signup"> SIGN UP</Link></Nav.Item>
  </Nav>
 </Navbar.Collapse>
</Navbar>
  );
};

export default withRouter(SiteHeader);
