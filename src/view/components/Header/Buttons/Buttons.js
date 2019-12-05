import React from "react";
import "./Buttons.css";
import { Link } from "react-router-dom";

function Buttons() {
  return (
    <ul id="buttons">
      <Link to="/">
        <li className="btns">Home</li>
      </Link>
      <Link to="/authors">
        <li className="btns">Authors</li>
      </Link>
      <Link to="/about">
        <li className="btns">About</li>
      </Link>
    </ul>
  );
}

export default Buttons;
