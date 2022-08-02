import React, { useState } from "react";
import logo from "../img/logo.png";
import "./Login.css";
import { Navigate, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function LoginComponent() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    let item = { email, password };

    let result = await fetch(
      "https://hiring-stackroots-server.herokuapp.com/auth/signin/user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      }
    );

    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/");
  }

  return (
    <div sm={12} md={8} lg={6} xl={3}>
      <Helmet>
        <title> Login</title>
      </Helmet>
      <div className="loginParentDiv">
        <img className='imgg' width="195px" height="65px"  src='https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png'></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
            name="email"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
            pattern=".{8,20}"
            required
            title="8 to 20 characters"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/signup");
          }}
        >
          Signup
        </a>
      </div>
    </div>
  );
}

export default LoginComponent;
