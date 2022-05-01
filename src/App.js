import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MicroFrontend from "./MicroFrontend";
import "./App.css";
import Header from "./Header";

const {
  REACT_APP_CONCEPT_HOST: conceptHost,
  REACT_APP_PROS_AND_CRONS_HOST: prosAndCronsHost,
  REACT_APP_DETAIL_HOST: detailHost,
} = process.env;

function Concept({ history }) {
  return <MicroFrontend history={history} host={conceptHost} name="Concept" />;
}

function ProsAndCrons({ history }) {
  return <MicroFrontend history={history} host={prosAndCronsHost} name="ProsAndCrons" />;
}

function Detail({ history }) {
  return <MicroFrontend history={history} host={detailHost} name="Detail" />;
}

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Concept} />
          <Route exact path="/pros-and-crons" component={ProsAndCrons} />
          <Route exact path="/detail" component={Detail} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
