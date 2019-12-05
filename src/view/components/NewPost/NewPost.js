import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NewPostContent from "./NewPostContent/NewPostContent";

function NewPost(){
    return <div id="container">
        <Header />
        <NewPostContent />
        <Footer />
    </div>
}

export default NewPost;