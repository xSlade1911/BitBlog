import React from "react";
import Header from "../Header/Header";
import AuthorsPageContent from "./AuthorsPageContent/AuthorsPageContent";
import Footer from "../Footer/Footer";
function AuthorsPage() {
  return (
    <div id="container">
      <Header />
      <AuthorsPageContent />
      <Footer />
    </div>
  );
}
export default AuthorsPage;
