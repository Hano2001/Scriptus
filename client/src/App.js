import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Switch, Route, withRouter } from "react-router";
import "./App.css";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ScriptDetail from "./pages/ScriptDetail";
import StartPage from "./pages/StartPage";
import UploadScript from "./pages/UploadScript";
import UserPage from "./pages/UserPage";
import { MainDiv } from "./components/styled/Styled";

function App() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [login, setLogin] = useState(false);
  const [userId, setUserId] = useState("");
  const history = useHistory();
  let url = window.location.pathname;
  const checkLogin = async () => {
    const { data } = await axios.get(`${apiUrl}/auth/checklogin`);
    if (data.online === true) {
      setLogin(true);
      console.log(data.userId);
      setUserId(data.userId);
    }
  };

  useEffect(() => {
    checkLogin();
  }, [url]);
  return (
    <MainDiv>
      <Navbar login={login} userId={userId} />
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route
          path="/upload"
          component={() => <UploadScript login={login} />}
        />
        <Route path="/scripts/:id" component={ScriptDetail} />
        <Route path="/users/:id" component={UserPage} />
      </Switch>
    </MainDiv>
  );
}

export default withRouter(App);
