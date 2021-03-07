import './App.css';
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./views/homePage/HomePage"
import ModelPage from "./views/ModelPage/ModelPage"
import NavBar from "./views/NavBar/NavBar"

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <NavBar />
    <div style={{ paddingTop: "75px", minHeight: "calc(100vh - 80px)" }}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/model" component={ModelPage} />
      </Switch>
    </div>
    </Suspense>
  );
}

export default App;
