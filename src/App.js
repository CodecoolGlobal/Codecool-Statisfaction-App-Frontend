import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import AuthPage from "./Pages/AuthPage";
import AuthCheck from "./Util/AuthCheck";
import QuestionsPage from "./Pages/QuestionsPage";
import Header from "./Components/Header/Header";
import FeedbacksPage from "./Pages/FeedbacksPage/FeedbacksPage";
import Sidebar from "./Components/Sidebar/Sidebar";
import InfoBar from "./Components/InfoBar/InfoBar";
import Feedbacks from "./Components/Feedbacks/Feedbacks";
import NewsFeed from "./Components/NewsFeed";
import Profile from "./Components/Profile/Profile";
import QuestionFeed from "./Components/QuestionFeed";


function App() {
  return (
  <div className="app">
    <BrowserRouter>
      <Sidebar />
      <Route exact path="/login" component={AuthPage} />
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
