import React from "react";

// Bonus: "minutes to read" indicator
function readTime(minutes) {
  if (!minutes) return "";
  if (minutes < 30) {
    const cups = Math.ceil(minutes / 5);
    return `${"☕️".repeat(cups)} ${minutes} min read`;
  }
  const bentos = Math.ceil(minutes / 10);
  return `${"🍱".repeat(bentos)} ${minutes} min read`;
}

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const time = readTime(minutes);

  return (
    <article>
      <h3>{title}</h3>
      <small>{time ? `${date} • ${time}` : date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
