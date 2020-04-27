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
    <Route path="/list" exact render={() => <Redirect to="/list/table" />} />
    <Route path="/list/table" component={lazy("Table")} />
  </Switch>
);
