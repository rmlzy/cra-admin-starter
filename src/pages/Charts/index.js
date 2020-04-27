import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import loadable from "@loadable/component";
import { Loading } from "../../components";

const lazy = (Name) =>
  loadable(() => import(`./${Name}`), {
    fallback: Loading,
  });

export default ({ match }) => (
  <Switch>
    <Route path="/charts" exact render={() => <Redirect to="/charts/line-chart" />} />
    <Route path="/charts/line-chart" component={lazy("LineChart")} />
    <Route path="/charts/bar-chart" component={lazy("BarChart")} />
  </Switch>
);
