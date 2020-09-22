import React from "react";
import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";
import HomePage from './Pages/HomePage';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={HomePage} />
        </div>
    </BrowserRouter>
  );
}

export default App;
