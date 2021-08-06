import "./post-list.css";

import React, { useEffect, useState } from "react";

import PostView from "./post-view";
import Search from "./search";
import { POSTS } from "./constants";

const PostList = ({ searchQuery }) => {
  const [searchInputValue, setSearchText] = useState(searchQuery || "");
  const [posts, setPosts] = useState(POSTS);

  const setFilteredPosts = (searchText) => {
    if (searchText.length > 0) {
      const searchTextList = searchText.split(/\s/).filter(_ => _).map(_ => _.trim());
      const filteredPosts =
        POSTS.filter(post => {
          let found = false;
          for (const searchText of searchTextList) {
            if (searchText.startsWith("in:")) {
              const tag = searchText.slice(3);
              found |= post.tags.indexOf(tag.toLowerCase()) !== -1;
            } else {
              found |= post.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
              found |= post.bait.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
            }
          }
          return found;
        });
        setPosts(filteredPosts);
    } else setPosts(POSTS);
  };

  useEffect(() => {
    setFilteredPosts(searchInputValue);
  }, [searchInputValue]);

  useEffect(() => {
    setSearchText(searchQuery || "");
  }, [searchQuery]);

  const handleChangeSearch = (searchText) => {
    setSearchText(searchText);
  };

  return(
    <div className="post-list-container">
      {posts.length > 0 && (
        <>
          <Search searchText={searchInputValue} onChange={handleChangeSearch} />
          <div className="post-list">
            {posts.map((post, idx) => {
              return (
                <PostView
                  key={post.id.toString()}
                  id={post.id}
                  title={post.title}
                  bait={post.bait}
                  publishedAt={post.publishedAt}
                  numMinRead={post.numMinRead}
                  tags={post.tags}
                  lastPost={idx === posts.length - 1} />
              );
            })}
          </div>
        </>
      )}
      {posts.length === 0 && <div className="no-results-msg">Temporarily down</div>}
    </div>
  );
};

export default PostList;
