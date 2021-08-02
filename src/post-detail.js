import "./post-detail.css";

import React from "react";
import parse from "html-react-parser";
import NavBar from "./nav-bar";
import { POSTS } from "./constants";
import { getTagString, computeRecordPublishedSince } from "./utils";

const PostDetail = ({ match }) => {
  const { id } = match.params;
  const post = POSTS.find(_post => _post.id.toString() === id);
  const { title, bait, content, tags, publishedAt, numMinRead } = post;

  const formatContent = () => {
    const tagString = getTagString(tags);
    const publishedSince = computeRecordPublishedSince(publishedAt);

    return content
      .replace("{title}", title)
      .replace("{bait}", bait)
      .replace("{tags}", tagString)
      .replace("{numMinRead}", numMinRead)
      .replace("{publishedSince}", publishedSince);
  };

  const htmlContent = formatContent();

  return(
    <>
      <NavBar />
      <div className="post-detail">{ parse(htmlContent) }</div>
    </>
  );
};

export default PostDetail;
