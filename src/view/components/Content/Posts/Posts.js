import React from "react";
import PostCard from "./PostCar/PostCard";

const posts = [
  { title: "Title 1", body: "post body ..." },
  { title: "Title 2", body: "post body ..." },
  { title: "Title 3", body: "post body ..." },
  { title: "Title 4", body: "post body ..." }
];

function Posts() {
  return posts.map(function(POST, index) {
    return <PostCard key={index} title={POST.title} body={POST.body} />;
  });
}
export default Posts;
