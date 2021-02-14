import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <button className="login__signInButton">Sign In</button>
        </form>
        <p>
          By signing in you agree to Amazon’s Clone conditions of use & sale.
          Please see our own privacy notice, our cookies notice and our
          Internet-based ads Notice.
        </p>
        <button className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
