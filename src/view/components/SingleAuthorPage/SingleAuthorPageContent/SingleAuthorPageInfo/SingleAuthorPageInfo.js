import React from "react";

function SingleAuthorPageInfo(props) {
  return (
    <div>
      <h1>{props.author.name}</h1>
      <p>{props.author.username}</p>
      <p>{props.author.email}</p>
      <p>{props.author.phone}</p>
    </div>
  );
}

export default SingleAuthorPageInfo;
