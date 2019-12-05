import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Content from "./Content/Content";
import "./HomePage.css";
function HomePage(props) {
  return (
    <div id="container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default HomePage;
