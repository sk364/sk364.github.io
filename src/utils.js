export const computeRecordPublishedSince = publishedAt => {
  const now = new Date();
  const publishedDate = new Date(publishedAt);
  const diffHours = (now - publishedDate) / (60 * 60 * 1000);

  let publishedSince;

  if (diffHours <= 0.5) publishedSince = "New Post!";
  else if (diffHours < 48) publishedSince = "1 day ago";
  else if (diffHours < 168) publishedSince = `${Math.floor(diffHours / 24)} days ago`;
  else if ((diffHours / 24) < 30) publishedSince =
    `${Math.floor(diffHours / (24 * 7))} week${Math.floor(diffHours / (24 * 7)) > 1 ? "s" : ""} ago`;
  else publishedSince = `${Math.floor(diffHours / (24 * 30))} month${Math.floor(diffHours / (24 * 30)) > 1 ? "s" : ""} ago`;

  return publishedSince;
};

export const getTagString = tagList => tagList && tagList.map(tag => `#${tag}`).join(" ");
