import './App.css';
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage"
import ModelPage from "./views/ModelPage/ModelPage"
import NavBar from "./views/NavBar/NavBar"
import OverviewPage from "./views/OverviewPage/OverviewPage"
import SamplePage from "./views/SamplePage/SamplePage"

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <NavBar />
    <div style={{ paddingTop: "75px", minHeight: "calc(100vh - 80px)" }}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/model" component={ModelPage} />
        <Route exact path="/overview" component={OverviewPage}/>
        <Route exact path="/sample" component={SamplePage}/>
      </Switch>
    </div>
    </Suspense>
  );
}

export default App;
