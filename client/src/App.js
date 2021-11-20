import React from "react";
// import { Route } from "react-router-dom";
import { Switch, Route } from "react-router";
import "./App.css";
import Register from "./pages/Register";
import ScriptDetail from "./pages/ScriptDetail";
import StartPage from "./pages/StartPage";
import UploadScript from "./pages/UploadScript";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route path="/register" component={Register} />
        <Route path="/upload" component={UploadScript} />

        <Route path="/scripts/:id" component={ScriptDetail} />
      </Switch>
    </div>
  );
}

export default App;
