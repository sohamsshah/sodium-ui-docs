import './App.css';
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home"
import Docs from "./components/Docs"


function App() {
  return (
    <div>
        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/docs" exact component={Docs}/>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
