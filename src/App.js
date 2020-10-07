import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import AuthCheck from "./Util/AuthCheck";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import InfoBar from "./Components/InfoBar/InfoBar";
import NewsFeed from "./Components/News/NewsFeed";
import Profile from "./Components/Profile/Profile";
import QuestionFeed from "./Components/Survey/QuestionFeed";
import Login from "./Components/Login/Login"
import Feedbacks from "./Components/Feedback/Feedbacks"

function App() {
  return (
  <div className="app">
    <BrowserRouter>
      <Sidebar />
      <Route exact path="/login" component={Login} />
      <Route
        exact
        path="/feedbacks"
        component={AuthCheck(Feedbacks, true)}
      />
      <Route exact path="/profile" component={AuthCheck(Profile, true)} />
      <Route
        exact
        path="/questions"
        component={AuthCheck(QuestionFeed, true)}
      />
      <Route exact path="/" component={AuthCheck(NewsFeed, true)} />
      <InfoBar />
    </BrowserRouter>
    </div>
  );
}

export default App;
