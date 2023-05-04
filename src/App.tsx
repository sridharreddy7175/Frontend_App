import React from "react";
import { HashRouter, BrowserRouter, Switch, Route } from 'react-router-dom'

import "./App.css";
import RoutesPage from "./routes";

function App() {
  return (
    <BrowserRouter basename='/'>
    <Switch>
      <RoutesPage />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
