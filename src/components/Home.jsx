import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the NC News</h1>
      <p className="home-description">
        Explore a wide range of topics including football, coding, and cooking.
        Dive into fascinating discussions, gain valuable insights, and stay
        updated with the latest trends. Start exploring our collection of
        articles and embark on a journey of knowledge and discovery."
      </p>
      <Link to="/articles" className="home-button">
        View All Articles
      </Link>
    </div>
  );
}
export default Home;
