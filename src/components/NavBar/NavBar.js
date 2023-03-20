import React from "react";

import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <nav className="Navigation">
        <ul className="List-ul">
          <li>
            <h1 style={{ color: "white" }}>GaMeRs</h1>
          </li>

          <li>
            <a href="www.google.com">Home</a>
          </li>

          <li>
            <a href="www.google.com">Search</a>
          </li>

          <li>
            <a href="www.google.com">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
