import React, { useState } from "react";
import "./Navbar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Helmet } from "react-helmet";

function Navbarr() {
  const navigate = useNavigate();

  // const [user, setUser] = useState([])

  let user = JSON.parse(localStorage.getItem("user-info"));

  if (user) {
    var token = user.data.user.accessToken;
    console.log('token',token);
  }


  // let token = user.data.user.accessToken;

  // console.log(token);

  console.log("user", user);

  async function handleSignOut(e) {
    // e.preventDefault();

    await fetch(
      "https://hiring-stackroots-server.herokuapp.com/auth/signout/user",
      {
        method: "POST",
        headers: {
          'Authorization':`Token ${token}`,
        },
        body: {},
      }
    );

    navigate("/signup");
    localStorage.clear();
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Helmet>
        <title> Home</title>
      </Helmet>
      <Container>
        <Navbar.Brand href="/">Stack Root</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              {" "}
              <HomeIcon className="icon" /> Home{" "}
            </Nav.Link>

            {user ? (
              <NavDropdown title={user.data.user.fullname}>
                <NavDropdown.Item
                  onClick={() => {
                    handleSignOut();
                  }}
                >
                  Sign Out
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Nav.Link className="icon"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  <LockOpenIcon  /> Login
                </Nav.Link>

                <Nav.Link
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  <PersonAddIcon className="icon" /> Sign Up
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
