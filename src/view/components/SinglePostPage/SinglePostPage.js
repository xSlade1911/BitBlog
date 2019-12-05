import React from "react";
import Header from "../Header/Header";
import SinglePageContent from "./SinglePostPageContent/SinglePageContent";
import Footer from "../Footer/Footer";
function SinglePostPage() {
  return (
    <div id="container">
      <Header />
      <SinglePageContent />
      <Footer />
    </div>
  );
}

export default SinglePostPage;
