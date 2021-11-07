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

  useEffect(() => {
    if (content) {
      const accordions = document.getElementsByClassName("accordion");
      const accordionContents = document.getElementsByClassName("accordion-content");

      for (let idx = 0; idx < accordionContents.length; idx++) {
        const acc = accordions[idx];
        acc.onclick = () => {
          const accContent = accordionContents[idx];

          if (accContent.classList.contains("hidden")) {
            accContent.classList.remove("hidden");
          } else {
            accContent.classList.add("hidden");
          }

          if (acc.classList.contains("accordion-closed")) {
            acc.classList.remove("accordion-closed");
          } else {
            acc.classList.add("accordion-closed");
          }
        };
      }
    }
  }, [content]);

  const tagString = getTagString(tags);
  const publishedSince = computeRecordPublishedSince(publishedAt);

  return(
    <>
      <NavBar />
      <div className="post-detail">
        <div className="container">
          <div className="post-header">
            <div className="post-title-container">
              <div className="post-title">{title}</div>
              <div className="post-bait">{bait}</div>
            </div>
            <div className="post-metadata">
              <div className="post-reading-time right-circle">{numMinRead} min read</div>
              <div className="post-published-since">{publishedSince}</div>
              <div className="post-tags">{tagString}</div>
            </div>
          </div>
          { parse(content) }
        </div>
      </div>
    </>
  );
};

export default PostDetail;
