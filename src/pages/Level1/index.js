import React from "react";
import Loadable from "react-loadable";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "../../components/Loading";

const lazy = (Name) =>
  Loadable({
    loader: () => import(`./${Name}`),
    loading: Loading,
  });

export default ({ match }) => (
  <Switch>
    <Route path="/level1" exact render={() => <Redirect to="/level1/home" />} />
    <Route path="/level1/home" component={lazy("Home")} />
    <Route path="/level1/level2" component={lazy("Level2")} />
  </Switch>
);
