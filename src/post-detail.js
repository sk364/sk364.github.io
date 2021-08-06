import "./post-detail.css";

import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import NavBar from "./nav-bar";
import { POSTS } from "./constants";
import { getTagString, computeRecordPublishedSince } from "./utils";

const PostDetail = ({ match }) => {
  const { id } = match.params;
  const post = POSTS.find(_post => _post.id.toString() === id);
  const { title, bait, tags, publishedAt, numMinRead } = post;
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`posts/${id}.html`).then(data => data.text()).then(data => setContent(data));
  }, [id]);

  const formatContent = () => {
    const tagString = getTagString(tags);
    const publishedSince = computeRecordPublishedSince(publishedAt);

    return content
      .replaceAll("{title}", title)
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
