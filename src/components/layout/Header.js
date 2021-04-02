import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import LoginButton from "../login_button/Login-Button.component";
import LogoutButton from "../logout_button/Logout-Button.component";
import { useAuth0 } from "@auth0/auth0-react";

export const Header = () => {
  const { user } = useAuth0();
  console.log(user);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Mica Beauty Admin</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="/users">Users</Nav.Link>
          <Nav.Link href="/colors">Colors</Nav.Link>
          <Nav.Link href="/orders">Orders</Nav.Link>
          <Nav.Link href="/recurly">RecurlyInfo</Nav.Link>
          {user ? <LogoutButton /> : <LoginButton />}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
