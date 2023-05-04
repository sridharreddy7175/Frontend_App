import React from "react";
import {  BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../pages/login/login-app";
import RegisterPage from "../pages/login/register-app";

const RoutesPage = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage}></Route>
        <Route exact path="/register" component={RegisterPage}></Route>

      </Switch>
    </BrowserRouter>
  );
};

export default RoutesPage;
