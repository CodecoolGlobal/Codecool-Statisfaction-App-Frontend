import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import AuthPage from "./Pages/AuthPage";
import AuthCheck from "./Util/AuthCheck";
import Sidebar from "./Components/Sidebar";
import QuestionsPage from "./Pages/QuestionsPage";

function App() {
  return (
        <BrowserRouter>
            <Route exact path="/" component={AuthCheck(HomePage, false)} />
            <Route exact path="/profile" component={AuthCheck(ProfilePage, false)} />
            <Route exact path="/questions" component={AuthCheck(QuestionsPage, false)} />
            <Route exact path="/login" component={AuthPage} />
        </BrowserRouter>
  );
}

export default App;
