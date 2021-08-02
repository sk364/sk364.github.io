import "./post-view.css";

import React from "react";

import { getTagString, computeRecordPublishedSince } from "./utils";

const PostView = ({
  id,
  title,
  publishedAt,
  bait,
  tags,
  numMinRead,
  lastPost
}) => {
  const goToDetail = () => window.location.href = `/#/${id}`;

  const tagNodes = getTagString(tags).split(" ").map((tag, index) => {
    return <a key={tag} href={`/#/?search=in:${tags[index]}`}>{tag}</a>;
  });
  const publishedSince = computeRecordPublishedSince(publishedAt);

  return(
    <div className="post-view" onClick={goToDetail}>
      <div>
        <span className="title">{title}</span>
        <span className="date">{publishedSince}</span>
        <span className="reading-time right-circle">{numMinRead} min read</span>
      </div>
      <div>
        <span className="bait">{bait}</span>
        <span className="tags">{tagNodes}</span>
      </div>
      {!lastPost && <hr />}
    </div>
  );
};

export default PostView;
