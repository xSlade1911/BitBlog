import React from "react";
import "./SinglePostPageContent.css";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 20,
    min: 18
  },
  wordsPerSentence: {
    max: 16,
    min: 10
  }
});
const post = {
  title: "Title 1",
  body: lorem.generateParagraphs(1),
  author: "pera peric"
};
function SinglePageContent() {
  return (
    <div id="singlePageContent">
      <h1>{post.title}</h1>
      <a>{post.author}</a>
      <p>{post.body}</p>
    </div>
  );
}

export default SinglePageContent;
