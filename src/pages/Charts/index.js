import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "../../components/Loading";

const lazy = (Name) =>
  Loadable({
    loader: () => import(`./${Name}`),
    loading: Loading,
  });

export default ({ match }) => (
  <Switch>
    <Route path="/charts" exact render={() => <Redirect to="/charts/line-chart" />} />
    <Route path="/charts/line-chart" component={lazy("LineChart")} />
    <Route path="/charts/bar-chart" component={lazy("BarChart")} />
  </Switch>
);
