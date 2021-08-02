import "./home.css";
import React from "react";
import PostList from "./post-list";
import { useLocation } from "react-router-dom";
import NavBar from "./nav-bar";

const Home = () => {
  const query = new URLSearchParams(useLocation().search);
  const searchQuery = query.get("search");

  return (
    <>
      <NavBar />
      <PostList searchQuery={searchQuery} />
    </>
  );
};

export default Home;
