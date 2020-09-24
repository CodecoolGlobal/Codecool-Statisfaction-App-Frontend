import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AuthPage from "./Pages/AuthPage";
import AuthCheck from "./Util/AuthCheck";

function App() {
  return (
        <BrowserRouter>
            <Route exact path="/" component={AuthCheck(HomePage, false)} />
            <Route exact path="/login" component={AuthPage} />
        </BrowserRouter>
  );
}

export default App;
