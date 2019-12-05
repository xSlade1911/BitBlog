import React from "react";
import "./PostCard.css";
import { Link } from "react-router-dom";
function PostCard(props) {
  return (
    <div className="postCard">
      <Link to="/singlepost">
        <h1>{props.title}</h1>
      </Link>
      <p>{props.body}</p>
    </div>
  );
}
export default PostCard;
