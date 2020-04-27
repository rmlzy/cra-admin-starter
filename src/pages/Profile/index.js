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
    <Route path="/profile" exact render={() => <Redirect to="/profile/basic" />} />
    <Route path="/profile/basic" component={lazy("Basic")} />
  </Switch>
);
