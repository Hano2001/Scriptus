import React from "react";
// import { Route } from "react-router-dom";
import { Switch, Route } from "react-router";
import "./App.css";
import PdfViewer from "./pages/PdfViewer";
import StartPage from "./pages/StartPage";
import UploadScript from "./pages/UploadScript";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <StartPage />
        </Route>
        <Route path="/upload">
          <UploadScript />
        </Route>
        <Route path="/pdf">
          <PdfViewer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
