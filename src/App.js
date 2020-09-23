import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AuthPage from "./Pages/AuthPage";
import AuthCheck from "./Util/AuthCheck";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <BrowserRouter>
          <div className="App">
            <Route exact path="/" component={AuthCheck(HomePage, true)} />
            <Route exact path="/login" component={AuthPage} />
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
