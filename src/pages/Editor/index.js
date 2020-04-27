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
    <Route path="/editor" exact render={() => <Redirect to="/editor/quill" />} />
    <Route path="/editor/quill" component={lazy("Quill")} />
  </Switch>
);
