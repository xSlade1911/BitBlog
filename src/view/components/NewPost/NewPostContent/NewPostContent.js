import React from "react";
import "./NewPostContent.css"
function NewPostContent(){
    return <div id="newPostContent">
        <h1>NEW POST</h1>
        <p>Title</p>
        <input type="text" name="text" placeholder="Type here.."></input>
        <p>Content</p>
        <textarea></textarea>
        <div id="btn">
        <button id="btn1">Cancel</button>
        <button>Save</button>
        </div>
    </div>
}

export default NewPostContent;