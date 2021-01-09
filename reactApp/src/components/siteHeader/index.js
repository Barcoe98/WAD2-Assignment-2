import React, { useContext } from "react";
import { withRouter, Link} from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import {  Navbar, Nav } from 'react-bootstrap';
import "./siteHeader.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const SiteHeader = () => {
  const context = useContext(AuthContext);

  return context.isAuthenticated ? (
  
  <Navbar collapseOnSelect variant="dark"  expand="lg" fixed="top">
    <Navbar.Brand className="text-light brandSize" href="/">MOVIE Universe </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
      <Nav.Item><Link className="nav-link text-light" to="/"> HOME</Link></Nav.Item>
      <Nav.Item><Link className="nav-link text-light" to="/api/movies"> MOVIES</Link></Nav.Item>
      <Nav.Item><Link className="nav-link text-light" to="/api/movies/popular"> POPULAR</Link></Nav.Item>
      {/* <Nav.Item><Link className="nav-link text-dark" to="/users"> USERS</Link></Nav.Item> */}
      <Nav.Item><Link className="nav-link text-light" onClick={() => context.signout()} to="/">SIGN OUT</Link></Nav.Item>
    </Nav>
  </Navbar.Collapse>
  </Navbar>

  ) : (
  
  <Navbar collapseOnSelect variant="dark"expand="lg" fixed="top">
    <Navbar.Brand className="text-light brandSize" href="/">Movie Universe</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
      <Nav.Item><Link className="nav-link text-light" to="/"> HOME</Link></Nav.Item>
      <Nav.Item><Link className="nav-link text-light" to="/login"> LOGIN</Link></Nav.Item>
      <Nav.Item><Link className="nav-link text-light" to="/signup"> SIGN UP</Link></Nav.Item>
    </Nav>
  </Navbar.Collapse>
  </Navbar>
  );
};

export default SiteHeader;
