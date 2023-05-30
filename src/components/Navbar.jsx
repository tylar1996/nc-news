import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        HEN'S NC NEWS
      </Link>
      <ul>
        <li>
          <Link to="/articles" className="topic-section">
            All articles
          </Link>
        </li>
        <li>
          <Link to="/topics" className="topic-section">
            Topics
          </Link>
        </li>
        <Link to="userLogin" className="site-section">
          Login
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
