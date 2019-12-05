import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./components/AboutPage/AboutPage";
import AuthorsPage from "./components/AuthorsPage/AuthorsPage";
import SinglePostPage from "./components/SinglePostPage/SinglePostPage";
import SingleAuthorPage from "./components/SingleAuthorPage/SingleAuthorPage";
import NewPost from "./components/NewPost/NewPost";

function App(props) {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/authors" component={AuthorsPage} />
      <Route path="/singlepost" component={SinglePostPage} />
      <Route path="/singleauthor" component={SingleAuthorPage} />
      <Route path="/newpost" component={NewPost} />
    </Switch>
  );
}

export default App;
