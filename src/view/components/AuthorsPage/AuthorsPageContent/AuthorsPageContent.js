import React from "react";
import "./AuthorsPageContent.css";
import { Link } from "react-router-dom";
const authors = [
  { name: "Name", surname: "Surname" },
  { name: "Name", surname: "Surname" },
  { name: "Name", surname: "Surname" },
  { name: "Name", surname: "Surname" },
  { name: "Name", surname: "Surname" },
  { name: "Name", surname: "Surname" },

];

function AuthorsPageContent() {
  return (
    <div id="authorsPageContent">
      <h1>Authors ({authors.length})</h1>
      {authors.map(function(author, index) {
        return (
          <Link to="singleauthor">
          <p key={index}>
            {author.name} {author.surname}
          </p>
          </Link>
        );
      })}
    </div>
  );
}
export default AuthorsPageContent;
