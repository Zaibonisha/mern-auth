import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";
import "./navbar.css"; // Import the CSS file

function Navbar() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div className="navbar-container">
      <Link to="/">Home</Link>
      {loggedIn === false && (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Log in</Link>
        </>
      )}
      {loggedIn === true && (
        <>
          <Link to="/customer">Customers</Link>
          <LogOutBtn />
        </>
      )}
    </div>
  );
}

export default Navbar;