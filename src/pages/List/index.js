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
    <Route path="/list" exact render={() => <Redirect to="/list/table" />} />
    <Route path="/list/table" component={lazy("Table")} />
  </Switch>
);
