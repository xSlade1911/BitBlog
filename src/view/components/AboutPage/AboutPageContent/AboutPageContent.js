import React from "react";
import { LoremIpsum } from "lorem-ipsum";
import "./AboutPageContent.css";
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

function AboutPageContent() {
  return (
    <div id="aboutPageContent">
      <h1>About</h1>
      <p>{lorem.generateParagraphs(1)}</p>
      <h1>OUR STORY</h1>
      <p>{lorem.generateParagraphs(1)}</p>
    </div>
  );
}

export default AboutPageContent;
