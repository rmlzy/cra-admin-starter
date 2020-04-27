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
    <Route path="/ui" exact render={() => <Redirect to="/ui/button" />} />
    <Route path="/ui/button" component={lazy("Button")} />
    <Route path="/ui/icon" component={lazy("Icon")} />
  </Switch>
);
