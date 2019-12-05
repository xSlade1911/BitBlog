import React from "react";
import "./AuthorsPageContent.css";
const authors = [
  { name: "pera", surname: "peric" },
  { name: "pera", surname: "peric" },
  { name: "pera", surname: "peric" },
  { name: "pera", surname: "peric" },
  { name: "pera", surname: "peric" },
  { name: "pera", surname: "peric" },
  { name: "pera", surname: "peric" }
];

function AuthorsPageContent() {
  return (
    <div id="authorsPageContent">
      <h1>Authors ({authors.length})</h1>
      {authors.map(function(author, index) {
        return (
          <p key={index}>
            {author.name} {author.surname}
          </p>
        );
      })}
    </div>
  );
}
export default AuthorsPageContent;
