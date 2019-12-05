import React from "react";
import Pic from "./pic.jpg"
import "./SingleAuthorPageInfo.css"
function SingleAuthorPageInfo(props) {
  return (
    <div id="singleAuthorPageInfo">
      <img src={Pic}/>
      <div class="info">
      <h1>{props.author.name}</h1>
      <p>Username: {props.author.username}</p>
      <p>Email: {props.author.email}</p>
      <p>Phone: {props.author.phone}</p>
      </div>
    </div>
  );
}

export default SingleAuthorPageInfo;
