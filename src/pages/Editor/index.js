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
    <Route path="/editor" exact render={() => <Redirect to="/editor/quill" />} />
    <Route path="/editor/quill" component={lazy("Quill")} />
  </Switch>
);
